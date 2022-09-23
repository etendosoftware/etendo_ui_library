import React from 'react';
import { Story, Meta } from '@storybook/react';


import Input, { Props } from './InputComponent/Input';

export default {
  title: 'Etendo/Button',
  component: Input,
  argTypes: {
  },
} as Meta<typeof Input>;
const Template: Story<Props> = (args) => <Input onPress={() => { }}{...args} />;

export const Primary = Template.bind({});
Primary.args = {
  typeField:'searchPressable',
  disabled: false,
};

