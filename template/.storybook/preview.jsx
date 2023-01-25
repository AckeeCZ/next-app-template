import { Fela } from '../src/modules/fela';

import '../src/styles/globals.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    Story => (
        <Fela>
            <Story />
        </Fela>
    ),
];
