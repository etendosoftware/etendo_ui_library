import React from 'react';
import {useState} from '@storybook/addons';
import {Story, Meta} from '@storybook/react';
import Input from './Input';
import {InputProps} from './Input.types';
import {View} from 'react-native';
import {styles} from './Input.style';
import addMarginContainer from '../../helpers/addMargin';
import {PencilIcon} from '../../assets/images/icons/PencilIcon';

const meta: Meta = {
  title: 'Etendo/Input',
  component: Input,
  argTypes: {},
};

const TemplateDefault: Story<InputProps> = ({
  value = '',
  onChangeText,
  ...args
}) => {
  const [text, setText] = useState(value);
  return (
    <View style={[styles.storiesInputContainer, addMarginContainer()]}>
      <Input onChangeText={text => setText(text)} value={text} {...args} />
    </View>
  );
};

const TemplateVariant: Story<InputProps> = ({}) => {
  const [textInputSearch, setTextInputSearch] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [textInputPassword, setTextInputPassword] = useState<string>('');
  const [optionSelected, setOptionSelected] = useState({label: ''});

  return (
    <View style={[styles.storiesContainer, addMarginContainer()]}>
      <View style={styles.storiesInputContainer}>
        <Input
          titleLabel="ReadOnly"
          helperText="Start Date"
          placeholder="Write a text"
          disabled={false}
          value="27/04/2022"
          typeField="readOnly"
          isError={true}
          keyboardType="text"
        />
      </View>
      <View style={styles.storiesInputContainer}>
        <Input
          titleLabel="Picker"
          helperText="Cars"
          placeholder="Chevrolet"
          disabled={false}
          value={optionSelected.label}
          typeField="picker"
          isError={false}
          keyboardType="text"
          onOptionSelected={(item: any, index: number) => {
            setOptionSelected(item);
          }}
          displayKey="label"
          dataPicker={[
            {label: 'Option 1', id: '1'},
            {label: 'Option 2', id: '2'},
            {label: 'Option 3', id: '3'},
            {label: 'Option 4', id: '4'},
            {label: 'Option 5', id: '5'},
            {label: 'Option 6', id: '6'},
            {label: 'Option 7', id: '7'},
            {label: 'Option 8', id: '8'},
          ]}
        />
      </View>
      <View style={styles.storiesInputContainer}>
        <Input
          titleLabel="Presseable Search"
          helperText="By name only"
          placeholder="Write a search"
          disabled={false}
          value=""
          typeField="pressableSearch"
          isError={false}
          keyboardType="text"
        />
      </View>
      <View style={styles.storiesInputContainer}>
        <Input
          titleLabel="Text Input Search"
          helperText="By SearchKey only"
          placeholder="Write a search"
          disabled={false}
          value={textInputSearch}
          typeField="textInputSearch"
          isError={false}
          onChangeText={text => setTextInputSearch(text)}
          keyboardType="text"
        />
      </View>
      <View style={styles.storiesInputContainer}>
        <Input
          titleLabel="Pressable Text"
          helperText="Only numbers"
          placeholder="10"
          disabled={false}
          value=""
          typeField="pressableText"
          isError={false}
          keyboardType="text"
        />
      </View>
      <View style={styles.storiesInputContainer}>
        <Input
          titleLabel="Text Input"
          helperText="Only characters"
          placeholder="Write your name"
          disabled={false}
          value={textInput}
          typeField="textInput"
          onChangeText={text => setTextInput(text)}
          isError={false}
          keyboardType="text"
        />
      </View>
      <View style={styles.storiesInputContainer}>
        <Input
          titleLabel="Text Input Password"
          helperText="Only characters"
          placeholder="Write a password"
          disabled={false}
          value={textInputPassword}
          typeField="textInputPassword"
          onChangeText={text => setTextInputPassword(text)}
          isError={false}
          keyboardType="text"
        />
      </View>
    </View>
  );
};

export default meta;
export const InputDefault = TemplateDefault.bind({});
export const InputVariant = TemplateVariant.bind({});

InputDefault.args = {
  titleImage: <PencilIcon style={styles.inputImageSize} />,
  titleLabel: 'Text Input',
  helperText: 'Only characters',
  placeholder: 'Write your name',
  disabled: false,
  value: '27/04/2022',
  typeField: 'textInput',
  isError: false,
  keyboardType: 'text',
};
