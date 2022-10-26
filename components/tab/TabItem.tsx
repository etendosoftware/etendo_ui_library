/* Imports */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {TabItemProps, TabStyleType, TabStyleFontSize, Info} from './Tab.types';
import {TabStyleVariant} from './Tab.styles';
import {WHITE, BLUE, GREY_BLUE} from '../../styles/colors';
import Link from 'next/link';
import {useRouter} from 'next/router';

/* Styles - This function allows to obtain the text styles of the TabItem component */
const getStyle = (
  style: TabStyleType,
  textStyle: TabStyleFontSize,
  item: Info,
  pathname: any,
) => {
  let colorActive: string = '';
  let colorInactive: string = '';
  let fontSize: number = 0;

  /* Choice of active and inactive color based on the style selected by the programmer */
  switch (style) {
    case 'primary':
      colorActive = WHITE;
      colorInactive = BLUE;
      break;
    case 'secondary':
      colorActive = BLUE;
      colorInactive = GREY_BLUE;
      break;
    default:
      break;
  }

  /* Choice of text size based on the size chosen by the programmer */
  switch (textStyle) {
    case 'small':
      fontSize = 14;
      break;
    case 'medium':
      fontSize = 18;
      break;
    case 'large':
      fontSize = 22;
      break;
    default:
      break;
  }

  /* Returns the style of the chosen text based on the selected styles of the Tab component */
  return [
    {color: item.route === pathname ? colorActive : colorInactive},
    {fontSize: fontSize},
    TabStyleVariant[style].itemText,
  ];
};

/* TabItem component */
const TabItem = ({
  style,
  styleText,
  sizeText,
  item,
  index,
  onPress,
  toggleItem,
}: TabItemProps) => {
  const router = useRouter();
  const {pathname} = router;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={style}
      onPress={() => {
        onPress();
      }}
      key={item.key}
    >
      <Link href={item.route}>
        <Text style={getStyle(styleText, sizeText, item, pathname)}>
          {item.name}
        </Text>
      </Link>
    </TouchableOpacity>
  );
};

export default TabItem;
