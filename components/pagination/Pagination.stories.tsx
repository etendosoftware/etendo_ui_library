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

const Template2: Story<PaginationProps> = args => (
  <Pagination
    currentPage={1}
    onChangeSelected={onCheckSelectedMock}
    totalData={160}
    amountDataPerPage={10}
  />
);

const Template3: Story<PaginationProps> = args => (
  <Pagination
    currentPage={1}
    onChangeSelected={onCheckSelectedMock}
    totalData={200}
    amountDataPerPage={5}
  />
);

/* Story exports */
export const PaginationVersion1 = Template.bind({});
PaginationVersion1.args = {};

export const PaginationVersion2 = Template2.bind({});
PaginationVersion2.args = {};

export const PaginationVersion3 = Template3.bind({});
PaginationVersion3.args = {};
