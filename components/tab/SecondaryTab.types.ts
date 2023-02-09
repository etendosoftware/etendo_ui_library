/* Imports */
import {Info} from './Tab.types';

export interface TabSecondaryProps {
  tabInformation: Info[];
  selectedTab: number;
  setSelectedTab?: (Info: Info | undefined) => Info | Array<Info>;
  height?: number | string;
  renderItem?: JSX.Element | Array<JSX.Element>;
  fontWeight?: 'string';
  fontFamily?: 'string';
}
