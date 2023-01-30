import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Navbar.styles'
import EtendoLogo from './components/etendoLogo/EtendoLogo'
import EtendoWelcome from './components/etendoWelcome/EtendoWelcome'

const Navbar = (LeftContent:any) => {
  return (
    <View style={styles.container}>
      <EtendoLogo />
      <EtendoWelcome />
    </View>
  )
}

export default Navbar