'use client';

import { useState } from 'react';
import Button from './components/button/Button';
import { formatDate } from './components/datepicker/DatePicker.utils';
import Input from './components/input/Input';

export default function Web() {
  const [dateValue, setDateValue] = useState('');

  return (
    <div>
      <h1>Etendo UI Library</h1>
      <Button typeStyle={'primary'} text="Button" />
      <div style={{ width: '20rem', marginTop: 20, marginLeft: 20 }}>
        <Input
          typeField="datePicker"
          language="es"
          value={dateValue}
          onChange={newDate => setDateValue(newDate)}
          formatDate={formatDate}
          timeZone="UTC"
        />
      </div>
    </div>
  );
}
