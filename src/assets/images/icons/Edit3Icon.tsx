import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const Edit3Icon = ({
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
        d="M11 20C11 19.4477 11.4477 19 12 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H12C11.4477 21 11 20.5523 11 20Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 3.87868C17.7026 3.87868 17.4174 3.99682 17.2071 4.2071L4.90299 16.5112L4.37439 18.6256L6.48877 18.097L18.7929 5.79289C18.897 5.68877 18.9796 5.56515 19.036 5.42911C19.0923 5.29306 19.1213 5.14725 19.1213 5C19.1213 4.85274 19.0923 4.70693 19.036 4.57089C18.9796 4.43484 18.897 4.31123 18.7929 4.2071C18.6888 4.10298 18.5652 4.02038 18.4291 3.96403C18.2931 3.90768 18.1473 3.87868 18 3.87868ZM15.7929 2.79289C16.3783 2.20753 17.1722 1.87868 18 1.87868C18.4099 1.87868 18.8158 1.95941 19.1945 2.11627C19.5732 2.27313 19.9173 2.50305 20.2071 2.79289C20.497 3.08273 20.7269 3.42682 20.8837 3.80552C21.0406 4.18422 21.1213 4.5901 21.1213 5C21.1213 5.4099 21.0406 5.81578 20.8837 6.19448C20.7269 6.57317 20.497 6.91726 20.2071 7.2071L7.70713 19.7071C7.57897 19.8353 7.41839 19.9262 7.24256 19.9701L3.24256 20.9701C2.90178 21.0553 2.54129 20.9555 2.29291 20.7071C2.04453 20.4587 1.94468 20.0982 2.02988 19.7575L3.02988 15.7575C3.07384 15.5816 3.16476 15.4211 3.29291 15.2929L15.7929 2.79289Z"
        fill={fill}
      />
    </Svg>
  );
};
