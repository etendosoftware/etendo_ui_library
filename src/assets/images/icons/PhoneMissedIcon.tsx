import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const PhoneMissedIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.3 5.00001L23.59 2.71001C23.98 2.32001 23.98 1.69001 23.59 1.30001C23.2 0.910007 22.57 0.910007 22.18 1.30001L19.89 3.59001L17.6 1.30001C17.21 0.910007 16.58 0.910007 16.19 1.30001C15.8 1.69001 15.8 2.32001 16.19 2.71001L18.48 5.00001L16.19 7.29001C15.8 7.68001 15.8 8.31001 16.19 8.70001C16.39 8.90001 16.64 8.99001 16.9 8.99001C17.16 8.99001 17.41 8.89001 17.61 8.70001L19.9 6.41001L22.19 8.70001C22.39 8.90001 22.64 8.99001 22.9 8.99001C23.16 8.99001 23.41 8.89001 23.61 8.70001C24 8.31001 24 7.68001 23.61 7.29001L21.32 5.00001H21.3Z"
        fill={fill}
      />
      <Path
        d="M20.3 14.9C19.42 14.78 18.55 14.57 17.71 14.25C17.17 14.05 16.59 14.01 16.03 14.13C15.47 14.25 14.95 14.53 14.54 14.93L13.82 15.65C11.98 14.47 10.41 12.91 9.23003 11.06L9.95003 10.34C10.35 9.93001 10.63 9.42001 10.75 8.86001C10.87 8.30001 10.83 7.72001 10.63 7.18001C10.32 6.34001 10.1 5.47001 9.98003 4.58001C9.88003 3.86001 9.52003 3.20001 8.96003 2.73001C8.41003 2.25001 7.71003 1.98001 6.99003 2.00001H3.99003C3.57003 2.00001 3.16003 2.09001 2.78003 2.26001C2.40003 2.43001 2.06003 2.67001 1.78003 2.98001C1.50003 3.29001 1.29003 3.65001 1.15003 4.04001C1.02003 4.44001 0.970027 4.85001 1.01003 5.29001C1.35003 8.52001 2.47003 11.67 4.23003 14.39C5.83003 16.91 8.02003 19.1 10.53 20.69C13.24 22.45 16.38 23.57 19.61 23.92C19.7 23.92 19.79 23.93 19.89 23.93C20.22 23.93 20.54 23.88 20.85 23.77C21.25 23.64 21.61 23.42 21.92 23.14C22.23 22.86 22.47 22.52 22.64 22.13C22.81 21.75 22.89 21.34 22.89 20.92V17.93C22.91 17.2 22.65 16.49 22.18 15.93C21.7 15.37 21.04 15 20.3 14.9ZM20.89 17.92V20.92C20.89 21.06 20.86 21.2 20.81 21.32C20.75 21.45 20.67 21.57 20.57 21.66C20.47 21.76 20.35 21.83 20.21 21.87C20.08 21.91 19.94 21.93 19.82 21.92C16.91 21.6 14.08 20.6 11.62 19C9.34003 17.55 7.38003 15.59 5.92003 13.3C4.32003 10.84 3.32003 7.99001 3.01003 5.08001C3.00003 4.94001 3.01003 4.81001 3.06003 4.67001C3.10003 4.54001 3.18003 4.42001 3.27003 4.31001C3.36003 4.21001 3.48003 4.13001 3.60003 4.07001C3.73003 4.01001 3.86003 3.99001 4.00003 3.99001H7.02003C7.26003 3.99001 7.49003 4.08001 7.67003 4.23001C7.85003 4.39001 7.97003 4.61001 8.01003 4.84001C8.14003 5.87001 8.40003 6.89001 8.76003 7.87001C8.83003 8.05001 8.84003 8.24001 8.80003 8.43001C8.76003 8.62001 8.67003 8.79001 8.54003 8.92001L7.27003 10.19C6.95003 10.51 6.89003 11 7.11003 11.39C8.62003 14.05 10.83 16.25 13.49 17.77C13.88 17.99 14.37 17.93 14.69 17.61L15.96 16.34C16.1 16.21 16.27 16.11 16.46 16.07C16.65 16.03 16.84 16.05 17.02 16.11C18 16.48 19.02 16.73 20.04 16.86C20.28 16.89 20.5 17.02 20.66 17.2C20.82 17.39 20.9 17.63 20.9 17.87V17.9L20.89 17.92Z"
        fill={fill}
      />
    </Svg>
  );
};
