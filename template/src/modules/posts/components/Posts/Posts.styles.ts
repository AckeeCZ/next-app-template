import { css } from 'styles/theme';

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
