import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const FileTextIcon = ({
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
        d="M20.92 7.61001C20.87 7.49001 20.8 7.38001 20.7 7.29001L14.71 1.29001C14.62 1.20001 14.51 1.13001 14.39 1.07001C14.27 1.02001 14.14 0.990005 14 0.990005H6C5.2 0.990005 4.44 1.31001 3.88 1.87001C3.32 2.43001 3 3.20001 3 3.99001V19.99C3 20.79 3.32 21.55 3.88 22.11C4.44 22.67 5.21 22.99 6 22.99H18C18.8 22.99 19.56 22.67 20.12 22.11C20.68 21.55 21 20.78 21 19.99V8.00001C21 7.87001 20.97 7.74001 20.92 7.61001ZM15 4.41001L17.59 7.00001H15V4.41001ZM18.71 20.71C18.52 20.9 18.27 21 18 21H6C5.73 21 5.48 20.89 5.29 20.71C5.1 20.52 5 20.27 5 20V4.00001C5 3.73001 5.11 3.48001 5.29 3.29001C5.47 3.10001 5.73 3.00001 6 3.00001H13V8.00001C13 8.55001 13.45 9.00001 14 9.00001H19V20C19 20.27 18.89 20.52 18.71 20.71Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 12H8C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14H16C16.55 14 17 13.55 17 13C17 12.45 16.55 12 16 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 16H8C7.45 16 7 16.45 7 17C7 17.55 7.45 18 8 18H16C16.55 18 17 17.55 17 17C17 16.45 16.55 16 16 16Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 10H10C10.55 10 11 9.55001 11 9.00001C11 8.45001 10.55 8.00001 10 8.00001H8C7.45 8.00001 7 8.45001 7 9.00001C7 9.55001 7.45 10 8 10Z"
        fill={fill}
      />
    </Svg>
  );
};
