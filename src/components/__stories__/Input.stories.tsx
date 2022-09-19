import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input from '../Input';
import { InputProps } from "../Input.types"

export default {
  title: 'Etendo/Input',
  component: Input,
  argTypes: {
  },
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Primary',
};

