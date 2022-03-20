import { Paper } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HeroesList } from './HeroesList';

export default {
  title: 'components/HeroesList',
  component: HeroesList,
} as ComponentMeta<typeof HeroesList>;

const Template: ComponentStory<typeof HeroesList> = (args) => (
  <HeroesList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    <Paper>Edu</Paper>,
    <Paper>Carlos</Paper>,
    <Paper>Mery</Paper>,
    <Paper>Nit</Paper>,
    <Paper>Nilo</Paper>,
    <Paper>Frodo2.0</Paper>,
  ],
};
