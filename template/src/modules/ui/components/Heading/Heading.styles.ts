import { styled } from 'styles/theme';

export const Heading = styled('h1', {
    lineHeight: '1',
    fontWeight: 600,
    margin: 0,

    variants: {
        level: {
            1: {
                fontSize: '$1',
            },
            2: {
                fontSize: '$2',
            },
        },
    },

    defaultVariants: {
        level: 1,
    },
});
