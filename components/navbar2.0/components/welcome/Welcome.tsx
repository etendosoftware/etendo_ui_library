import { View, Image, Text } from 'react-native'
import React from 'react'
import { styles } from './Welcome.styles'
interface WelcomeProps {
  name:string|undefined
}

const Welcome = ({name}:WelcomeProps) => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStar} source={require('../../stars.png')} />
        <View>
          <Text style={styles.titleWelcome}>Welcome to Etendo,</Text>
          <Text style={styles.titleName}>{name}</Text>
        </View>
    </View>
  )
}

export default Welcome