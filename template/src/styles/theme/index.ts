import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
        colors: {
            accentPrimary: '#2FA875',
        },
        fonts: {
            museo: '"Museo Sans", sans-serif',
            elza: 'Elza, sans-serif',
        },
        sizes: {
            icon: '24px',
            buttonIcon: '38px',
            homepageContentWidth: '1282px',
        },
        space: {
            containerPadding: '1.5rem',
        },
        zIndices: {
            mobileNavigation: 10,
            backgrounds: -1,
        },
        shadows: {},
    },
    media: {
        tabletMax: '(max-width: 767px)',
        tablet: '(min-width: 768px)',
        tabletSmall: '(min-width: 620px)',
        desktop: '(min-width: 1024px)',
        desktopLarge: '(min-width: 1440px)',
        headerBreakpoint: '(min-width: 1206px)',
        maxHeaderBreakpoint: '(max-width: 1206px)',
        headerChangeLayout: '(min-width: 900px)',
    },
    utils: {
        size: (value: number | string) => ({ width: value, height: value }),
    },
});
