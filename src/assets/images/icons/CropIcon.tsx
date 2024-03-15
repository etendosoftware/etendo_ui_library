import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CropIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7566)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 17H19V8C19 7.2 18.68 6.44 18.12 5.88C17.56 5.32 16.79 5 16 5L7.09 5.08L7.13 1.01C7.13 0.46 6.69 0 6.14 0C5.59 0 5.14 0.44 5.13 0.99L5.09 5.09L0.99 5.13C0.44 5.13 0 5.59 0 6.14C0 6.69 0.46 7.14 1.01 7.13L5.08 7.09L5 15.99C5 16.79 5.32 17.56 5.88 18.12C6.44 18.68 7.21 19 8 19H17V23C17 23.55 17.45 24 18 24C18.55 24 19 23.55 19 23V19H23C23.55 19 24 18.55 24 18C24 17.45 23.55 17 23 17ZM8 17C7.73 17 7.48 16.89 7.29 16.71C7.1 16.53 7 16.27 7 16.01L7.08 7.08L16.01 7C16.27 7 16.53 7.11 16.71 7.29C16.89 7.47 17 7.73 17 8V17H8Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7566">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
