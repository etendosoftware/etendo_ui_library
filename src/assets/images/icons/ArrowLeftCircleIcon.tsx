import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ArrowLeftCircleIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 11H10.41L12.7 8.71C13.09 8.32 13.09 7.69 12.7 7.3C12.31 6.91 11.68 6.91 11.29 7.3L7.29 11.3C7.2 11.39 7.12 11.5 7.07 11.62C6.97 11.86 6.97 12.14 7.07 12.38C7.12 12.5 7.19 12.61 7.28 12.7L11.28 16.7C11.67 17.09 12.3 17.09 12.69 16.7C13.08 16.31 13.08 15.68 12.69 15.29L10.4 13H15.99C16.54 13 16.99 12.55 16.99 12C16.99 11.45 16.54 11 15.99 11H16Z"
        fill={fill}
      />
    </Svg>
  );
};
