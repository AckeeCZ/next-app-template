import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';

export default {
    title: 'UI/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    url: 'https://github.com/AckeeCZ/next-app-template/tree/main/docs/sentry.md',
    title: 'How to use Sentry &rarr;',
    description: 'Find out how to configure Sentry in the app and test the setup with button below.',
};
