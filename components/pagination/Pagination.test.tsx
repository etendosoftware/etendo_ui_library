import React from 'react';
import renderer from 'react-test-renderer';

import {Pagination} from './Pagination';

describe('Running Test for Tab', () => {
  it('Check Tab Disabled', () => {
    const tree = renderer
      .create(
        <Pagination currentPage={1} totalData={40} amountDataPerPage={8} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
