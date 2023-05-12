import type { ComponentMeta } from '@storybook/react';

import { Heading } from './Heading.styles';

export default {
    title: 'UI/Heading',
    component: Heading,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Heading>;

export const Primary = () => (
    <>
        <Heading level={1}>Heading level 1</Heading>
        <Heading level={2}>Heading level 2</Heading>
    </>
);
