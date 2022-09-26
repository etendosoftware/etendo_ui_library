import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react-native';

import {Tab} from './Tab';
import {TabSecondary} from './TabComponents/TabSecondary';

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
    render(<Tab data={data1} onChangeSelected={dataPassage} />);
    render(<TabSecondary data={data1} onChangeSelected={dataPassage} />);
    //expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled();
  });
});
