import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BoldIcon = ({
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
        d="M18.54 12.46C18.2 12.12 17.82 11.86 17.41 11.64C17.45 11.6 17.5 11.57 17.54 11.53C18.48 10.59 19 9.32 19 7.99C19 6.66 18.47 5.39 17.54 4.45C16.6 3.51 15.33 2.99 14 2.99H6C5.45 3 5 3.45 5 4V20C5 20.55 5.45 21 6 21H15C16.33 21 17.6 20.47 18.54 19.54C19.48 18.6 20 17.33 20 16C20 14.67 19.47 13.4 18.54 12.46ZM7 5H14C14.8 5 15.56 5.32 16.12 5.88C16.68 6.44 17 7.21 17 8C17 8.79 16.68 9.56 16.12 10.12C15.56 10.68 14.79 11 14 11H7V5ZM17.12 18.12C16.56 18.68 15.79 19 15 19H7V13H15C15.8 13 16.56 13.32 17.12 13.88C17.68 14.44 18 15.21 18 16C18 16.79 17.68 17.56 17.12 18.12Z"
        fill={fill}
      />
    </Svg>
  );
};
