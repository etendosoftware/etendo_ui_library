import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const UserXIcon = ({
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
        d="M12 14H5C3.67 14 2.4 14.53 1.46 15.46C0.52 16.4 0 17.67 0 19V21C0 21.55 0.45 22 1 22C1.55 22 2 21.55 2 21V19C2 18.2 2.32 17.44 2.88 16.88C3.44 16.32 4.21 16 5 16H12C12.8 16 13.56 16.32 14.12 16.88C14.68 17.44 15 18.21 15 19V21C15 21.55 15.45 22 16 22C16.55 22 17 21.55 17 21V19C17 17.67 16.47 16.4 15.54 15.46C14.6 14.52 13.33 14 12 14Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.5 12C11.26 12 13.5 9.76 13.5 7C13.5 4.24 11.26 2 8.5 2C5.74 2 3.5 4.24 3.5 7C3.5 9.76 5.74 12 8.5 12ZM8.5 4C10.16 4 11.5 5.34 11.5 7C11.5 8.66 10.16 10 8.5 10C6.84 10 5.5 8.66 5.5 7C5.5 5.34 6.84 4 8.5 4Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.91 10.5L23.7 8.71C24.09 8.32 24.09 7.69 23.7 7.3C23.31 6.91 22.68 6.91 22.29 7.3L20.5 9.09L18.71 7.3C18.32 6.91 17.69 6.91 17.3 7.3C16.91 7.69 16.91 8.32 17.3 8.71L19.09 10.5L17.3 12.29C16.91 12.68 16.91 13.31 17.3 13.7C17.69 14.09 18.32 14.09 18.71 13.7L20.5 11.91L22.29 13.7C22.68 14.09 23.31 14.09 23.7 13.7C24.09 13.31 24.09 12.68 23.7 12.29L21.91 10.5Z"
        fill={fill}
      />
    </Svg>
  );
};
