import { Platform, ViewStyle } from 'react-native';
import { Metadata } from '../types/table.types';

export const findRowTitle = (columns: Metadata[]): Metadata | undefined => {
  const column = columns.find(column => column.title && column.key);
  return column ?? undefined;
};
