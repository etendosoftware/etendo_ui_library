/* Imports */
import React from 'react';

import {Platform} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';

import {StatusBarProps} from './StatusBar.types';
import {StepActive} from './StepActive';
import {StepDisabled} from './StepDisabled';

export const ViewEtendo = (props: any) => {
  return (
    <div style={{...props.style, ...{display: 'flex'}}}>{props.children}</div>
  );
};

export const StatusBar = ({data, step}: StatusBarProps) => {
  console.log(Platform.OS);
  return (
    <ViewEtendo style={StatusBarStyleVariant.primary.statusBarContainer}>
      {data.map((item, idx) => {
        if (idx === step - 1) {
          return <StepActive item={item} step={step} />;
        } else {
          return <StepDisabled item={item} step={step} />;
        }
      })}
    </ViewEtendo>
  );
};
