import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {},
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
