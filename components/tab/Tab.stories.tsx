import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Tab from './Tab';
import {View} from 'react-native';
import {TabItemType, TabProps} from './Tab.types';
import addMarginContainer from '../../helpers/addMargin';

const meta: Meta = {
  title: 'Etendo/Tab',
  component: Tab,
  argTypes: {},
};
export default meta;

/* Information to pass */
const datasetTab: TabItemType[] = [
  {name: 'Home', route: '/home'},
  {name: 'About', route: '/about'},
  {name: 'Staff', route: '/staff'},
  {name: 'Login', route: '/login'},
  {name: 'Logout', route: '/logout'},
];

/* Templates */

const TemplateDefault: Story<TabProps> = ({onPressTab, ...args}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <View style={addMarginContainer()}>
      <Tab
        {...args}
        currentIndex={selectedTab}
        onPressTab={(route, index) => {
          setSelectedTab(index);
        }}
      />
    </View>
  );
};

/* Story exports */
export const TabDefault = TemplateDefault.bind({});
TabDefault.args = {
  data: datasetTab,
};
