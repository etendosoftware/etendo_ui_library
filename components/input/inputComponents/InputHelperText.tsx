import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import {styles} from '../Input.style';

interface InputHelperProps {
  styleHelper: TextStyle | TextStyle[];
  label?: string;
}

const InputHelperText: React.FC<InputHelperProps> = ({styleHelper, label}) => {
  return (
    <View style={styles.rowHelperText}>
      {label && <Text style={styleHelper}>{label}</Text>}
    </View>
  );
};

export default InputHelperText;
