import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonHTMLAttributes } from 'react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        type: {
            options: ['submit', 'button', 'reset'] satisfies ButtonHTMLAttributes<HTMLButtonElement>['type'][],
            control: { type: 'select' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        type: 'button',
        disabled: false,
        children: 'Button',
        backgroundColor: 'white',
    },
};
