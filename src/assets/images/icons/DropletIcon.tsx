import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const DropletIcon = ({
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
        d="M11.9996 1.69C12.2649 1.68989 12.5195 1.79525 12.7071 1.9829L18.3669 7.64266C18.3668 7.64259 18.367 7.64274 18.3669 7.64266C19.626 8.90107 20.4839 10.5048 20.8316 12.2507C21.1794 13.9967 21.0015 15.8066 20.3205 17.4515C19.6395 19.0964 18.4859 20.5023 17.0058 21.4915C15.5256 22.4807 13.7853 23.0087 12.005 23.0087C10.2247 23.0087 8.48443 22.4807 7.00426 21.4915C5.52409 20.5023 4.37054 19.0964 3.68953 17.4515C3.00851 15.8066 2.83063 13.9967 3.17837 12.2507C3.52606 10.505 4.3836 8.90161 5.64253 7.64326C5.64233 7.64346 5.64273 7.64306 5.64253 7.64326L11.2923 1.98352C11.4798 1.79571 11.7342 1.69012 11.9996 1.69ZM12.0006 4.10484L7.05688 9.05734C6.07746 10.0361 5.41032 11.2834 5.13985 12.6414C4.86938 13.9994 5.00773 15.4071 5.53741 16.6864C6.06709 17.9658 6.9643 19.0593 8.11554 19.8287C9.26678 20.5981 10.6203 21.0087 12.005 21.0087C13.3897 21.0087 14.7432 20.5981 15.8945 19.8287C17.0457 19.0593 17.9429 17.9658 18.4726 16.6864C19.0023 15.4071 19.1406 13.9994 18.8702 12.6414C18.5997 11.2834 17.9326 10.0361 16.9531 9.05734L12.0006 4.10484Z"
        fill={fill}
      />
    </Svg>
  );
};
