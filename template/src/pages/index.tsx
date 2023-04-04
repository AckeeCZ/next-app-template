import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { config } from 'config';
import { QueryKeyName, useAppMutation, useAppQuery } from 'modules/api';
import { Heading } from 'modules/ui';
import { css } from 'styles/theme';

const cardHoverStyle = {
    color: '#0070f3',
    borderColor: '#0070f3',
};

const buttonHoverStyle = {
    color: '#000',
    borderColor: '#000',
};

const codeBaseStyle = {
    background: '#fafafa',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontFamily:
        'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
};

export const container = css({
    padding: '0 2rem',
});

export const main = css({
    minHeight: '100vh',
    padding: '4rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const footer = css({
    display: 'flex',
    flex: '1',
    padding: '2rem 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',

    '& a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1',
    },
});

export const description = css({
    margin: '4rem 0',
    lineHeight: '1.5',
    fontSize: '1.5rem',
    textAlign: 'center',
});
export const code = css({
    ...codeBaseStyle,
    padding: '0.75rem',
});
export const inlineCode = css({
    ...codeBaseStyle,
    padding: '0.45rem',
});
export const grid = css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',

    '@media (max-width: 600px)': {
        width: '100%',
        flexDirection: 'column',
    },
});
export const card = css({
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: '300px',

    '&:hover': cardHoverStyle,
    '&:focus': cardHoverStyle,
    '&:active': cardHoverStyle,

    '& h2': {
        margin: '0 0 1rem 0',
        fontSize: '1.5rem',
    },

    '& p': {
        margin: '0',
        fontSize: '1.25rem',
        lineHeight: '1.5',
    },
});
export const logo = css({
    height: '1em',
    marginLeft: '0.5rem',
});

export const button = css({
    display: 'block',
    margin: '0.5rem auto',
    padding: '0.8rem',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    cursor: 'pointer',

    '&:hover': buttonHoverStyle,
    '&:focus': buttonHoverStyle,
    '&:active': buttonHoverStyle,
});

// export const getServerSideProps: GetServerSideProps = async context => {
//     const queryClient = new QueryClient();

//     const testDataQueryFn = async () => getQueryData(config.endpoints.testData);

//     // Note: How to fetch data on server side
//     await queryClient.prefetchQuery([QueryKeyName.TEST_DATA], testDataQueryFn);

//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         },
//     };
// };

const Home: NextPage = () => {
    // Note: How to fetch data on client side
    const { data, isError, isLoading, isSuccess } = useAppQuery(
        [QueryKeyName.TEST_DATA],
        config.endpoints.testData,
        {},
    );

    const { mutate } = useAppMutation(config.endpoints.testData, {
        // Note: optional options
    });

    // eslint-disable-next-line no-console
    console.log(data, isError, isLoading, isSuccess);

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
                    <a href="https://nextjs.org/docs" className={card()}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={card()}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <div className={card()}>
                        <a href="https://github.com/AckeeCZ/next-app-template/tree/main/docs/sentry.md">
                            <h2>How to use Sentry &rarr;</h2>
                            <p>Find out how to configure Sentry in the app and test the setup with button below.</p>
                        </a>

                        <button
                            type="button"
                            onClick={() => {
                                throw new Error('Sentry Frontend Error');
                            }}
                            className={button()}
                        >
                            Throw error
                        </button>
                    </div>

                    <a href="https://github.com/AckeeCZ/next-app-template/tree/main/docs/resizin.md" className={card()}>
                        <h2>How to use Resizin &rarr;</h2>
                        <p>
                            If you need to use Ackee image server Resizin, read how to setup &amp; and use it along with{' '}
                            <code className={inlineCode()}>next-image</code>.
                        </p>
                    </a>

                    <a href="https://tanstack.com/query/latest" className={card()}>
                        <h2>Tanstack query usage</h2>
                        <p>Test adding new recipe with useMutation hook</p>

                        <button
                            type="button"
                            onClick={async e => {
                                e.preventDefault();
                                await mutate({ name: 'New recipe' });
                            }}
                            className={button()}
                        >
                            Add new recipe
                        </button>
                    </a>

                    <a
                        href="https://github.com/AckeeCZ/next-app-template/tree/main/docs/next-auth.md"
                        className={card()}
                    >
                        <h2>Tips on Auth &rarr;</h2>
                        <p>
                            Some advices for using <code className={inlineCode()}>next-auth</code> package
                        </p>
                    </a>
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

export default Home;
