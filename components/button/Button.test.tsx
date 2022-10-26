import React from 'react';
import renderer from 'react-test-renderer';
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
            imgRoute: require('../../assets/images/icons/check.png'),
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
