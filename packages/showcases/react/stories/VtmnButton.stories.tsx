import React from 'react';
import { Story, Meta } from '@storybook/react';
import { VtmnButton } from '@decathlon/vitamin-react-button';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton
} as Meta;

const Template: Story = (args) => <VtmnButton {...args}>Hello React !</VtmnButton>;

export const Overview = Template.bind({});
