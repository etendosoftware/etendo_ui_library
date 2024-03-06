import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const VolumenIcon = ({
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
        d="M11.4332 4.09871C11.7797 4.26523 12 4.6156 12 5.00001V19C12 19.3844 11.7797 19.7348 11.4332 19.9013C11.0867 20.0678 10.6755 20.021 10.3753 19.7809L5.64922 16H2C1.44772 16 1 15.5523 1 15V9.00001C1 8.44772 1.44772 8.00001 2 8.00001H5.64922L10.3753 4.21914C10.6755 3.979 11.0867 3.93219 11.4332 4.09871ZM10 7.08063L6.62469 9.78088C6.44738 9.92273 6.22707 10 6 10H3V14H6C6.22707 14 6.44738 14.0773 6.62469 14.2191L10 16.9194V7.08063Z"
        fill={fill}
      />
    </Svg>
  );
};
