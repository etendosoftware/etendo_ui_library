import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const Maximize2Icon = ({
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
        d="M21.92 2.62C21.82 2.38 21.62 2.18 21.38 2.08C21.26 2.03 21.13 2 21 2H15C14.45 2 14 2.45 14 3C14 3.55 14.45 4 15 4H18.59L13.3 9.29C12.91 9.68 12.91 10.31 13.3 10.7C13.69 11.09 14.32 11.09 14.71 10.7L20 5.41V9C20 9.55 20.45 10 21 10C21.55 10 22 9.55 22 9V3C22 2.87 21.97 2.74 21.92 2.62Z"
        fill="#202452"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.29 13.29L4 18.58V14.99C4 14.44 3.55 13.99 3 13.99C2.45 13.99 2 14.44 2 14.99V20.99C2 21.12 2.03 21.24 2.08 21.36C2.13 21.48 2.2 21.59 2.29 21.68C2.38 21.77 2.49 21.84 2.61 21.89C2.73 21.94 2.86 21.97 2.99 21.97H8.99C9.54 21.97 9.99 21.52 9.99 20.97C9.99 20.42 9.54 19.97 8.99 19.97H5.4L10.69 14.68C11.08 14.29 11.08 13.66 10.69 13.27C10.3 12.88 9.67 12.88 9.28 13.27L9.29 13.29Z"
        fill="#202452"
      />
    </Svg>
  );
};
