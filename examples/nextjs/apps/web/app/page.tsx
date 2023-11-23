'use client';

import { useState } from 'react';
import Button from './components/button/Button';
import Input from './components/input/Input';
import { CardDropdown } from './components/cards/cardDropdown';

export default function Web() {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Etendo UI Library</h1>
      <Button typeStyle={'primary'} text="Button" />
      <Input
        value={value}
        onChangeText={(text: string) => setValue(text)}
        typeField={'textInput'}
      />
      <Input
        value={value}
        onChangeText={(text: string) => setValue(text)}
        typeField={'pressableSearch'}
      />
      <CardDropdown />
    </div>
  );
}
