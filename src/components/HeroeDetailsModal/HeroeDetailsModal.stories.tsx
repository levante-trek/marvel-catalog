import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeroeDetailsModal } from './HeroeDetailsModal';

export default {
  title: 'components/HeroeDetailsModal',
  component: HeroeDetailsModal,
  decorators: [
    (Story) => (
      <div style={{ width: '35%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HeroeDetailsModal>;

const Template: ComponentStory<typeof HeroeDetailsModal> = (args) => (
  <HeroeDetailsModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Antonio',
  image: 'https://www.bolsamania.com/cine/wp-content/uploads/2017/10/33.jpg',
  description:
    'Pero esto qué es por favor, eres un degenerado, Marcos. Es incesto por favor, la propia palabra lo dice: in-ces-to.',
  open: true,
  handleClose: () => {},
};
