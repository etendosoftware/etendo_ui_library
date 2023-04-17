import React from 'react';
import {useState} from '@storybook/addons';
import {Story, Meta} from '@storybook/react';
import Input from '../input/Input';
import {InputProps} from './Input.types';
import {View} from 'react-native';
import {styles} from './Input.style';
import addMarginContainer from '../../helpers/addMargin';
import {GoIcon} from '../../assets/images/icons/GoIcon';
import {DocumentIcon} from '../../assets/images/icons/DocumentIcon';
import {PencilIcon} from '../../assets/images/icons/PencilIcon';

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

const Template1: Story<InputProps> = args => {
  const [textInputSearch, setTextInputSearch] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [textInputPassword, setTextInputPassword] = useState<string>('');
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
          value=""
          typeField="picker"
          isError={false}
          keyboardType="text"
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
export const InputDefault = Template0.bind({});
export const InputVariant = Template1.bind({});

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
