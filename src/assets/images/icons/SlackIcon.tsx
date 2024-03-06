import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SlackIcon = ({
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
        d="M14.5 3C14.2223 3 14 3.22228 14 3.5V8.5C14 8.77772 14.2223 9 14.5 9C14.7777 9 15 8.77772 15 8.5V3.5C15 3.22228 14.7777 3 14.5 3ZM12 3.5C12 2.11772 13.1177 1 14.5 1C15.8823 1 17 2.11772 17 3.5V8.5C17 9.88228 15.8823 11 14.5 11C13.1177 11 12 9.88228 12 8.5V3.5Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.5 8C20.2223 8 20 8.22228 20 8.5V9H20.5C20.7777 9 21 8.77772 21 8.5C21 8.22228 20.7777 8 20.5 8ZM18 8.5C18 7.11772 19.1177 6 20.5 6C21.8823 6 23 7.11772 23 8.5C23 9.88228 21.8823 11 20.5 11H19C18.4477 11 18 10.5523 18 10V8.5Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5 15C9.22228 15 9 15.2223 9 15.5V20.5C9 20.7777 9.22228 21 9.5 21C9.77772 21 10 20.7777 10 20.5V15.5C10 15.2223 9.77772 15 9.5 15ZM7 15.5C7 14.1177 8.11772 13 9.5 13C10.8823 13 12 14.1177 12 15.5V20.5C12 21.8823 10.8823 23 9.5 23C8.11772 23 7 21.8823 7 20.5V15.5Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.5 15C3.22228 15 3 15.2223 3 15.5C3 15.7777 3.22228 16 3.5 16C3.77772 16 4 15.7777 4 15.5V15H3.5ZM1 15.5C1 14.1177 2.11772 13 3.5 13H5C5.55228 13 6 13.4477 6 14V15.5C6 16.8823 4.88228 18 3.5 18C2.11772 18 1 16.8823 1 15.5Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5 14C15.2223 14 15 14.2223 15 14.5C15 14.7777 15.2223 15 15.5 15H20.5C20.7777 15 21 14.7777 21 14.5C21 14.2223 20.7777 14 20.5 14H15.5ZM13 14.5C13 13.1177 14.1177 12 15.5 12H20.5C21.8823 12 23 13.1177 23 14.5C23 15.8823 21.8823 17 20.5 17H15.5C14.1177 17 13 15.8823 13 14.5Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 19C13 18.4477 13.4477 18 14 18H15.5C16.8823 18 18 19.1177 18 20.5C18 21.8823 16.8823 23 15.5 23C14.1177 23 13 21.8823 13 20.5V19ZM15 20V20.5C15 20.7777 15.2223 21 15.5 21C15.7777 21 16 20.7777 16 20.5C16 20.2223 15.7777 20 15.5 20H15Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 9.5C1 8.11772 2.11772 7 3.5 7H8.5C9.88228 7 11 8.11772 11 9.5C11 10.8823 9.88228 12 8.5 12H3.5C2.11772 12 1 10.8823 1 9.5ZM3.5 9C3.22228 9 3 9.22228 3 9.5C3 9.77772 3.22228 10 3.5 10H8.5C8.77772 10 9 9.77772 9 9.5C9 9.22228 8.77772 9 8.5 9H3.5Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 3.5C6 2.11772 7.11772 1 8.5 1C9.88228 1 11 2.11772 11 3.5V5C11 5.55228 10.5523 6 10 6H8.5C7.11772 6 6 4.88228 6 3.5ZM8.5 3C8.22228 3 8 3.22228 8 3.5C8 3.77772 8.22228 4 8.5 4H9V3.5C9 3.22228 8.77772 3 8.5 3Z"
        fill={fill}
      />
    </Svg>
  );
};
