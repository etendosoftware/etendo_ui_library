import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SkipforewardIcon = ({
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
        d="M4.56681 3.09871C4.91328 2.93219 5.32453 2.979 5.6247 3.21914L15.6247 11.2191C15.8619 11.4089 16 11.6962 16 12C16 12.3038 15.8619 12.5911 15.6247 12.7809L5.6247 20.7809C5.32453 21.021 4.91328 21.0678 4.56681 20.9013C4.22035 20.7348 4 20.3844 4 20V4.00001C4 3.6156 4.22035 3.26523 4.56681 3.09871ZM6 6.08063V17.9194L13.3992 12L6 6.08063Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 4.00001C19.5523 4.00001 20 4.44772 20 5.00001V19C20 19.5523 19.5523 20 19 20C18.4477 20 18 19.5523 18 19V5.00001C18 4.44772 18.4477 4.00001 19 4.00001Z"
        fill={fill}
      />
    </Svg>
  );
};
