import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const PenTool = ({
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
        d="M22.71 14.29L19.71 11.29C19.42 11 19 10.93 18.64 11.07L17.49 5.30001C17.41 4.92001 17.12 4.62001 16.74 4.52001L2.23 1.03001C2.16 1.01001 2.09 1.01001 2.02 1.01001C2.01 1.01001 2 1.01001 1.98 1.01001C1.87 1.01001 1.76 1.04001 1.65 1.07001C1.62 1.07001 1.6 1.09001 1.57 1.10001C1.46 1.15001 1.36 1.21001 1.28 1.30001C1.2 1.39001 1.13 1.49001 1.08 1.59001C1.07 1.62001 1.06 1.64001 1.05 1.67001C1.03 1.77001 1 1.88001 1 1.99001C1 2.00001 1 2.01001 1 2.03001C1 2.10001 1 2.17001 1.02 2.24001L4.52 16.74C4.61 17.12 4.91 17.41 5.3 17.49L11.07 18.64C10.93 19 11 19.42 11.29 19.71L14.29 22.71C14.68 23.1 15.31 23.1 15.7 22.71L22.7 15.71C23.09 15.32 23.09 14.69 22.7 14.3L22.71 14.29ZM3.8 5.22001L8.29 9.71001C8.1 10.1 7.99 10.53 7.99 11C7.99 12.66 9.33 14 10.99 14C12.65 14 13.99 12.66 13.99 11C13.99 9.34001 12.65 8.00001 10.99 8.00001C10.53 8.00001 10.1 8.11001 9.7 8.30001L5.22 3.80001L15.64 6.32001L16.91 12.67L12.67 16.91L6.32 15.64L3.8 5.22001ZM10.29 10.29C10.47 10.11 10.72 10 11 10C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12C10.45 12 10 11.55 10 11C10 10.72 10.11 10.47 10.29 10.29ZM15 20.58L13.41 18.99L13.7 18.7L18.7 13.7L18.99 13.41L20.58 15L14.99 20.59L15 20.58Z"
        fill={fill}
      />
    </Svg>
  );
};
