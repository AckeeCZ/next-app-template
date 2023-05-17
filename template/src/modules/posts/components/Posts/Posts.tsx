'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { config } from 'config/config';
import { useAppMutation } from 'modules/api/hooks';
import { getQueryData } from 'modules/api/services';
import { QueryKey } from 'modules/api/types';
import { Card, Heading } from 'modules/ui';

import { button, code, container, description, footer, grid, inlineCode, logo, main } from './Posts.styles';

interface Post {
    id: number;
    name: string;
    duration: number;
    score: number;
}

export const Posts = () => {
    const queryClient = useQueryClient();
    const { data, isError, isLoading, isSuccess } = useQuery<Post[]>([QueryKey.Posts], () =>
        getQueryData(config.endpoints.posts),
    );

    const { refresh } = useRouter();
    const { mutateAsync } = useAppMutation(config.endpoints.posts, {
        // Note: optional options
    });

    // TODO: Remove logs when ready
    console.log({ data, isError, isLoading, isSuccess });

    return (
        <div className={container()}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={main()}>
                <Heading>
                    This is Ackee <a href="https://nextjs.org">Next.js</a> template!
                </Heading>

                <p className={description()}>
                    Get started by editing <code className={code()}>pages/index.tsx</code>
                </p>

                <div className={grid()}>
                    <Card
                        url={'https://nextjs.org/docs'}
                        title="Documentation &rarr;"
                        description="Find in-depth information about Next.js features and API."
                    />
                    <Card
                        url={'https://nextjs.org/learn'}
                        title="Learn &rarr;"
                        description="Learn about Next.js in an interactive course with quizzes!"
                    />
                    <Card
                        url={'https://github.com/AckeeCZ/next-app-template/tree/main/docs/sentry.md'}
                        title="How to use Sentry &rarr;"
                        description="Find out how to configure Sentry in the app and test the setup with button below."
                        action={
                            <button
                                type="button"
                                onClick={() => {
                                    throw new Error('Sentry Frontend Error');
                                }}
                                className={button()}
                            >
                                Throw error
                            </button>
                        }
                    />

                    <Card
                        url={'https://github.com/AckeeCZ/next-app-template/tree/main/docs/resizin.md'}
                        title="How to use Resizin &rarr;"
                        description={
                            <>
                                If you need to use Ackee image server Resizin, read how to setup &amp; and use it along
                                with <code className={inlineCode()}>next-image</code>.
                            </>
                        }
                    />

                    <Card
                        url="https://tanstack.com/query/latest"
                        title="Tanstack query usage"
                        description="Test adding new recipe with useMutation hook"
                        action={
                            <button
                                type="button"
                                onClick={async e => {
                                    e.preventDefault();
                                    // Note: Create special custom hook for mutations

                                    await mutateAsync({ name: 'New recipe' });

                                    queryClient.invalidateQueries({ queryKey: [QueryKey.Posts] });

                                    refresh();
                                }}
                                className={button()}
                            >
                                Add new recipe
                            </button>
                        }
                    />

                    <Card
                        url="https://github.com/AckeeCZ/next-app-template/tree/main/docs/next-auth.md"
                        title="Tips on Auth &rarr;"
                        description={
                            <>
                                Some advices for using <code className={inlineCode()}>next-auth</code> package
                            </>
                        }
                    />
                </div>
            </main>

            <footer className={footer()}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    With love by{' '}
                    <span className={logo()}>
                        <Image src="/ackee.svg" alt="Ackee Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};
