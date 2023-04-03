import { globalCss } from './theme';

export const globalStyles = globalCss({
    'html, body': {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },

    a: {
        color: 'inherit',
        textDecoration: 'none',
    },

    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },

    'img, picture, video, canvas, svg': {
        display: 'block',
        maxWidth: '100%',
    },
});
