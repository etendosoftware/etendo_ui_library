import { MetadataType } from '../types/table.types';

export interface Metadata {
  key?: string;
  label?: string;
  primary?: boolean;
  title?: boolean;
  type?: MetadataType;
  visible?: boolean;
}
