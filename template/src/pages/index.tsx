import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { useFelaEnhanced } from 'hooks';

const underlinedStyle = {
    textDecoration: 'underline',
};

const cardHoverStyle = {
    color: '#0070f3',
    borderColor: '#0070f3',
};

const buttonHoverStyle = {
    color: '#000',
    borderColor: '#000',
};

const felaRules = {
    container: {
        padding: '0 2rem',
    },

    main: {
        minHeight: '100vh',
        padding: '4rem 0',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
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
    },

    title: {
        margin: '0',
        lineHeight: '1.15',
        fontSize: '4rem',
        textAlign: 'center',

        '& a': {
            color: '#0070f3',
            textDecoration: 'none',

            '&:hover': underlinedStyle,
            '&:focus': underlinedStyle,
            '&:active': underlinedStyle,
        },
    },

    description: {
        margin: '4rem 0',
        lineHeight: '1.5',
        fontSize: '1.5rem',
        textAlign: 'center',
    },

    code: {
        background: '#fafafa',
        borderRadius: '5px',
        padding: '0.75rem',
        fontSize: '1.1rem',
        fontFamily:
            'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
    },

    grid: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '800px',

        '@media (max-width: 600px)': {
            width: '100%',
            flexDirection: 'column',
        },
    },

    card: {
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
    },

    logo: {
        height: '1em',
        marginLeft: '0.5rem',
    },

    button: {
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
    },
};

const Home: NextPage = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    This is Ackee <a href="https://nextjs.org">Next.js</a> template!
                </h1>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <div className={styles.card}>
                        <a href="https://github.com/AckeeCZ/next-app-template/tree/main/docs/sentry.md">
                            <h2>How to use Sentry &rarr;</h2>
                            <p>Find out how to configure Sentry in the app and test the setup with button below.</p>
                        </a>

                        <button
                            type="button"
                            onClick={() => {
                                throw new Error('Sentry Frontend Error');
                            }}
                            className={styles.button}
                        >
                            Throw error
                        </button>
                    </div>

                    <div className={styles.card}>
                        <a href="https://github.com/AckeeCZ/next-app-template/tree/main/docs/resizin.md">
                            <h2>How to use Resizin &rarr;</h2>
                            <p>If you need to use Resizin, read the setup guide.</p>
                        </a>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    With love by{' '}
                    <span className={styles.logo}>
                        <Image src="/ackee.svg" alt="Ackee Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
