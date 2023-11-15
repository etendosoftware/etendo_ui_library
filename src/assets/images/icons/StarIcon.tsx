import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const StarIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 41);
  const height = sizeSvg(style?.height, 40);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.928 19.9445C12.903 13.5677 9.69155 9.97223 4 9.97223C9.69155 9.97223 12.903 6.38544 12.928 0C12.903 6.38544 16.0937 9.97223 21.7778 9.97223C16.0937 9.97223 12.903 13.5677 12.928 19.9445Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.4992 40C24.4642 31.1897 19.9682 26.2222 12 26.2222C19.9682 26.2222 24.4642 21.2666 24.4992 12.4444C24.4642 21.2666 28.9312 26.2222 36.8889 26.2222C28.9312 26.2222 24.4642 31.1897 24.4992 40Z"
        fill={fill}
      />
    </Svg>
  );
};
