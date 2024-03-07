import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const VoiceMailIcon = ({
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
        d="M18.5 7C15.46 7 13 9.46 13 12.5C13 13.83 13.47 15.05 14.26 16H9.75C10.54 15.05 11.01 13.83 11.01 12.5C11.01 9.46 8.55 7 5.51 7C2.47 7 0 9.46 0 12.5C0 15.54 2.46 18 5.5 18H18.5C21.54 18 24 15.54 24 12.5C24 9.46 21.54 7 18.5 7ZM2 12.5C2 10.57 3.57 9 5.5 9C7.43 9 9 10.57 9 12.5C9 14.43 7.43 16 5.5 16C3.57 16 2 14.43 2 12.5ZM18.5 16C16.57 16 15 14.43 15 12.5C15 10.57 16.57 9 18.5 9C20.43 9 22 10.57 22 12.5C22 14.43 20.43 16 18.5 16Z"
        fill={fill}
      />
    </Svg>
  );
};
