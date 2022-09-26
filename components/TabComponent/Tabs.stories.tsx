import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Tab} from './Tab';
import {TabSecondary} from './TabComponents/TabSecondary';
import {TabProps} from './Tab.types';

export default {
  title: 'Etendo/Tabs',
  component: Tab,
  argTypes: {},
} as Meta<typeof Tab>;


{/* Information to pass */}
const data1 = [
  {name: 'Usuario', route: '', key: 'usuario',},
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

{/* Data passage */}
const dataPassage1 = (data: any) => {
  return data1[data];
};

const dataPassage2 = (data: any) => {
  return data2[data];
};

const dataPassage3 = (data: any) => {
  return data3[data];
};

{/* Templates */}
const Template: Story<TabProps> = args => (
  <Tab data={data1} onChangeSelected={dataPassage1} />
);

const Template2: Story<TabProps> = args => (
  <Tab data={data2} onChangeSelected={dataPassage2} />
);

const Template3: Story<TabProps> = args => (
  <TabSecondary data={data1} onChangeSelected={dataPassage1} />
);

const Template4: Story<TabProps> = args => (
  <TabSecondary data={data2} onChangeSelected={dataPassage2} />
);

const Template5: Story<TabProps> = args => (
  <Tab data={data3} onChangeSelected={dataPassage3} />
);

const Template6: Story<TabProps> = args => (
  <TabSecondary data={data3} onChangeSelected={dataPassage3} />
);


{/* Story exports */}
export const Primary = Template.bind({});
Primary.args = {
  text: 'Tab',
};

export const Secondary = Template2.bind({});
Secondary.args = {
  text: 'Secondary',
};

export const Tertiary = Template3.bind({});
Secondary.args = {
  text: 'Tertiary',
};

export const Quaternary = Template4.bind({});
Secondary.args = {
  text: 'Quaternary',
};

export const Fifth = Template5.bind({});
Secondary.args = {
  text: 'Fifth',
};

export const Sixth = Template6.bind({});
Secondary.args = {
  text: 'Sixth',
};