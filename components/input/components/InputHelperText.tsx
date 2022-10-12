import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Input.style';
import { InputHelperProps } from '../Input.types';


const InputHelperText = ({styleHelper, label}:InputHelperProps) => {
  return (
    <View style={styles.rowHelperText}>
      {label && <Text style={styleHelper}>{label}</Text>}
    </View>
  );
};

export default InputHelperText;
