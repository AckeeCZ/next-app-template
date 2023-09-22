import { Preview } from '@storybook/react';
import { IntlProvider } from 'react-intl';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
    },
    decorators: [
        Story => (
            <IntlProvider locale='en'>
                {/* <ThemeProvider theme="default"> */}
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
                {/* </ThemeProvider> */}
            </IntlProvider>
        ),
    ],
};

export default preview;
