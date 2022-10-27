import React from 'react';
import renderer from 'react-test-renderer';

import {Info} from './StatusBar.types';
import {StatusBarStep3Active} from './StatusBarStep3Active';

const dataset: Info[] = [
  {
    step: '1. Vehicles',
    activeImage: require('../../assets/images/icons/calendar-secundary.png'),
    activeTextTop: 'Current plan date',
    activeTextBottom: '03 January, 2022',
  },
  {
    step: '2. Visits',
    activeImage: require('../../assets/images/icons/calendar-secundary.png'),
    activeTextTop: 'Current plan date',
    activeTextBottom: '03 January, 2022',
  },
  {
    step: '3. Routes',
    activeImage: require('../../assets/images/icons/calendar-secundary.png'),
    activeTextTop: 'Current plan date',
    activeTextBottom: '03 January, 2022',
  },
];

describe('Running Test for StatusBarStep1Active', () => {
  it('Check StatusBarStep1Active', () => {
    const tree = renderer
      .create(<StatusBarStep3Active data={dataset} step={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
