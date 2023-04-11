import React from 'react';
import renderer from 'react-test-renderer';
import {CheckIcon} from '../../assets/images/icons/CheckIcon';
import Button from './Button';

describe('Running Test for Input', () => {
  it('Check Button disabled', () => {
    const tree = renderer
      .create(
        <Button
          text={'Button CTA'}
          onPress={() => {}}
          typeStyle={'primary'}
          image={
            <CheckIcon
              fill={'white'}
              style={{
                marginRight: 10,
                width: 12,
                height: 10,
              }}
            />
          }
          disabled={true}
          typeSize={'large'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
