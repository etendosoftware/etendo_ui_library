import React from 'react';
import { Story, Meta } from '@storybook/react';
import Input  from '../input/Input';
import { InputProps } from './Input.types';

const meta: Meta = 
{
  title: 'Input',
  component: Input,
  argTypes:{}
}

export default meta;

const Template: Story<InputProps> = (args) => <Input{...args}/>

export const OnlyRead  = Template.bind({})
export const Picker = Template.bind({})
export const SearchPressable = Template.bind({})
export const SearchTextInput = Template.bind({})
export const TextPressable = Template.bind({})
export const TextInput = Template.bind({})

OnlyRead.args =
{
  titleLabel:'Only Read',
  helperText:'',
  placeholder:'Write a password',
  disabled:false,
  value:'27/04/2022',
  numberOfLines: 1,
  typeField:'onlyRead',
  isError:true,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
}

Picker.args =
{
  titleLabel:'Picker',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  numberOfLines: 1,
  typeField:'picker',
  isError:false,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
}

SearchPressable.args = 
{
  titleLabel:'Search Presseable',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  numberOfLines: 1,
  typeField:'searchPressable',
  isError:false,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
} 

SearchTextInput.args =
{
  titleLabel:'Search TextInput',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  numberOfLines: 1,
  typeField:'searchTextInput',
  isError:false,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
}

TextPressable.args =
{
  titleLabel:'Text Pressable',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  numberOfLines: 5,
  typeField:'textPressable',
  isError:false,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
}


TextInput.args =
{
  titleLabel:'Text Input',
  helperText:'Only characters',
  placeholder:'Write a password',
  disabled:false,
  value:'',
  numberOfLines: 5,
  typeField:'textInput',
  isError:false,
  onPress:()=> {console.log('Press Field')},
  onChangeText:(text)=>console.log(text),
  onFocus:()=> {console.log('On Focus')},
  onBlur:()=> {console.log('On Blur')},
}
