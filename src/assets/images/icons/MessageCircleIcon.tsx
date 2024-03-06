import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MessageCircleIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.99995 22C2.73995 22 2.47995 21.9 2.28995 21.71C2.01995 21.44 1.92995 21.05 2.04995 20.69L3.81995 15.37C3.27995 14.16 2.98995 12.83 2.99995 11.5C2.99995 9.74 3.48995 8.01 4.41995 6.51C5.34995 5.01 6.66995 3.8 8.24995 3.01C9.54995 2.35 11.01 2 12.48 2H13C15.39 2.13 17.58 3.11 19.24 4.76C20.89 6.41 21.87 8.61 22 10.94V11.49C22 12.96 21.66 14.43 20.99 15.74C20.2 17.31 18.99 18.64 17.49 19.57C15.99 20.5 14.26 20.99 12.5 20.99C11.19 21.01 9.84995 20.71 8.62995 20.17L3.30995 21.94C3.20995 21.98 3.09995 21.99 2.98995 21.99L2.99995 22ZM12.48 4C11.33 4 10.18 4.27 9.14995 4.79C7.89995 5.41 6.84995 6.37 6.11995 7.56C5.38995 8.75 4.99995 10.11 4.99995 11.5C4.99995 12.66 5.26995 13.82 5.78995 14.85C5.90995 15.09 5.92995 15.36 5.84995 15.62L4.57995 19.42L8.37995 18.15C8.62995 18.06 8.90995 18.08 9.14995 18.21C10.18 18.73 11.36 19.03 12.5 19C13.9 19 15.26 18.61 16.44 17.88C17.63 17.15 18.58 16.1 19.2 14.85C19.72 13.81 20 12.66 19.99 11.5V11C19.89 9.21 19.12 7.48 17.81 6.18C16.51 4.88 14.77 4.1 12.93 4H12.48C12.48 4 12.47 4 12.46 4H12.48Z"
        fill={fill}
      />
    </Svg>
  );
};
