/* Imports */

export interface TabProps {
  tabInformation: any[];
  selectedTab: number;
  setSelectedTab?: (any: any | undefined) => any | Array<any>;
  height?: number | string;
  renderItem?: JSX.Element | Array<JSX.Element>;
  fontFamily?: string | number | any;
  fontWeight?: string | number | any;
}
