import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ToggleLeftIcon = ({
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
        d="M8 6C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6H8ZM0 12C0 7.58172 3.58172 4 8 4H16C20.4183 4 24 7.58172 24 12C24 16.4183 20.4183 20 16 20H8C3.58172 20 0 16.4183 0 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10ZM4 12C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12C12 14.2091 10.2091 16 8 16C5.79086 16 4 14.2091 4 12Z"
        fill={fill}
      />
    </Svg>
  );
};
