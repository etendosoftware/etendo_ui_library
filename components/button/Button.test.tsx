import React from 'react';
import renderer from 'react-test-renderer';
import {checkIcon} from '../../assets/images/icons';
import Button from './Button';

describe('Running Test for Input', () => {
  it('Check Button disabled', () => {
    const tree = renderer
      .create(
        <Button
          text={'Button CTA'}
          onPress={() => {}}
          typeStyle={'primary'}
          image={{
            imgRoute: checkIcon,
            imgHeight: 12,
            imgWidth: 16,
            imgMarginRight: 10,
          }}
          disabled={true}
          typeSize={'large'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
