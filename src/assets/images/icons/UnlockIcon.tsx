import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const UnlockIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 10H8V7.00001C8 6.01001 8.36 5.05001 9.03 4.32001C9.7 3.58001 10.61 3.12001 11.6 3.02001C12.59 2.92001 13.57 3.19001 14.37 3.78001C15.17 4.37001 15.72 5.23001 15.92 6.20001C16.03 6.74001 16.56 7.10001 17.1 6.98001C17.64 6.87001 17.99 6.34001 17.88 5.80001C17.58 4.34001 16.76 3.05001 15.56 2.16001C14.36 1.28001 12.88 0.880007 11.4 1.03001C9.92 1.18001 8.55 1.87001 7.55 2.98001C6.55 4.09001 6 5.52001 6 7.01001V10.01H5C3.35 10.01 2 11.36 2 13.01V20.01C2 21.66 3.35 23.01 5 23.01H19C20.65 23.01 22 21.66 22 20.01V13.01C22 11.36 20.65 10.01 19 10.01V10ZM20 20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V13C4 12.45 4.45 12 5 12H19C19.55 12 20 12.45 20 13V20Z"
        fill={fill}
      />
    </Svg>
  );
};
