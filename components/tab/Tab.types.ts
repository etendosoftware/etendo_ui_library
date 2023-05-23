/* Imports */

export type TabItemType = {
  name: string;
  route: string;
};

export interface TabProps {
  data?: TabItemType[];
  currentIndex: number;
  onPressTab?: (route: string, index: number) => void;
}
