import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react-native';

import {Button} from './Button';

describe('Running Test for Button', () => {
  it('Check Button Disabled', () => {
    render(<Button text="Button" onPress={() => {}} />);
  });
});
