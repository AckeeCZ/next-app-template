import { css } from '@stitches/react';

const cardHoverStyle = {
    color: '#0070f3',
    borderColor: '#0070f3',
};

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
