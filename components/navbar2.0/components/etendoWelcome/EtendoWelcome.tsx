import { View, Image, Text } from 'react-native'
import React from 'react'
import { styles } from './EtendoWelcome.styles'
const Stars = require('../../../../assets/images/stars.png')

const EtendoWelcome = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStar} source={Stars} />
        <View>
          <Text style={styles.titleWelcome}>Welcome to Etendo,</Text>
          <Text style={styles.titleName}>Dana!</Text>
        </View>
    </View>
  )
}

export default EtendoWelcome