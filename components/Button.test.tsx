import React from 'react';
import {Button} from './Button';
import renderer from 'react-test-renderer';

describe('Running Test for Button', () => {
  it('Check Button Disabled', () => {
    const tree = renderer
      .create(<Button text="Button" onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
