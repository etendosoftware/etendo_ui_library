import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './Layout.style';
import { LayoutProps } from './Layout.types';
import { PRIMARY_100 } from '../../../styles/colors';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY_100} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

export default Layout;
