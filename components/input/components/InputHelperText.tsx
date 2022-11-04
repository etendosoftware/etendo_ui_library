import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import {styles} from '../Input.style';
import {InputHelperProps} from '../Input.types';

const InputHelperText = ({styleHelper, label}: InputHelperProps) => {
  return (
    <>
      {label ? (
        <View style={styles.rowHelperText}>
          <Text style={styleHelper}>{label}</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default InputHelperText;
