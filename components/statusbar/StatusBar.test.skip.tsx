import React from 'react';
import renderer from 'react-test-renderer';

import {StatusBar} from './StatusBar';
import {Info} from './StatusBar.types';

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

describe('Running Test for StatusBar', () => {
  it('Check StatusBar', () => {
    const tree = renderer
      .create(<StatusBar data={dataset} step={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
