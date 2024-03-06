import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const UserPlusIcon = ({
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
        d="M23 10H21V8C21 7.45 20.55 7 20 7C19.45 7 19 7.45 19 8V10H17C16.45 10 16 10.45 16 11C16 11.55 16.45 12 17 12H19V14C19 14.55 19.45 15 20 15C20.55 15 21 14.55 21 14V12H23C23.55 12 24 11.55 24 11C24 10.45 23.55 10 23 10Z"
        fill={fill}
      />
    </Svg>
  );
};
