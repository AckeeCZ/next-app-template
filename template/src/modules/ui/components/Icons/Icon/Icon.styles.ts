import { styled } from 'styles/theme';

export const IconBox = styled('span', {
    size: '$icon',

    color: 'currentColor',
    display: 'flex',
    alignItems: 'center',

    '& > svg': {
        width: '100%',
        height: '100%',
    },
});
