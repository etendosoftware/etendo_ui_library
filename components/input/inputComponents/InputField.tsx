import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { getImageStyle } from '../../../helpers/utilImage';

import { InputFieldProps} from '../Input.types';


const InputField: React.FC<InputFieldProps> = ({
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  maxLenght,
  numberOfLines,
  onPress,
  onSubmit,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  const [showImg, setShowImg] = useState<boolean>(false);
  const [focus, setfocus] = useState<boolean>(false);
 
  const getColorFocus = (focus:boolean) =>
  {
    if(focus)
    {
      return styleField.focus
    }
    
    return {borderColor: 'transparent'}
  }
   
  const getStylePlaceholer = (text:string |undefined) =>
  {
    if(text)
    {
      return styleField.textDefault
    }
    
    return styleField.textPlaceholder
  }



  useEffect(() => {
    configField?.image ? setShowImg(true) : setShowImg(false);
  }, [configField?.image]);


  return (
    <View style={[styles.focus,getColorFocus(focus)]}>
    <TouchableOpacity
      style={
        styleField.field}
      
      onPress={onPress}
      disabled={disabled || configField.disabledField}>
      {(() => {
        if (configField?.type === 'textInput') {
          return (  
            <TextInput
              onBlur={(e)=>{onBlur(e);setfocus(false)}}
              onFocus={(e)=>{onFocus(e);setfocus(true)}}
              value={value}
              style={styleField.textDefault}
              onChangeText={onChangeText}
              selectionColor={styleField.textDefault.borderColor}
              multiline={true}
              numberOfLines={numberOfLines}              
              placeholder={placeholder}
              maxLength={maxLenght}
              placeholderTextColor={styleField.textPlaceholder.color}
            />
          );
        }
        if (configField?.type === 'text') {
          return (
            <Text
            
            ellipsizeMode='tail'
            numberOfLines={numberOfLines}
              style={[
                getStylePlaceholer(value), {height: 18 * (numberOfLines ? numberOfLines : 1)}
              ]}>
              {value ? value : placeholder}
            </Text>
          );
        }
      })()}
      {(() => {
        if (showImg) {
          return (
            <TouchableOpacity
              onPress={onSubmit}
              style={styles.buttonContainer}
              disabled={configField?.disabledSubmit || disabled}>
              {configField?.image?.imgRoute &&
                <Image
                  source={configField?.image?.imgRoute}
                  style={
                    getImageStyle(configField.image,disabled)
                  }
                />
              }
            </TouchableOpacity>
          );
        }
      })()}
    </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({

  buttonContainer: {
    paddingHorizontal:7,
    height:26,
    alignItems:'center',
    justifyContent:'center',
    right:0,
    position:'absolute',
  },
  focus:
  {
    borderRadius: 10 ,borderWidth: 5
  }
});
