import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageType, ButtonStyleType } from './Button.types';
import { ButtonSizeVariant, ButtonStyleVariant } from './Button.styles';
import { addImageStyle } from '../../helpers/utilimage';
import {ButtonProps} from './Button.types'



const Button = ({ text, onPress, typeStyle,image,disabled,typeSize}: ButtonProps) => {
    const stateStyleContainer = () => {
        if (disabled){
            return ButtonStyleVariant[typeStyle].containerDisabled
        }
        return ButtonStyleVariant[typeStyle].container
    }
    const stateStyleText = () => {
        if (disabled){
            return ButtonStyleVariant[typeStyle].textDisabled
        }
        return ButtonStyleVariant[typeStyle].text
    }
    return (
        <View>
            <TouchableOpacity 
            style={[stateStyleContainer(), ButtonSizeVariant[typeSize].containerSize]}
            onPress={onPress}>
                            {image?.imgRoute &&<Image source={image.imgRoute} 
                            style={[addImageStyle(image), {opacity:disabled? 0.2 : 1}]}></Image>}
                <Text style={[stateStyleText(), ButtonSizeVariant[typeSize].buttonSize]}>{text}</Text>
            </TouchableOpacity>
        </View>    
    )
}
            
export default Button;