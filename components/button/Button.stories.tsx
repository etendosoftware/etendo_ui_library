import React from 'react';
import Button from '../button/Button';
import {Story, Meta} from '@storybook/react';
import {ButtonProps} from './Button.types';

const meta: Meta = 
{
  title: 'Button',
  component: Button,
  argTypes: {  }
}

export default meta;

const Template: Story<ButtonProps> = (args) => <Button{...args}/>

export const primary  = Template.bind({})
export const secondary = Template.bind({})
export const terciary = Template.bind({})
export const whiteBorder = Template.bind({})
export const white = Template.bind({})

primary.args =
{
    text:'Button Primary',
    onPress: ()=> {
        console.log('Press Button')
    },
    typeStyle: 'primary',
    image: { 
        imgRoute: require('../asset/CheckWhite.png'),
        imgHeight: 10,
        imgWidth: 12,
        imgMarginRight: 10 
    },
    disabled: false,
    typeSize: 'large'
    
}

secondary.args =
{
    text: 'Button Secondary',
    onPress: ()=> {console.log('Press Button')},
    typeStyle: 'secondary',
    image: {
        imgRoute: require('../asset/Check.png'),
        imgHeight:  10,
        imgWidth: 12,
        imgMarginRight: 10
    },
    disabled: false,
    typeSize: 'large'
}

terciary.args = 
{
    text: 'Button Terciary',
    onPress: ()=> {
        console.log('Press Button')
    },
    typeStyle: 'terciary',
    image: {
        imgRoute: require('../asset/Check.png'),
        imgHeight: 10,
        imgWidth: 12,
        imgMarginRight: 10
    },
    disabled: false,
    typeSize: 'large'

}

whiteBorder.args =
{
    text: 'Button whiteBorder',
    onPress: ()=> {
        console.log('Press Button')
    },
    typeStyle: 'whiteBorder',
    image: {
        imgRoute:require('../asset/Check.png'),
        imgHeight:10, 
        imgWidth: 12, 
        imgMarginRight: 10
    },
    disabled: false,
    typeSize: 'large'
  
}

white.args =
{
    text: 'Button white',
    onPress: ()=> {
        console.log('Press Button')
    },
    typeStyle: 'white',
    image: { 
        imgRoute:require('../asset/Check.png'),
        imgHeight:10, 
        imgWidth: 12, 
        imgMarginRight: 10
    },
    disabled: false,
    typeSize: 'large'
}