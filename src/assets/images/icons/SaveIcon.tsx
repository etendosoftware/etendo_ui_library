import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SaveIcon = ({
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
        d="M21.71 7.29L16.71 2.29C16.52 2.1 16.27 2 16 2H5C4.2 2 3.44 2.32 2.88 2.88C2.32 3.44 2 4.21 2 5V19C2 19.8 2.32 20.56 2.88 21.12C3.44 21.68 4.21 22 5 22H19C19.8 22 20.56 21.68 21.12 21.12C21.68 20.56 22 19.79 22 19V8C22 7.73 21.89 7.48 21.71 7.29ZM16 20H8V14H16V20ZM20 19C20 19.27 19.89 19.52 19.71 19.71C19.53 19.9 19.27 20 19 20H18V13C18 12.45 17.55 12 17 12H7C6.45 12 6 12.45 6 13V20H5C4.73 20 4.48 19.89 4.29 19.71C4.1 19.52 4 19.27 4 19V5C4 4.73 4.11 4.48 4.29 4.29C4.48 4.1 4.73 4 5 4H6V8C6 8.55 6.45 9 7 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7H8V4H15.59L20 8.41V19Z"
        fill={fill}
      />
    </Svg>
  );
};
