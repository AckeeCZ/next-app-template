import { globalCss } from './theme';

export const globalStyles = globalCss({
    'html, body': {
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },

    a: {
        color: 'inherit',
        textDecoration: 'none',
    },

    '*': {
        boxSizing: 'border-box',
    },
});
