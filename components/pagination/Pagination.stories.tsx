import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Pagination} from './Pagination';
import {PaginationProps} from './Pagination.types';

export default {
  title: 'Etendo/Pagination',
  component: Pagination,
  argTypes: {},
} as Meta<typeof Pagination>;

/* Information to pass */
const dataset = [
  {name: 'User', route: '', key: 'user'},
  {name: 'Vehicles', route: '', key: 'vehicles'},
  {name: 'Skills', route: '', key: 'skills'},
  {name: 'Mobile app', route: '', key: 'movilApp'},
  {name: 'Staff', route: '', key: 'staff'},
  {name: 'Routing options', route: '', key: 'routing options'},
  {name: 'Map', route: '', key: 'map'},
];

/* This function allows you to select by default the first tab */
const onCheckSelectedMock = () => dataset[0];

/* Templates */
const Template: Story<PaginationProps> = args => (
  <Pagination
    currentPage={1}
    onChangeSelected={onCheckSelectedMock}
    totalData={40}
    amountDataPerPage={8}
  />
);

/* Story exports */
export const PaginationDefault = Template.bind({});
PaginationDefault.args = {};