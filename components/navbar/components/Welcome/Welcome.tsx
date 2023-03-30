import { View, Image, Text } from 'react-native'
import React from 'react'
import { styles } from './Welcome.styles'
import { Starts64 } from '../../../../assets/images/icons/base64/starts-64'
interface WelcomeProps {
  name:string|undefined
}

const Welcome = ({name}:WelcomeProps) => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStar} source={{uri: Starts64}} />
        <View>
          <Text style={styles.titleWelcome}>Welcome to Etendo,</Text>
          <Text style={styles.titleName}>{name? name : 'Admin'}</Text>
        </View>
    </View>
  )
}

export default Welcome