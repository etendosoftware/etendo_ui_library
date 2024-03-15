import React, { ReactNode } from 'react';

export interface IMaximizedViewProps {
  buttonsToDisplay?: ReactNode[];
  children?: ReactNode;
  imageHeader?: ReactNode;
  setVisible: (...params: any[]) => void;
  subtitle?: string;
  title: string;
}
