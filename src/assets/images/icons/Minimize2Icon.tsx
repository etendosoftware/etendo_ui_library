import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const Minimize2Icon = ({
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
        d="M10.3801 13.08C10.2601 13.03 10.1301 13 10.0001 13H4.00006C3.45006 13 3.00006 13.45 3.00006 14C3.00006 14.55 3.45006 15 4.00006 15H7.59006L2.29006 20.29C1.90006 20.68 1.90006 21.31 2.29006 21.7C2.68006 22.09 3.31006 22.09 3.70006 21.7L8.99006 16.41V20C8.99006 20.55 9.44006 21 9.99006 21C10.5401 21 10.9901 20.55 10.9901 20V14C10.9901 13.87 10.9601 13.74 10.9101 13.62C10.8101 13.38 10.6101 13.18 10.3701 13.08H10.3801Z"
        fill="#202452"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.7101 2.29C21.3201 1.9 20.6901 1.9 20.3001 2.29L15.0101 7.58V4C15.0101 3.45 14.5601 3 14.0101 3C13.4601 3 13.0101 3.45 13.0101 4V10C13.0101 10.13 13.0401 10.25 13.0901 10.37C13.1401 10.49 13.2101 10.6 13.3001 10.69C13.3901 10.78 13.5001 10.85 13.6201 10.9C13.7401 10.95 13.8701 10.98 14.0001 10.98H20.0001C20.5501 10.98 21.0001 10.53 21.0001 9.98C21.0001 9.43 20.5501 8.98 20.0001 8.98H16.4101L21.7001 3.69C22.0901 3.3 22.0901 2.67 21.7001 2.28L21.7101 2.29Z"
        fill="#202452"
      />
    </Svg>
  );
};
