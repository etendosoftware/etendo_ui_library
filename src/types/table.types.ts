import { DimensionValue } from 'react-native';

export type Metadata = {
  primary?: boolean;
  visible?: boolean;
  label?: string;
  key?: string;
  type?: 'number' | 'string' | 'boolean' | 'date';
  title?: boolean;
};
