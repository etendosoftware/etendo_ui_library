import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ActivityIcon = ({
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
        d="M9 2C9.43043 2 9.81257 2.27543 9.94868 2.68377L15 17.8377L17.0513 11.6838C17.1874 11.2754 17.5696 11 18 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H18.7208L15.9487 21.3162C15.8126 21.7246 15.4304 22 15 22C14.5696 22 14.1874 21.7246 14.0513 21.3162L9 6.16228L6.94868 12.3162C6.81257 12.7246 6.43043 13 6 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H5.27924L8.05132 2.68377C8.18743 2.27543 8.56957 2 9 2Z"
        fill={fill}
      />
    </Svg>
  );
};
