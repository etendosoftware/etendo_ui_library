import React from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'


interface InputHelperProps
{
  styleHelper: TextStyle;
  label?: string;
}

const InputHelperText: React.FC<InputHelperProps> = ({styleHelper,label})=>{
  return (
    <>
    <View style={styles.row}>
    {label !== '' &&<Text style={styleHelper}>{label}</Text>}
    </View>
    </>
  )
}

export default InputHelperText

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
    marginTop:5,
    marginLeft:5,
  },
});