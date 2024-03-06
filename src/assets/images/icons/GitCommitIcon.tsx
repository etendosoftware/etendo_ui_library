import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const GitCommitIcon = ({
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
        d="M22.91 11H16.96C16.96 11 16.89 11.02 16.85 11.02C16.39 8.73 14.38 7 11.95 7C9.52 7 7.5 8.73 7.05 11.02C7.02 11.02 6.99 11 6.95 11H1C0.45 11 0 11.45 0 12C0 12.55 0.45 13 1 13H6.95C6.95 13 7.01 12.98 7.05 12.98C7.51 15.27 9.53 17 11.95 17C14.37 17 16.4 15.27 16.85 12.98C16.89 12.98 16.92 13 16.96 13H22.91C23.46 13 23.91 12.55 23.91 12C23.91 11.45 23.46 11 22.91 11ZM11.95 15C10.29 15 8.95 13.66 8.95 12C8.95 10.34 10.29 9 11.95 9C13.61 9 14.95 10.34 14.95 12C14.95 13.66 13.61 15 11.95 15Z"
        fill={fill}
      />
    </Svg>
  );
};
