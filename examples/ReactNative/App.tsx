import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Cards from './components/cards/Cards';
import { Metadata } from './types/table.types';

function App(): JSX.Element {
  const data = [
    {
      _id: '637289556475c964f56cf7b6',
      age: 21,
      name: 'Reese Hodge',
      email: 'reesehod',
      address: '435 Pierrep',
      about: 'Ex do aliqua e',
    },
    {
      _id: '63728955263f36c240cd1b4a',
      age: 28,
      name: 'Tanya Strickland',
      email: 'tanyastrickland@enerforce.com',
      address:
        '212 Visitation Place, Zarephath, Federated States Of Micronesia, 1532',
      about:
        'Mollit minim eu ullamco nulla voluptate fugiat quis aliqua Lorem nisi. \r\n',
    },
    {
      _id: '63728955ee7ab58612b31cd3',
      age: 40,
      name: 'Christie Marshall',
      email: 'christiemarshall@enerforce.com',
      address: '153 Clara Street, Troy, Washington, 5154',
      about:
        'Labore nulla irure ea aliqua et officia id pariatur eiusmod exercitation. Minim ad ad est cupidatat aute Lorem. Irure in esse voluptate aliqua do tempor ipsum aliquip Lorem. Qui consequat cillum dolor mollit ipsum proident est amet magna adipisicing.\r\n',
    },
    {
      _id: '63728955179f1ef76f5b0b29',
      age: 38,
      name: 'Sampson Pearson',
      email: 'sampsonpearson@enerforce.com',
      address: '695 Cypress Court, Kempton, North Dakota, 4379',
      about:
        'Fugiat sit laboris sunt veniam id esse exercitation in pariatur ipsum qui irure. Cupidatat dolor ut officia cillum pariatur amet fugiat ullamco. Sit ex tempor sit consequat sint eiusmod laborum ullamco ullamco eiusmod sint voluptate mollit veniam. Veniam nulla ex ad occaecat. Amet in labore adipisicing nostrud nulla ad consectetur. Pariatur commodo do et sunt est.\r\n',
    },
    {
      isActive: false,
      _id: '65432955263f36c240cd1b4a',
      age: 21,
      name: 'Tata Strickland',
      email: 'tatastrickland@enerforce.com',
      address: true,
      about:
        'Mollit minim eu ullamco nulla voluptate fugiat quis aliqua Lorem nisi. Veniam nostrud enim laboris officia Lorem. Aliquip anim minim pariatur mollit irure excepteur ea. Ipsum qui cupidatat et quis aliqua sit minim amet nisi commodo aliqua deserunt. Incididunt excepteur sint quis cillum culpa eu enim est cupidatat cupidatat nisi pariatur.\r\n',
    },
  ];

  const metadata: Metadata[] = [
    {
      primary: true,
      visible: false,
      key: '_id',
    },
    {
      visible: true,
      key: 'name',
      label: 'Name',
    },
    {
      visible: true,
      key: 'email',
      label: 'Email',
    },
    {
      visible: true,
      key: 'address',
      label: 'Address',
      type: 'boolean',
    },
    {
      visible: true,
      key: 'about',
      label: 'Description',
      type: 'string',
      title: true,
    },
    {
      visible: true,
      key: 'about',
      label: 'Actions',
      type: 'time',
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: 400,
        backgroundColor: 'red',
        alignItems: 'center',
      }}>
      <Cards data={data} metadata={metadata} title="" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
