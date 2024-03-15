import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const GlobeIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM20.94 11H16.93C16.71 8.24 15.78 5.59 14.26 3.3C17.82 4.22 20.52 7.26 20.94 11ZM9.06 13H14.93C14.68 15.71 13.66 18.3 11.99 20.45C10.32 18.3 9.3 15.71 9.05 13H9.06ZM9.06 11C9.31 8.29 10.33 5.7 12 3.55C13.67 5.7 14.69 8.29 14.94 11H9.07H9.06ZM9.74 3.3C8.21 5.59 7.29 8.24 7.07 11H3.06C3.47 7.26 6.18 4.22 9.74 3.3ZM3.06 13H7.07C7.29 15.76 8.22 18.41 9.74 20.7C6.18 19.78 3.48 16.74 3.06 13ZM14.26 20.7C15.79 18.41 16.71 15.76 16.93 13H20.94C20.53 16.74 17.82 19.78 14.26 20.7Z"
        fill={fill}
      />
    </Svg>
  );
};
