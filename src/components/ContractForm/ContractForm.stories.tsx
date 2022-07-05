import React from 'react';
import { ContractForm } from './ContractForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/ContractForm',
  component: ContractForm,
} as ComponentMeta<typeof ContractForm>;

const Template: ComponentStory<typeof ContractForm> = (args) => (
  <ContractForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'prueba',
};
