import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const PrinterIcon = ({
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
        d="M22.12 8.88C21.56 8.32 20.79 8 20 8H19V2C19 1.45 18.55 1 18 1H6C5.45 1 5 1.45 5 2V8H4C3.2 8 2.44 8.32 1.88 8.88C1.32 9.44 1 10.21 1 11V16C1 16.8 1.32 17.56 1.88 18.12C2.44 18.68 3.21 19 4 19H5V22C5 22.55 5.45 23 6 23H18C18.55 23 19 22.55 19 22V19H20C20.8 19 21.56 18.68 22.12 18.12C22.68 17.56 23 16.79 23 16V11C23 10.2 22.68 9.44 22.12 8.88ZM7 3H17V8H7V3ZM17 21H7V15H17V21ZM21 16C21 16.27 20.89 16.52 20.71 16.71C20.53 16.9 20.27 17 20 17H19V14C19 13.45 18.55 13 18 13H6C5.45 13 5 13.45 5 14V17H4C3.73 17 3.48 16.89 3.29 16.71C3.1 16.52 3 16.27 3 16V11C3 10.73 3.11 10.48 3.29 10.29C3.48 10.1 3.73 10 4 10H20C20.27 10 20.52 10.11 20.71 10.29C20.9 10.47 21 10.73 21 11V16Z"
        fill={fill}
      />
    </Svg>
  );
};
