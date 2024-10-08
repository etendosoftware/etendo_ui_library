import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MehIcon = ({
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
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 15C7 14.4477 7.44772 14 8 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H8C7.44772 16 7 15.5523 7 15Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 9C8 8.44772 8.44772 8 9 8H9.01C9.56229 8 10.01 8.44772 10.01 9C10.01 9.55229 9.56229 10 9.01 10H9C8.44772 10 8 9.55229 8 9Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 9C14 8.44772 14.4477 8 15 8H15.01C15.5623 8 16.01 8.44772 16.01 9C16.01 9.55229 15.5623 10 15.01 10H15C14.4477 10 14 9.55229 14 9Z"
        fill={fill}
      />
    </Svg>
  );
};
