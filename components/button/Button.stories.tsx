import React from 'react';
import Button from '../button/Button';
import {Story, Meta} from '@storybook/react';
import {ButtonProps} from './Button.types';
import { View } from 'react-native';
import { stylesStories } from './Button.styles';

const meta: Meta = {
  title: 'Etendo/Button',
  component: Button,
  argTypes: {}
}

export default meta;

const Template0: Story<ButtonProps> = (args) => <Button{...args}/>

const Template1: Story<ButtonProps> = (args) => <View style={{flexDirection:'row'}}>
    <View style={stylesStories.buttonContainer}>
        <Button 
        onPress={()=>{}} 
        text={'Primary'} 
        typeStyle={'primary'} 
        fontSize={'medium'} />
    </View>
    <View style={stylesStories.buttonContainer}>
        <Button 
        onPress={()=>{}} 
        text={'Secondary'} 
        typeStyle={'secondary'} 
        fontSize={'medium'} />
    </View>
    <View style={stylesStories.buttonContainer}>
        <Button 
        onPress={()=>{}} 
        text={'Terciary'} 
        typeStyle={'terciary'} 
        fontSize={'medium'} />
    </View>
    <View style={stylesStories.buttonContainer}>
        <Button 
        onPress={()=>{}} 
        text={'White'} 
        typeStyle={'white'} 
        fontSize={'medium'} />
    </View>
    <View style={stylesStories.buttonContainer}>
        <Button 
        onPress={()=>{}} 
        text={'WhiteBorder'} 
        typeStyle={'whiteBorder'} 
        fontSize={'medium'} />
    </View>
</View>

export const ButtonDefault = Template0.bind({})
export const ButtonVariants = Template1.bind({})

ButtonDefault.args =
{
    text:'Button',
    typeStyle: 'primary',
    image: { 
        imgRoute: require('../../assets/images/icons/check.png'),
        imgHeight: 10,
        imgWidth: 12,
        imgMarginRight: 10 
    },
    disabled: false,
    fontSize: 'medium'
}
