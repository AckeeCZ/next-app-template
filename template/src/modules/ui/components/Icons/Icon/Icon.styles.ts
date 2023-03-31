import { styled } from 'styles/theme';

export const IconBox = styled('span', {
    width: '$icon',
    height: '$icon',

    color: 'currentColor',
    display: 'flex',
    alignItems: 'center',

    '& > svg': {
        width: '100%',
        height: '100%',
    },

    variants: {
        mobileInline: {
            true: {
                '@tabletMax': {
                    display: 'inline-block',

                    marginLeft: '0.25rem',
                    transform: 'translateY(16%)',
                },
            },
        },
    },
});
