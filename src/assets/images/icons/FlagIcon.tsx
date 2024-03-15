import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const FlagIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.4 2.1C20.04 1.94 19.61 2.01 19.32 2.27C19.32 2.27 18.45 3 16 3C14.69 3 13.57 2.55 12.37 2.07C11.05 1.54 9.69 1 8 1C4.75 1 3.51 2.08 3.29 2.29C3.1 2.48 3 2.73 3 3V22C3 22.55 3.45 23 4 23C4.55 23 5 22.55 5 22V15.54C5.43 15.32 6.35 15 8 15C9.31 15 10.43 15.45 11.63 15.93C12.95 16.46 14.31 17 16 17C19.25 17 20.49 15.92 20.71 15.71C20.9 15.52 21 15.27 21 15V3C21 2.61 20.76 2.27 20.4 2.1ZM19 14.46C18.56 14.68 17.63 15 16 15C14.69 15 13.57 14.55 12.37 14.07C11.05 13.54 9.69 13 8 13C6.7 13 5.72 13.17 5 13.39V3.54C5.44 3.32 6.37 3 8 3C9.31 3 10.43 3.45 11.63 3.93C12.95 4.46 14.31 5 16 5C17.3 5 18.28 4.83 19 4.61V14.46Z"
        fill={fill}
      />
    </Svg>
  );
};
