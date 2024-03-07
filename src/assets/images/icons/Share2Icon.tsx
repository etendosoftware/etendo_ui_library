import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const Share2Icon = ({
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
        d="M18 15C16.89 15 15.89 15.45 15.16 16.18L9.83 13.08C9.93 12.73 10 12.38 10 12C10 11.62 9.93 11.27 9.83 10.92L15.16 7.81C15.88 8.54 16.89 9 18 9C20.21 9 22 7.21 22 5C22 2.79 20.21 1 18 1C15.79 1 14 2.79 14 5C14 5.38 14.07 5.73 14.17 6.08L8.84 9.19C8.12 8.46 7.11 8 6 8C3.79 8 2 9.79 2 12C2 14.21 3.79 16 6 16C7.11 16 8.12 15.55 8.84 14.81L14.17 17.91C14.07 18.26 14 18.61 14 18.99C14 21.2 15.79 22.99 18 22.99C20.21 22.99 22 21.2 22 18.99C22 16.78 20.21 14.99 18 14.99V15ZM18 3C19.1 3 20 3.9 20 5C20 6.1 19.1 7 18 7C16.9 7 16 6.1 16 5C16 3.9 16.9 3 18 3ZM6 14C4.9 14 4 13.1 4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12C8 13.1 7.1 14 6 14ZM18 21C16.9 21 16 20.1 16 19C16 18.63 16.11 18.3 16.28 18C16.28 18 16.28 17.99 16.28 17.98C16.63 17.4 17.26 17 17.99 17C19.09 17 19.99 17.9 19.99 19C19.99 20.1 19.09 21 17.99 21H18Z"
        fill={fill}
      />
    </Svg>
  );
};
