/* Imports */
import React from 'react';
import { ViewEtendo } from '../viewEtendo/ViewEtendo';
import { StatusBarStyleVariant } from './StatusBar.styles';
import { StatusBarProps } from './StatusBar.types';
import { StepActive } from './StepActive';
import { StepDisabled } from './StepDisabled';

const StatusBar = ({ data, step }: StatusBarProps) => {
  return (
    <ViewEtendo style={StatusBarStyleVariant.primary.statusBarContainer}>
      {data.map((item, idx) => {
        if (idx === step - 1) {
          return <StepActive item={item} step={step} key={'status1' + idx} />;
        } else {
          return <StepDisabled item={item} step={step} key={'status2' + idx} />;
        }
      })}
    </ViewEtendo>
  );
};

export default StatusBar;
