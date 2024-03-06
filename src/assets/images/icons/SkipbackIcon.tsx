import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SkipbackIcon = ({
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
        d="M19.4332 3.09871C19.7797 3.26523 20 3.6156 20 4.00001V20C20 20.3844 19.7797 20.7348 19.4332 20.9013C19.0867 21.0678 18.6755 21.021 18.3753 20.7809L8.37531 12.7809C8.13809 12.5911 8 12.3038 8 12C8 11.6962 8.13809 11.4089 8.37531 11.2191L18.3753 3.21914C18.6755 2.979 19.0867 2.93219 19.4332 3.09871ZM10.6008 12L18 17.9194V6.08063L10.6008 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 4.00001C5.55228 4.00001 6 4.44772 6 5.00001V19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19V5.00001C4 4.44772 4.44772 4.00001 5 4.00001Z"
        fill={fill}
      />
    </Svg>
  );
};
