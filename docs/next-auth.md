# Next-auth

`next-auth` package is a pretty solid solution for authentication in Next.js. It has a [great documentation](https://next-auth.js.org/getting-started/introduction) so this doc won't repeat what's already written there. But there is few special cases that deserves a closer look and explanation.

## Usage with `firebase/auth`

Although there are many [auth providers](https://next-auth.js.org/providers/), there is no official provider for Firebase Auth. We need to play around a bit and combine other existing providers.

First of all be sure to initialize Firebase auth somewhere at the top of `pages/api/auth/[...next-auth].ts` file

```ts
import nextAuth from 'next-auth';
import { getApps, initializeApp } from '@firebase/app';

if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

export default nextAuth({
    ...
})
...
```

### Credentials login

There is an official [**credentials** next-auth provider](https://next-auth.js.org/providers/credentials) we can use.

```ts
import credentials from 'next-auth/providers/credentials';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

interface Credentials {
    email: string;
    password: string
}

async function login(credentials?: Credentials) => {
    if (!credentials) return null;

    const auth = getAuth();
    const userCredentials = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
    );

    if (userCredentials) {
        const { user: firebaseUser } = userCredentials;
        const accessToken = await firebaseUser.getIdToken();

        // This is optional, see note below the snippet
        const apiUser = await getUserDataFromApi(accessToken);

        return {
            provider: 'credentials',
            user: {
                email: firebaseUser.email,
                name: firebaseUser.displayName,
                image: firebaseUser.photoURL,
            },
            apiUser,
        };
    }

    return null;
}

export default nextAuth({
    providers: [
        credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: login,
        }),
        ...
    ],
    callbacks: {
        jwt: async ({ user, account }) => {
            if (account?.provider === 'credentials' && user) {
                return user;
            }
        }
        session: ({ session, token }) => ({
            ...session,
            apiUser: token.apiUser,
            user: token.user,
            error: token.error,
        }),
    }
    ...
});
```

Using `getUserDataFromApi` is not obligatory. Actually you can return just `firebaseUser` from the `authorize` function and authentication will work.

However it's a common case you need some additional user data not located in Firebase auth storage but rather in our database. And to be able to easily get these data anywhere in your app using the [`useSession` hook](https://next-auth.js.org/getting-started/client#usesession) we're doing this.

```ts
import { useSession } from "next-auth/react";

const { status, data } = useSession();

session.user;
session.apiUser;
```

### Registration

Together with login usually comes registration. We're gonna utilize `credentials` provider again here and follow the [guide for multiple providers](https://next-auth.js.org/providers/credentials#multiple-providers).

```ts
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { tokenExpiration } from './tokenExpiration';

async function register(credentials?: Credentials) => {
    if (!credentials) return null;

    const auth = getAuth();
    const userCredentials = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
    );

    if (userCredentials) {
        const { user: firebaseUser } = userCredentials;

        return {
            provider: 'credentials',
            user: {
                email: firebaseUser.email,
                name: firebaseUser.displayName,
                image: firebaseUser.photoURL,
            },
        };
    }

    return null;
};

...

export default nextAuth({
    providers: [
        credentials({
            name: 'credentialsRegister',
            id: 'credentialsRegister',
            credentials: {
                email: {},
                password: {},
            },
            authorize: register,
        }),
        credentials({
            name: 'credentialsLogin',
            id: 'credentialsLogin',
            credentials: {
                email: {},
                password: {},
            },
            authorize: login,
        }),
        ...
    ],
    ...
})
```

And then when we're calling [`signIn` method](https://next-auth.js.org/getting-started/client#signin) in our app, we need to provider the correct identifier

```ts
function handleLoginFormSubmit() {
    const onSubmit = async ({ email, password }) => {
    await signIn('credentialsLogin', { email, password });
}

function handleRegisterFormSubmit() {
    const onSubmit = async ({ email, password }) => {
    await signIn('credentialsRegister', { email, password });
}

```

### Social login

For social logins like Google, Facebook there are official [next-auth providers](https://next-auth.js.org/providers). The problem is that they connect directly to Google / Facebook OAuth server which causes user not being registered in Firebase auth (as they are when we use [`GoogleAuthProvider`](https://firebase.google.com/docs/auth/web/google-signin) or [`FacebookAuthProvider`](https://firebase.google.com/docs/auth/web/facebook-login)).

Start with setting the providers up

```ts
import google from 'next-auth/providers/google';
import facebook from 'next-auth/providers/facebook';

cosnt {
    FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} = process.env

export default nextAuth({
    providers: [
        facebook({
            clientId: FACEBOOK_CLIENT_ID as string,
            clientSecret: FACEBOOK_CLIENT_SECRET as string,
        }),
        google({
            clientId: GOOGLE_CLIENT_ID as string,
            clientSecret: GOOGLE_CLIENT_SECRET as string,
        }),
        ...
    ]
    ...
})
```

then use the autenticated user account to in [JWT callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) to process it also through firebase auth

```ts
import type { Account, User } from 'next-auth';

export enum AuthProvider {
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
}

const getCredentials = (account: Account, provider: AuthProvider) => {
    switch (provider) {
        case AuthProvider.FACEBOOK:
            return FacebookAuthProvider.credential(account.access_token);
        case AuthProvider.GOOGLE:
            return GoogleAuthProvider.credential(account.id_token);
    }
};

export const firebaseSocialLogin = async (account: Account): Promise<User> => {
    const provider = account?.provider;
    const auth = getAuth();
    const credential = getCredential(account, provider);

    const { user: firebaseUser } = await signInWithCredential(
        auth,
        credential
    );
    const accessToken = await firebaseUser.getIdToken();
    // This is optional, see "Credentials login" section
    const apiUser = await getUserDataFromApi(accessToken);

    const user = {
        email: firebaseUser.email ?? '',
        name: firebaseUser.displayName ?? '',
        image: firebaseUser.photoURL ?? '',
    };

    return {
        id: apiUser?.id ?? firebaseUser.uid,
        provider,
        user,
        apiUser,
    };

export default nextAuth({
    providers: [
        ...
    ],

    callbacks: {
        jwt: async ({ token, user, account }) => {
            const isGoogleLogin = account?.provider === 'google';
            const isFacebookLogin = account?.provider === 'facebook';

            const isSocialLogin = isGoogleLogin || isFacebookLogin;

            if (isSocialLogin) {
                return await firebaseSocialLogin(account);
            }
        }
        ...
    }
})
```

## Using access token for API calls

TBD
