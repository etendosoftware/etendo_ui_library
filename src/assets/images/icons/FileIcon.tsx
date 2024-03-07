import React from 'react';
import { ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const FileIcon = ({
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
        d="M20.92 8.61001C20.87 8.49001 20.8 8.38001 20.7 8.29001L13.71 1.29001C13.62 1.20001 13.51 1.13001 13.39 1.07001C13.27 1.02001 13.14 0.990005 13 0.990005H6C5.2 0.990005 4.44 1.31001 3.88 1.87001C3.32 2.43001 3 3.20001 3 3.99001V19.99C3 20.79 3.32 21.55 3.88 22.11C4.44 22.67 5.21 22.99 6 22.99H18C18.8 22.99 19.56 22.67 20.12 22.11C20.68 21.55 21 20.78 21 19.99V8.99001C21 8.86001 20.97 8.73001 20.92 8.60001V8.61001ZM14 4.41001L17.59 8.00001H14V4.41001ZM18.71 20.71C18.52 20.9 18.27 21 18 21H6C5.73 21 5.48 20.89 5.29 20.71C5.1 20.52 5 20.27 5 20V4.00001C5 3.73001 5.11 3.48001 5.29 3.29001C5.47 3.10001 5.73 3.00001 6 3.00001H12V9.00001C12 9.55001 12.45 10 13 10H19V20C19 20.27 18.89 20.52 18.71 20.71Z"
        fill={fill}
      />
    </Svg>
  );
};
