import React from 'react';
import {useState} from '@storybook/addons';
import {Story, Meta} from '@storybook/react';
import Input from '../input/Input';
import {InputProps} from './Input.types';
import {View} from 'react-native';
import {styles} from './Input.style';
import addMarginContainer from '../../helpers/addMargin';

const meta: Meta = {
  title: 'Etendo/Input',
  component: Input,
  argTypes: {},
};

const Template0: Story<InputProps> = ({value = '', onChangeText, ...args}) => {
  const [text, setText] = useState(value);
  return (
    <View style={[styles.storiesInputContainer, addMarginContainer()]}>
      <Input onChangeText={text => setText(text)} value={text} {...args} />
    </View>
  );
};


const Template1: Story<InputProps> = ({}) => {

  const [optionSelected, setOptionSelected] = useState({label: ''});

  return <View style={[styles.storiesContainer, addMarginContainer()]}>
    <View style={styles.storiesInputContainer}>
      <Input
      
        titleLabel="Only Read"
        helperText=""
        placeholder="Write a password"
        disabled={false}
        value="27/04/2022"
        numberOfLines={1}
        typeField="onlyRead"
        isError={true}
        keyboardType="text"
      />
    </View>
    <View style={styles.storiesInputContainer}>
      <Input
        titleLabel="Picker"
        helperText="Only characters"
        placeholder="Write a password"
        disabled={false}
        value={optionSelected.label}
        numberOfLines={1}
        typeField="picker"
        isError={false}
        keyboardType="text"
        onOptionSelected={(item: any, index: number) => {
          setOptionSelected(item)
        }}
        displayKey="label"
        dataPicker={[
          {label: 'Option 1',id: '1'},
          {label: 'Option 2',id: '2'},
          {label: 'Option 3',id: '3'},
          {label: 'Option 4',id: '4'},
          {label: 'Option 5',id: '5'},
          {label: 'Option 6',id: '6'},
          {label: 'Option 7',id: '7'},
          {label: 'Option 8',id: '8'},
        ]}
      />
    </View>
    <View style={styles.storiesInputContainer}>
      <Input
        titleLabel="Search Presseable"
        helperText="Only characters"
        placeholder="Write a password"
        disabled={false}
        value=""
        numberOfLines={1}
        typeField="searchPressable"
        isError={false}
        keyboardType="text"
      />
    </View>
    <View style={styles.storiesInputContainer}>
      <Input
        titleLabel="Search TextInput"
        helperText="Only characters"
        placeholder="Write a password"
        disabled={false}
        value=""
        numberOfLines={1}
        typeField="searchTextInput"
        isError={false}
        keyboardType="text"
      />
    </View>
    <View style={styles.storiesInputContainer}>
      <Input
        titleLabel="Text Pressable"
        helperText="Only characters"
        placeholder="Write a password"
        disabled={false}
        value=""
        numberOfLines={5}
        typeField="textPressable"
        isError={false}
        keyboardType="text"
      />
    </View>
    <View style={styles.storiesInputContainer}>
      <Input
        titleLabel="Text Input"
        helperText="Only characters"
        placeholder="Write a password"
        disabled={false}
        value=""
        numberOfLines={5}
        typeField="textInput"
        isError={false}
        fontSize={14}
        password={false}
        keyboardType="text"
      />
    </View>
    <View style={styles.storiesInputContainer}>
      <Input
        titleLabel="Text Input With Security"
        helperText="Only characters"
        placeholder="Write a password"
        disabled={false}
        value=""
        numberOfLines={5}
        typeField="textInput"
        isError={false}
        fontSize={14}
        password={true}
        keyboardType="text"
      />
    </View>
  </View>
};

export default meta;
export const InputDefault = Template0.bind({});
export const InputVariant = Template1.bind({});

InputDefault.args = {
  titleLabel: 'Only Read',
  helperText: '',
  placeholder: 'Write a password',
  disabled: false,
  value: '27/04/2022',
  numberOfLines: 1,
  typeField: 'onlyRead',
  isError: true,
  keyboardType: 'text',
};

