import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const NavigationIcon = ({
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
        d="M22.7071 1.29289C23.006 1.59172 23.0847 2.04615 22.9038 2.42808L13.9038 21.4281C13.7229 21.8098 13.3218 22.0368 12.9015 21.9951C12.4812 21.9535 12.1323 21.6523 12.0299 21.2425L10.1754 13.8246L2.75749 11.9701C2.34773 11.8677 2.04651 11.5189 2.00489 11.0985C1.96327 10.6782 2.19022 10.2771 2.57194 10.0963L21.5719 1.09626C21.9539 0.915345 22.4083 0.994058 22.7071 1.29289ZM5.95337 10.7076L11.2426 12.0299C11.6008 12.1194 11.8806 12.3992 11.9702 12.7575L13.2925 18.0466L19.8976 4.10238L5.95337 10.7076Z"
        fill={fill}
      />
    </Svg>
  );
};
