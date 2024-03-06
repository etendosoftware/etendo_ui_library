import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';
import { ImageStyle, ColorValue } from 'react-native';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CheckCircleFillIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.4344 9.70711C17.8249 9.31658 17.8249 8.68342 17.4344 8.29289C17.0439 7.90237 16.4107 7.90237 16.0202 8.29289L10.7273 13.5858L8.70711 11.5656C8.31658 11.1751 7.68342 11.1751 7.29289 11.5656C6.90237 11.9561 6.90237 12.5893 7.29289 12.9798L10.0202 15.7071C10.4107 16.0976 11.0439 16.0976 11.4344 15.7071L17.4344 9.70711Z"
        fill={fill}
      />
    </Svg>
  );
};
