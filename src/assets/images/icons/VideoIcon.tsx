import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const VideoIcon = ({
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
        d="M23.46 6.11C23.13 5.94 22.73 5.97 22.42 6.19L17 10.06V7C17 5.34 15.66 4 14 4H3C1.34 4 0 5.34 0 7V17C0 18.66 1.34 20 3 20H14C15.66 20 17 18.66 17 17V13.94L22.42 17.81C22.72 18.03 23.13 18.06 23.46 17.89C23.79 17.72 24 17.38 24 17V7C24 6.63 23.79 6.28 23.46 6.11ZM15 17C15 17.55 14.55 18 14 18H3C2.45 18 2 17.55 2 17V7C2 6.45 2.45 6 3 6H14C14.55 6 15 6.45 15 7V17ZM22 15.06L17.72 12L22 8.94V15.05V15.06Z"
        fill={fill}
      />
    </Svg>
  );
};
