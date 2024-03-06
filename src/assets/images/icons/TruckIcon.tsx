import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TruckIcon = ({
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
        d="M23.71 10.29L20.71 7.29C20.52 7.1 20.27 7 20 7H17V3C17 2.45 16.55 2 16 2H1C0.45 2 0 2.45 0 3V16C0 16.55 0.45 17 1 17H2.35C2.13 17.46 2 17.96 2 18.5C2 20.43 3.57 22 5.5 22C7.43 22 9 20.43 9 18.5C9 17.96 8.87 17.46 8.65 17H15.35C15.13 17.46 15 17.96 15 18.5C15 20.43 16.57 22 18.5 22C20.43 22 22 20.43 22 18.5C22 17.96 21.87 17.46 21.65 17H23C23.55 17 24 16.55 24 16V11C24 10.73 23.89 10.48 23.71 10.29ZM2 4H15V15H2V4ZM7 18.5C7 19.33 6.33 20 5.5 20C4.67 20 4 19.33 4 18.5C4 17.67 4.67 17 5.5 17C6.33 17 7 17.67 7 18.5ZM20 18.5C20 19.33 19.33 20 18.5 20C17.67 20 17 19.33 17 18.5C17 17.67 17.67 17 18.5 17C19.33 17 20 17.67 20 18.5ZM22 15H17V9H19.59L22 11.41V15Z"
        fill={fill}
      />
    </Svg>
  );
};
