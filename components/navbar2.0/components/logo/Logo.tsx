import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Logo.style'

const Logo = (onPress:any) => {
  return (
    <TouchableOpacity>
      <Image style={styles.logo} source={require('../../Etendo.png')} />
    </TouchableOpacity>
  )
}

export default Logo