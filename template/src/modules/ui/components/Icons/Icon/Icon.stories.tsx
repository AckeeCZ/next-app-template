import type { ComponentMeta } from '@storybook/react';

import { Cross } from '../Icons';
import { Icon } from './Icon';

export default {
    title: 'UI/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const Primary = () => <Icon icon={Cross} />;
