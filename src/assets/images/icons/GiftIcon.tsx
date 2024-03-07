import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const GiftIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 6H19.65C19.87 5.53 20 5.03 20 4.5C20 3.57 19.63 2.68 18.97 2.03C18.31 1.37 17.42 1 16.5 1C14.19 1 12.81 2.66 12.06 4.02C12.04 4.06 12.02 4.1 12 4.14C11.98 4.1 11.96 4.06 11.94 4.02C11.19 2.66 9.81 1 7.5 1C6.57 1 5.68 1.37 5.03 2.03C4.38 2.69 4 3.58 4 4.5C4 5.03 4.13 5.53 4.35 6H2C1.45 6 1 6.45 1 7V12C1 12.55 1.45 13 2 13H3V22C3 22.55 3.45 23 4 23H20C20.55 23 21 22.55 21 22V13H22C22.55 13 23 12.55 23 12V7C23 6.45 22.55 6 22 6ZM13.81 4.98C14.44 3.84 15.3 3 16.5 3C16.9 3 17.28 3.16 17.56 3.44C17.84 3.72 18 4.1 18 4.5C18 4.9 17.84 5.28 17.56 5.56C17.28 5.84 16.9 6 16.5 6H13.35C13.47 5.68 13.63 5.33 13.82 4.98H13.81ZM6.44 5.56C6.16 5.28 6 4.9 6 4.5C6 4.1 6.16 3.72 6.44 3.44C6.72 3.16 7.1 3 7.5 3C8.69 3 9.56 3.84 10.19 4.98C10.38 5.33 10.54 5.68 10.66 6H7.51C7.11 6 6.73 5.84 6.45 5.56H6.44ZM3 8H11V11H3V8ZM5 13H11V21H5V13ZM19 21H13V13H19V21ZM21 11H13V8H21V11Z"
        fill={fill}
      />
    </Svg>
  );
};
