import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CompassIcon = ({
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
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9471 7.05289C17.2149 7.32073 17.3085 7.71689 17.1887 8.07623L15.0687 14.4362C14.9691 14.7348 14.7348 14.9691 14.4362 15.0687L8.07623 17.1887C7.71689 17.3085 7.32073 17.2149 7.05289 16.9471C6.78506 16.6793 6.69154 16.2831 6.81132 15.9238L8.93132 9.56377C9.03085 9.26517 9.26517 9.03085 9.56377 8.93132L15.9238 6.81132C16.2831 6.69154 16.6793 6.78506 16.9471 7.05289ZM10.6706 10.6706L9.34114 14.6589L13.3294 13.3294L14.6589 9.34114L10.6706 10.6706Z"
        fill={fill}
      />
    </Svg>
  );
};
