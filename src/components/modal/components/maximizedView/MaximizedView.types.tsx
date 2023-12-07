import React, { ReactNode } from 'react';

export interface IMaximizedViewProps {
  buttonsToDisplay?: ReactNode[];
  children?: ReactNode;
  imageHeader?: ReactNode;
  setVisible: any;
  subtitle?: string;
  title: string;
}
