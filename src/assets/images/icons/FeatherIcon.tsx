import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const FeatherIcon = ({
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
        d="M20.9499 3.05C19.6399 1.74 17.8599 1 15.9999 1C14.1399 1 12.3599 1.74 11.0499 3.05L4.29995 9.8C4.10995 9.99 4.00995 10.24 4.00995 10.51V18.6L1.29995 21.31C0.909946 21.7 0.909946 22.33 1.29995 22.72C1.68995 23.11 2.31995 23.11 2.70995 22.72L5.41995 20.01H13.5099C13.7799 20.01 14.0299 19.9 14.2199 19.72L18.1799 15.75C18.1799 15.75 18.2199 15.71 18.2399 15.69L20.9599 12.97C22.2699 11.66 23.0099 9.87 23.0099 8.02C23.0099 6.17 22.2699 4.38 20.9599 3.07L20.9499 3.05ZM13.0799 18.01H7.40995L9.40995 16.01H15.0699L13.0799 18.01ZM19.5299 11.54L17.0699 14.01H11.4099L16.6999 8.72C17.0899 8.33 17.0899 7.7 16.6999 7.31C16.3099 6.92 15.6799 6.92 15.2899 7.31L5.99995 16.59V10.92L12.4599 4.46C13.3999 3.52 14.6699 2.99 15.9999 2.99C17.3299 2.99 18.5999 3.52 19.5399 4.46C20.4799 5.4 21.0099 6.67 21.0099 8C21.0099 9.33 20.4799 10.6 19.5399 11.54H19.5299Z"
        fill={fill}
      />
    </Svg>
  );
};
