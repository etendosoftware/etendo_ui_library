import React from 'react';
import { Story, Meta } from '@storybook/react';
import Input  from '../input/Input';
import { InputProps } from './Input.types';
const meta: Meta = 
{
  title: 'Input',
  component: Input,
  argTypes:{    

  }
}

export default meta;

const Template: Story<InputProps> = (args) => <Input{...args}/>

export const OnlyRead  = Template.bind({})
export const Picker = Template.bind({})
export const SearchPressable = Template.bind({})
export const SearchTextInput = Template.bind({})
export const TextInput = Template.bind({})
export const TextPressable = Template.bind({})

OnlyRead.args =
{
  titleLabel:'aa',
  helperText:'aaa',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  maxLenght:255,
  numberOfLines: 5,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
  typeField:'onlyRead',
  isError:true,
}

Picker.args =
{
  titleLabel:'Test',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:true,
  value:'aa',
  maxLenght:255,
  numberOfLines: 5,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
  typeField:'picker',
  isError:true
}

SearchPressable.args = 
{
  titleLabel:'Test',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'aa',
  maxLenght:255,
  numberOfLines: 5,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
  typeField:'searchPressable',
  isError:false

} 

SearchTextInput.args =
{
  titleLabel:'Test',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  maxLenght:255,
  numberOfLines: 5,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
  typeField:'searchTextInput',
  isError:true,
}

TextInput.args =
{
  titleLabel:'Test',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'aa',
  maxLenght:255,
  numberOfLines: 5,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
  typeField:'textInput',
  isError:false
}

TextPressable.args =
{
  titleLabel:'Test',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  maxLenght:255,
  numberOfLines: 5,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
  typeField:'textPressable',
  isError:false
}

