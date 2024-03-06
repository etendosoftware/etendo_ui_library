import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const InboxIcon = ({
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
        d="M22.9 11.58C22.9 11.58 22.9 11.56 22.9 11.55L19.45 4.66C19.2 4.16 18.82 3.74 18.35 3.45C17.88 3.16 17.33 3 16.77 3H7.24001C6.68001 3 6.13001 3.16 5.66001 3.45C5.19001 3.74 4.80001 4.16 4.56001 4.66L1.11001 11.55C1.11001 11.55 1.11001 11.57 1.11001 11.58C1.05001 11.71 1.01001 11.85 1.01001 12V18C1.01001 18.8 1.33001 19.56 1.89001 20.12C2.45001 20.68 3.22001 21 4.01001 21H20.01C20.81 21 21.57 20.68 22.13 20.12C22.69 19.56 23.01 18.79 23.01 18V12C23.01 11.85 22.97 11.71 22.91 11.58H22.9ZM6.34001 5.56C6.42001 5.39 6.55001 5.25 6.71001 5.15C6.87001 5.05 7.05001 5 7.24001 5H16.76C16.95 5 17.13 5.05 17.29 5.15C17.45 5.25 17.58 5.39 17.66 5.55L20.39 11H16.01C15.68 11 15.36 11.17 15.18 11.45L13.48 14H10.55L8.85001 11.45C8.66001 11.17 8.35001 11 8.02001 11H3.62001L6.35001 5.56H6.34001ZM20.71 18.71C20.52 18.9 20.27 19 20 19H4.00001C3.73001 19 3.48001 18.89 3.29001 18.71C3.10001 18.52 3.00001 18.27 3.00001 18V13H7.46001L9.16001 15.55C9.35001 15.83 9.66001 16 9.99001 16H13.99C14.32 16 14.64 15.83 14.82 15.55L16.52 13H20.98V18C20.98 18.27 20.87 18.52 20.69 18.71H20.71Z"
        fill={fill}
      />
    </Svg>
  );
};
