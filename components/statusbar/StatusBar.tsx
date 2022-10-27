import React from 'react';

import {StatusBarProps} from './StatusBar.types';
import {StatusBarStep1Active} from './StatusBarStep1Active';
import {StatusBarStep2Active} from './StatusBarStep2Active';
import {StatusBarStep3Active} from './StatusBarStep3Active';

export const StatusBar = ({data, step}: StatusBarProps) => {
  if (step <= 1 || step > 3) {
    return <StatusBarStep1Active data={data} step={step} />;
  } else if (step === 2) {
    return <StatusBarStep2Active data={data} step={step} />;
  } else {
    return <StatusBarStep3Active data={data} step={step} />;
  }
};
