import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const AnchorIcon = ({
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
        d="M22 11H19C18.45 11 18 11.45 18 12C18 12.55 18.45 13 19 13H20.94C20.71 15.02 19.81 16.91 18.36 18.36C16.91 19.81 15.01 20.71 13 20.94V8.86C14.72 8.41 16 6.86 16 5C16 2.79 14.21 1 12 1C9.79 1 8 2.79 8 5C8 6.86 9.28 8.41 11 8.86V20.94C8.98 20.71 7.09 19.81 5.64 18.36C4.19 16.91 3.29 15.02 3.06 13H5C5.55 13 6 12.55 6 12C6 11.45 5.55 11 5 11H2C1.73 11 1.48 11.11 1.29 11.29C1.1 11.48 1 11.73 1 12C1 14.92 2.16 17.72 4.22 19.78C6.28 21.84 9.08 23 12 23C14.92 23 17.72 21.84 19.78 19.78C21.84 17.72 23 14.92 23 12C23 11.45 22.55 11 22 11ZM10 5C10 3.9 10.9 3 12 3C13.1 3 14 3.9 14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5Z"
        fill={fill}
      />
    </Svg>
  );
};
