import { styled } from 'styles/theme';

export const Heading = styled('h1', {
    fontFamily: '$museo',
    fontWeight: 600,
    margin: 0,

    variants: {
        level: {
            1: {
                fontSize: '2.8125rem',
                lineHeight: '3.1875rem',

                '@desktop': {
                    fontSize: '4.6875rem',
                    lineHeight: '5.3125rem',
                    letterSpacing: '1%',
                },
            },
            2: {
                fontSize: '2.1875rem',
                lineHeight: '2.625rem',

                '@desktop': {
                    fontSize: '3.125rem',
                    lineHeight: '3.75rem',
                },
            },
        },
    },

    defaultVariants: {
        level: 1,
    },
});
