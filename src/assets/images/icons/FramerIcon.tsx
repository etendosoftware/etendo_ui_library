import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const FramerIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7629)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.07615 1.61732C4.23093 1.24364 4.59557 1 5.00003 1H19C19.5523 1 20 1.44772 20 2V9C20 9.55228 19.5523 10 19 10H14.4142L19.7071 15.2929C19.9931 15.5789 20.0787 16.009 19.9239 16.3827C19.7691 16.7564 19.4045 17 19 17H13V23C13 23.4045 12.7564 23.7691 12.3827 23.9239C12.009 24.0787 11.5789 23.9931 11.2929 23.7071L4.29292 16.7071C4.10539 16.5196 4.00003 16.2652 4.00003 16V9C4.00003 8.44772 4.44774 8 5.00003 8H9.58582L4.29292 2.70711C4.00692 2.42111 3.92137 1.99099 4.07615 1.61732ZM12.4142 8H18V3H7.41424L12.4142 8ZM11.5858 10H6.00003V15H16.5858L11.5858 10ZM7.41424 17L11 20.5858V17H7.41424Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7629">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
