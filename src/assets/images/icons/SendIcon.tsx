import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const SendIcon = ({
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
        d="M22.9899 1.94001C22.9899 1.85001 22.9699 1.76001 22.9399 1.67001C22.9299 1.64001 22.9199 1.61001 22.9099 1.58001C22.8599 1.47001 22.7999 1.37001 22.7099 1.29001C22.6199 1.20001 22.5199 1.14001 22.4199 1.09001C22.3899 1.08001 22.3599 1.07001 22.3299 1.06001C22.2399 1.03001 22.1599 1.01001 22.0599 1.01001C22.0299 1.01001 22.0099 1.01001 21.9799 1.01001C21.8799 1.01001 21.7699 1.03001 21.6699 1.06001L1.66994 8.05001C1.27994 8.19001 1.01994 8.55001 0.999941 8.96001C0.979941 9.37001 1.21994 9.75001 1.58994 9.91001L10.2399 13.75L14.0799 22.4C14.2499 22.77 14.6199 23.01 15.0299 22.99C15.4399 22.97 15.7999 22.71 15.9299 22.32L22.9399 2.33001C22.9799 2.23001 22.9899 2.12001 22.9899 2.02001C22.9899 1.99001 22.9899 1.97001 22.9899 1.94001ZM18.1899 4.39001L10.7699 11.81L4.69994 9.11001L18.1799 4.39001H18.1899ZM14.8899 19.28L12.1899 13.21L19.6099 5.79001L14.8899 19.27V19.28Z"
        fill={fill}
      />
    </Svg>
  );
};
