import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
        colors: {
            primary: '#000',
        },
        sizes: {
            icon: '24px',
        },
        fontSizes: {
            1: '6rem',
            2: '2.5rem',
        },
    },
    media: {
        tablet: '(min-width: 768px)',
        desktop: '(min-width: 1024px)',
        desktopLarge: '(min-width: 1440px)',
    },
    utils: {
        size: (value: number | string) => ({ width: value, height: value }),
    },
});
