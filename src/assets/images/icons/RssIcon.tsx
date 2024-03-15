import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const RssIcon = ({
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
        d="M3 11C3 10.4477 3.44772 10 4 10C6.65216 10 9.1957 11.0536 11.0711 12.9289C12.9464 14.8043 14 17.3478 14 20C14 20.5523 13.5523 21 13 21C12.4477 21 12 20.5523 12 20C12 17.8783 11.1571 15.8434 9.65685 14.3431C8.15656 12.8429 6.12173 12 4 12C3.44772 12 3 11.5523 3 11Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 4C3 3.44772 3.44772 3 4 3C8.50868 3 12.8327 4.79107 16.0208 7.97919C19.2089 11.1673 21 15.4913 21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 16.0218 17.4196 12.2064 14.6066 9.3934C11.7936 6.58035 7.97825 5 4 5C3.44772 5 3 4.55228 3 4Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19Z"
        fill={fill}
      />
    </Svg>
  );
};
