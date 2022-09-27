import React from 'react';
import renderer from 'react-test-renderer';

import Tab from './Tab';

const data1 = [
  {
    name: 'Prod. Interés',
    route: '',
    key: 'prodInteres',
  },
  {name: 'Pop Asignado', route: '', key: 'popAsignado'},
  {name: 'Incedencias', route: '', key: 'incidencias'},
  {name: 'Competencia', route: '', key: 'competencia'},
  {name: 'Preguntas', route: '', key: 'preguntas'},
  {name: 'Observaciones', route: '', key: 'observaciones'},
];

const dataPassage = (data: any) => {
  return data1[data];
};

describe('Running Test for Button', () => {
  it('Check Button Disabled', () => {
    const tree = renderer
      .create(
        <Tab data={data1} onChangeSelected={dataPassage} style="primary" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
