import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const UploadIcon = ({
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
        d="M7.70996 8.71L11 5.42V15.01C11 15.56 11.45 16.01 12 16.01C12.55 16.01 13 15.56 13 15.01V5.41L16.29 8.7C16.68 9.08999 17.31 9.08999 17.7 8.7C18.09 8.31 18.09 7.68 17.7 7.29L12.71 2.29C12.62 2.2 12.51 2.12 12.39 2.07C12.15 1.97 11.87 1.97 11.63 2.07C11.51 2.12 11.4 2.19 11.31 2.29L6.30996 7.29C5.91996 7.68 5.91996 8.31 6.30996 8.7C6.69996 9.08999 7.32996 9.08999 7.71996 8.7L7.70996 8.71Z"
        fill={fill}
      />
    </Svg>
  );
};
