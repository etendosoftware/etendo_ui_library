import React from 'react';
import {Story, Meta} from '@storybook/react';

import Tab from './Tab';
import {TabProps} from './Tab.types';

export default {
  title: 'Etendo/Tabs',
  component: Tab,
  argTypes: {},
} as Meta<typeof Tab>;

/* Information to pass */
const data1 = [
  {name: 'Usuario', route: '', key: 'usuario'},
  {name: 'Vehículos', route: '', key: 'vehiculos'},
  {name: 'Habilidades', route: '', key: 'habilidades'},
  {name: 'App móvil', route: '', key: 'appMovil'},
  {name: 'Personal', route: '', key: 'personal'},
  {name: 'Opciones de ruteo', route: '', key: 'opcionesDeRuteo'},
  {name: 'Mapa', route: '', key: 'mapa'},
];

const data2 = [
  {name: 'Prod. Interés', route: '', key: 'prodInteres'},
  {name: 'Pop Asignado', route: '', key: 'popAsignado'},
  {name: 'Incedencias', route: '', key: 'incidencias'},
  {name: 'Competencia', route: '', key: 'competencia'},
  {name: 'Preguntas', route: '', key: 'preguntas'},
  {name: 'Observaciones', route: '', key: 'observaciones'},
];

const data3 = [
  {name: 'Workspace', route: '', key: 'workspace'},
  {name: 'Business Partner', route: '', key: 'businessPartner'},
  {name: 'Sales order', route: '', key: 'salesOrder'},
];

/* Data passage */
const dataPassage1 = (data: any) => {
  return data1[data];
};

const dataPassage2 = (data: any) => {
  return data2[data];
};

const dataPassage3 = (data: any) => {
  return data3[data];
};

/* Templates */
const Template: Story<TabProps> = args => (
  <Tab data={data1} onChangeSelected={dataPassage1} style="primary" />
);

const Template2: Story<TabProps> = args => (
  <Tab data={data1} onChangeSelected={dataPassage2} style="secundary" />
);

const Template3: Story<TabProps> = args => (
  <Tab data={data2} onChangeSelected={dataPassage1} style="primary" />
);

const Template4: Story<TabProps> = args => (
  <Tab data={data2} onChangeSelected={dataPassage2} style="secundary" />
);

const Template5: Story<TabProps> = args => (
  <Tab data={data3} onChangeSelected={dataPassage3} style="primary" />
);

const Template6: Story<TabProps> = args => (
  <Tab data={data3} onChangeSelected={dataPassage3} style="secundary" />
);

/* Story exports */
export const PrimaryStyleVersion1 = Template.bind({});
PrimaryStyleVersion1.args = {
  text: 'Primary Style - Version 1',
};

export const SecondaryStyleVersion1 = Template2.bind({});
SecondaryStyleVersion1.args = {
  text: 'Secundary Style - Version 1',
};

export const PrimaryStyleVersion2 = Template3.bind({});
PrimaryStyleVersion1.args = {
  text: 'Primary Style - Version 2',
};

export const SecundaryStyleVersion2 = Template4.bind({});
SecundaryStyleVersion2.args = {
  text: 'Secundary Style - Version 2',
};

export const PrimaryStyleVersion3 = Template5.bind({});
PrimaryStyleVersion3.args = {
  text: 'Primary Style - Version 3',
};

export const SecundaryStyleVersion3 = Template6.bind({});
SecundaryStyleVersion3.args = {
  text: 'Secundary Style - Version 3',
};
