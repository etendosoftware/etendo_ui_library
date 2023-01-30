import { Image } from 'react-native'
import React from 'react'
const Etendo = require('../../../../assets/images/logo/Etendo.png') 

const EtendoLogo = () => {
  return (
    <Image style={{height: 25, width: 100}} source={Etendo} />
  )
}

export default EtendoLogo