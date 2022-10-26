/* Imports */
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

/* Type declaration */
export type Info = {
  routeImage: string;
  routeNav: string;
  key: string;
  name: string;
};

export interface NavbarProps {
  data: Info[];
  onChangeSelected: (Info: Info | undefined) => Info;
  typeOfNavbar: NavbarType;
}

export interface NavbarHorizontalProps {
  data: Info[];
  onChangeSelected: (Info: Info | undefined) => Info;
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
  }
>;

export type NavbarStyleVertical = Record<
  NavbarScreenGeneric,
  {container: StyleProp<ViewStyle>}
>;
