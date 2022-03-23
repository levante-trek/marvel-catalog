import React from 'react';
import { HeroesSearch } from './HeroesSearch';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/HeroesSearch',
  component: HeroesSearch,
  decorators: [
    (Story) => (
      <div style={{ width: '35%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HeroesSearch>;

const Template: ComponentStory<typeof HeroesSearch> = (args) => (
  <HeroesSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
