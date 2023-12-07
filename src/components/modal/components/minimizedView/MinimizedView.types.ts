import React, { ReactNode } from 'react';

export interface IMinimizedViewProps {
  buttonsToDisplay?: ReactNode[];
  children?: ReactNode;
  imageHeader?: ReactNode;
  subtitle?: string;
  title: string;
}
