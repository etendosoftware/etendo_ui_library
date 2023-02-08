import React from 'react';
import {Story, Meta} from '@storybook/react';
import ComponentsStatesScreen from '../states/componentsStates/ComponentsStatesScreen';

const meta: Meta = {
  title: 'States',
};

export default meta;

const Template0: Story = args => <ComponentsStatesScreen />;

export const ComponentsStates = Template0.bind({});
