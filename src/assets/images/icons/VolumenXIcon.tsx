import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const VolumenXIcon = ({
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
        d="M11.43 4.10002C11.08 3.93002 10.67 3.98002 10.37 4.22002L5.64 8.00002H2C1.45 8.00002 1 8.45002 1 9.00002V15C1 15.55 1.45 16 2 16H5.65L10.38 19.78C10.68 20.02 11.09 20.07 11.44 19.9C11.79 19.73 12.01 19.38 12.01 19V5.00002C12.01 4.62002 11.79 4.27002 11.44 4.10002H11.43ZM10 16.92L6.62 14.22C6.44 14.08 6.22 14 6 14H3V10H6C6.23 10 6.45 9.92002 6.62 9.78002L10 7.08002V16.92Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.41 12L23.7 9.71002C24.09 9.32002 24.09 8.69002 23.7 8.30002C23.31 7.91002 22.68 7.91002 22.29 8.30002L20 10.59L17.71 8.30002C17.32 7.91002 16.69 7.91002 16.3 8.30002C15.91 8.69002 15.91 9.32002 16.3 9.71002L18.59 12L16.3 14.29C15.91 14.68 15.91 15.31 16.3 15.7C16.69 16.09 17.32 16.09 17.71 15.7L20 13.41L22.29 15.7C22.68 16.09 23.31 16.09 23.7 15.7C24.09 15.31 24.09 14.68 23.7 14.29L21.41 12Z"
        fill={fill}
      />
    </Svg>
  );
};
