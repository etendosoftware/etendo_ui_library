/* Imports */
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

/* Type declaration */
export type Info = {
  routeImage: React.ReactNode;
  routeNav: string;
  key: string;
  name: string;
};

export interface NavbarProps {
  data: Info[];
  onChangeSelected: () => void;
  typeOfNavbar: NavbarType;
}

export interface NavbarHorizontalProps {
  data: Info[];
  onChangeSelected: () => void;
  title: string;
  navigationLogin: () => any;
  renderItem?: (routeNav: string, routeImage: React.ReactNode) => JSX.Element;
}

/* Declaration of style types */
export type NavbarStyle = 'primary';
export type NavbarScreenDimensions = 'mobile' | 'tablet' | 'desktop';
export type NavbarType = 'horizontal' | 'vertical';
export type NavbarScreenGeneric = 'generic';

export type NavbarStyleHorizontal = Record<
  NavbarScreenDimensions,
  {
    container: StyleProp<ViewStyle>;
    containerImages?: StyleProp<ViewStyle>;
    containerUser?: StyleProp<ViewStyle>;
    tinyLogo: StyleProp<ImageStyle>;
    tinyLogoImage: StyleProp<ImageStyle>;
    navIcons: StyleProp<ImageStyle>;
    user: StyleProp<ImageStyle>;
    textUser: StyleProp<TextStyle>;
    more: StyleProp<ImageStyle>;
    logout: StyleProp<ViewStyle>;
    textLogout: StyleProp<TextStyle>;
  }
>;

export type NavbarStyleVertical = Record<
  NavbarScreenGeneric,
  { container: StyleProp<ViewStyle> }
>;
