import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const RewindIcon = ({
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
        d="M11.4394 4.10169C11.7824 4.2695 12 4.61807 12 5.00001V19C12 19.3819 11.7824 19.7305 11.4394 19.8983C11.0963 20.0661 10.6875 20.0238 10.3861 19.7894L1.38606 12.7894C1.14247 12.5999 1 12.3086 1 12C1 11.6914 1.14247 11.4001 1.38606 11.2107L10.3861 4.21066C10.6875 3.97617 11.0963 3.93389 11.4394 4.10169ZM3.62882 12L10 16.9554V7.04465L3.62882 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.4394 4.10169C22.7824 4.2695 23 4.61807 23 5.00001V19C23 19.3819 22.7824 19.7305 22.4394 19.8983C22.0963 20.0661 21.6875 20.0238 21.3861 19.7894L12.3861 12.7894C12.1425 12.5999 12 12.3086 12 12C12 11.6914 12.1425 11.4001 12.3861 11.2107L21.3861 4.21066C21.6875 3.97617 22.0963 3.93389 22.4394 4.10169ZM14.6288 12L21 16.9554V7.04465L14.6288 12Z"
        fill={fill}
      />
    </Svg>
  );
};
