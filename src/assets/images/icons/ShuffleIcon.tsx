import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ShuffleIcon = ({
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
        d="M21.9201 2.62C21.8201 2.38 21.6201 2.18 21.3801 2.08C21.2601 2.03 21.1301 2 21.0001 2H16.0001C15.4501 2 15.0001 2.45 15.0001 3C15.0001 3.55 15.4501 4 16.0001 4H18.5901L3.29006 19.29C2.90006 19.68 2.90006 20.31 3.29006 20.7C3.68006 21.09 4.31006 21.09 4.70006 20.7L20.0001 5.41V8C20.0001 8.55 20.4501 9 21.0001 9C21.5501 9 22.0001 8.55 22.0001 8V3C22.0001 2.87 21.9701 2.74 21.9201 2.62Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.0001 15C20.4501 15 20.0001 15.45 20.0001 16V18.59L15.7101 14.3C15.3201 13.91 14.6901 13.91 14.3001 14.3C13.9101 14.69 13.9101 15.32 14.3001 15.71L18.5901 20H16.0001C15.4501 20 15.0001 20.45 15.0001 21C15.0001 21.55 15.4501 22 16.0001 22H21.0001C21.1301 22 21.2601 21.97 21.3801 21.92C21.5001 21.87 21.6101 21.8 21.7001 21.71C21.7901 21.62 21.8601 21.51 21.9101 21.39C21.9601 21.27 21.9901 21.14 21.9901 21.01V16.01C21.9901 15.46 21.5401 15.01 20.9901 15.01L21.0001 15Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.29006 9.71C8.68006 10.1 9.31006 10.1 9.70006 9.71C10.0901 9.32 10.0901 8.69 9.70006 8.3L4.71006 3.29C4.32006 2.9 3.69006 2.9 3.30006 3.29C2.91006 3.68 2.90006 4.32 3.29006 4.71L8.29006 9.71Z"
        fill={fill}
      />
    </Svg>
  );
};
