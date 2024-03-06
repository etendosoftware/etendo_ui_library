import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const FolderPlusIcon = ({
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
        d="M22.12 5.88C21.56 5.32 20.79 5 20 5H11.54L9.84 2.45C9.65 2.17 9.34 2 9.01 2H4C3.2 2 2.44 2.32 1.88 2.88C1.32 3.44 1 4.21 1 5V19C1 19.8 1.32 20.56 1.88 21.12C2.44 21.68 3.21 22 4 22H20C20.8 22 21.56 21.68 22.12 21.12C22.68 20.56 23 19.79 23 19V8C23 7.2 22.68 6.44 22.12 5.88ZM21 19C21 19.27 20.89 19.52 20.71 19.71C20.53 19.9 20.27 20 20 20H4C3.73 20 3.48 19.89 3.29 19.71C3.1 19.52 3 19.27 3 19V5C3 4.73 3.11 4.48 3.29 4.29C3.47 4.1 3.73 4 4 4H8.46L10.16 6.55C10.35 6.83 10.66 7 10.99 7H19.99C20.26 7 20.51 7.11 20.7 7.29C20.89 7.48 20.99 7.73 20.99 8V19H21Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 13H13V11C13 10.45 12.55 10 12 10C11.45 10 11 10.45 11 11V13H9C8.45 13 8 13.45 8 14C8 14.55 8.45 15 9 15H11V17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17V15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13Z"
        fill={fill}
      />
    </Svg>
  );
};
