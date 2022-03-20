import React from 'react';
import { HeroeCard } from './HeroeCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/HeroeCard',
  component: HeroeCard,
} as ComponentMeta<typeof HeroeCard>;

const Template: ComponentStory<typeof HeroeCard> = (args) => (
  <HeroeCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Falcon',
  image:
    'https://larepublica.pe/resizer/BVKAjwZvw5meexpUdIAB10kgF6U=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/ZYBCJOBFTNESDIKNCREMJPVWVI.jpg',
};
