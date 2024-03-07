import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const DownloadIcon = ({
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
        d="M21 14C20.45 14 20 14.45 20 15V19C20 19.27 19.89 19.52 19.71 19.71C19.53 19.9 19.27 20 19 20H5C4.73 20 4.48 19.89 4.29 19.71C4.1 19.52 4 19.27 4 19V15C4 14.45 3.55 14 3 14C2.45 14 2 14.45 2 15V19C2 19.8 2.32 20.56 2.88 21.12C3.44 21.68 4.21 22 5 22H19C19.8 22 20.56 21.68 21.12 21.12C21.68 20.56 22 19.79 22 19V15C22 14.45 21.55 14 21 14Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.29 15.71C11.38 15.8 11.49 15.88 11.62 15.93C11.74 15.98 11.87 16 11.99 16.01C12.12 16.01 12.24 15.98 12.36 15.93C12.48 15.88 12.59 15.81 12.69 15.71L17.69 10.71C18.08 10.32 18.08 9.69 17.69 9.3C17.3 8.91 16.67 8.91 16.28 9.3L12.99 12.59V3C12.99 2.45 12.54 2 11.99 2C11.44 2 10.99 2.45 10.99 3V12.59L7.7 9.3C7.31 8.91 6.68 8.91 6.29 9.3C5.9 9.69 5.9 10.32 6.29 10.71L11.29 15.71Z"
        fill={fill}
      />
    </Svg>
  );
};
