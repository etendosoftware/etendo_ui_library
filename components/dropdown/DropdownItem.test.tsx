import React from 'react';
import renderer from 'react-test-renderer';
import DropdownItem from './DropdownItem';

const item = {name: 'User', route: '', key: 'user'};

describe('Running Test for DropdownItem', () => {
  it('Check DropdownItem Disabled', () => {
    const tree = renderer
      .create(
        <DropdownItem
          item={item}
          onPress={() => {}}
          index={0}
          toggleItem={0}
          sizeText={'medium'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
