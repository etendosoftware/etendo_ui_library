import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const PowerIcon = ({
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
        d="M4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V11C3 13.3869 3.94821 15.6761 5.63604 17.364C6.47177 18.1997 7.46392 18.8626 8.55585 19.3149C9.64778 19.7672 10.8181 20 12 20C14.3869 20 16.6761 19.0518 18.364 17.364C20.0518 15.6761 21 13.3869 21 11V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H4ZM1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H20C20.7957 2 21.5587 2.31607 22.1213 2.87868C22.6839 3.44129 23 4.20435 23 5V11C23 13.9174 21.8411 16.7153 19.7782 18.7782C17.7153 20.8411 14.9174 22 12 22C10.5555 22 9.12506 21.7155 7.79048 21.1627C6.4559 20.6099 5.24327 19.7996 4.22183 18.7782C2.15893 16.7153 1 13.9174 1 11V5C1 4.20435 1.31607 3.44129 1.87868 2.87868Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29289 9.29289C7.68342 8.90237 8.31658 8.90237 8.70711 9.29289L12 12.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289Z"
        fill={fill}
      />
    </Svg>
  );
};
