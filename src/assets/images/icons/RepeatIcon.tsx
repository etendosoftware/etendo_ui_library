import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, Defs, ClipPath, Rect, G } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const RepeatIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7454)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.00012 12C3.55012 12 4.00012 11.55 4.00012 11V9C4.00012 8.2 4.32012 7.44 4.88012 6.88C5.44012 6.32 6.21012 6 7.00012 6H18.5901L16.3001 8.29C15.9101 8.68 15.9101 9.31 16.3001 9.7C16.6901 10.09 17.3201 10.09 17.7101 9.7L21.7101 5.7C21.8001 5.61 21.8701 5.5 21.9201 5.38C22.0201 5.14 22.0201 4.86 21.9201 4.62C21.8701 4.5 21.8001 4.39 21.7001 4.3L17.7101 0.289998C17.3201 -0.100002 16.6901 -0.100002 16.3001 0.289998C15.9101 0.679998 15.9101 1.31 16.3001 1.7L18.5901 3.99H7.00012C5.67012 3.99 4.40012 4.52 3.46012 5.45C2.52012 6.38 2.00012 7.66 2.00012 8.99V10.99C2.00012 11.54 2.45012 11.99 3.00012 11.99V12Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.0001 12C20.4501 12 20.0001 12.45 20.0001 13V15C20.0001 15.8 19.6801 16.56 19.1201 17.12C18.5601 17.68 17.7901 18 17.0001 18H5.41012L7.70012 15.71C8.09012 15.32 8.09012 14.69 7.70012 14.3C7.31012 13.91 6.68012 13.91 6.29012 14.3L2.29012 18.29C2.20012 18.38 2.12012 18.49 2.07012 18.61C1.97012 18.85 1.97012 19.13 2.07012 19.37C2.12012 19.49 2.19012 19.6 2.28012 19.69L6.28012 23.69C6.67012 24.08 7.30012 24.08 7.69012 23.69C8.08012 23.3 8.08012 22.67 7.69012 22.28L5.40012 19.99H16.9901C18.3201 19.99 19.5901 19.46 20.5301 18.53C21.4701 17.59 21.9901 16.32 21.9901 14.99V12.99C21.9901 12.44 21.5401 11.99 20.9901 11.99L21.0001 12Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7454">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
