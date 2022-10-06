import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Pagination} from './Pagination';
import {PaginationProps} from './Pagination.types';

export default {
  title: 'Etendo/Pagination',
  component: Pagination,
  argTypes: {},
} as Meta<typeof Pagination>;

/* Templates */
const Template: Story<PaginationProps> = args => (
  <Pagination currentPage={1} totalData={40} amountDataPerPage={8} />
);

const Template2: Story<PaginationProps> = args => (
  <Pagination currentPage={1} totalData={160} amountDataPerPage={10} />
);

const Template3: Story<PaginationProps> = args => (
  <Pagination currentPage={1} totalData={200} amountDataPerPage={5} />
);

/* Story exports */
export const PaginationVersion1 = Template.bind({});
PaginationVersion1.args = {};

export const PaginationVersion2 = Template2.bind({});
PaginationVersion2.args = {};

export const PaginationVersion3 = Template3.bind({});
PaginationVersion3.args = {};
