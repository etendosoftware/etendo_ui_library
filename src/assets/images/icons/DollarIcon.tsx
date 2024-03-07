import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const DollarIcon = ({
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
        d="M17.68 12.32C16.84 11.48 15.69 11 14.5 11H13V6H17C17.55 6 18 5.55 18 5C18 4.45 17.55 4 17 4H13V1C13 0.45 12.55 0 12 0C11.45 0 11 0.45 11 1V4H9.5C8.31 4 7.16 4.47 6.32 5.32C5.48 6.16 5 7.31 5 8.5C5 9.69 5.47 10.84 6.32 11.68C7.16 12.52 8.31 13 9.5 13H11V18H6C5.45 18 5 18.45 5 19C5 19.55 5.45 20 6 20H11V23C11 23.55 11.45 24 12 24C12.55 24 13 23.55 13 23V20H14.5C15.69 20 16.84 19.53 17.68 18.68C18.52 17.84 19 16.69 19 15.5C19 14.31 18.53 13.16 17.68 12.32ZM9.5 11C8.84 11 8.2 10.74 7.73 10.27C7.26 9.8 7 9.17 7 8.5C7 7.83 7.26 7.2 7.73 6.73C8.2 6.26 8.83 6 9.5 6H11V11H9.5ZM16.27 17.27C15.8 17.74 15.17 18 14.5 18H13V13H14.5C15.16 13 15.8 13.26 16.27 13.73C16.74 14.2 17 14.83 17 15.5C17 16.17 16.74 16.8 16.27 17.27Z"
        fill={fill}
      />
    </Svg>
  );
};
