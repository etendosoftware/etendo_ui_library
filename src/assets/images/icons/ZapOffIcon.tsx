import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ZapOffIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7550)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3401 5.56L11.5901 5.26L11.4201 6.63C11.3501 7.18 11.7401 7.68 12.2901 7.75C12.8401 7.82 13.3401 7.43 13.4101 6.88L14.0001 2.13C14.0501 1.69 13.8101 1.27 13.4101 1.09C13.0001 0.909998 12.5301 1.03 12.2401 1.37L9.81006 4.29C9.46006 4.71 9.51006 5.35 9.94006 5.7C10.3701 6.05 10.9901 6 11.3501 5.57L11.3401 5.56Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6601 11H18.8601L17.8001 12.27C17.4501 12.69 17.5001 13.32 17.9301 13.68C18.3501 14.03 18.9801 13.98 19.3401 13.55L21.7701 10.64C22.0201 10.34 22.0701 9.93 21.9101 9.58C21.7501 9.23 21.3901 9 21.0001 9H15.6601C15.1101 9 14.6601 9.45 14.6601 10C14.6601 10.55 15.1101 11 15.6601 11Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.7101 22.29L1.71006 0.289998C1.32006 -0.100002 0.680059 -0.100002 0.290059 0.289998C-0.0999414 0.679998 -0.0999414 1.32 0.290059 1.71L6.64006 8.06L2.22006 13.36C1.97006 13.66 1.92006 14.07 2.08006 14.42C2.24006 14.77 2.60006 15 2.99006 15H10.8601L10.0001 21.88C9.95006 22.32 10.1901 22.74 10.5901 22.92C11.0001 23.1 11.4701 22.98 11.7601 22.64L16.0601 17.48L22.2901 23.71C22.6801 24.1 23.3101 24.1 23.7001 23.71C24.0901 23.32 24.0901 22.69 23.7001 22.3L23.7101 22.29ZM5.14006 13L8.07006 9.48L11.5901 13H5.14006ZM12.4201 18.74L12.9701 14.38L14.6601 16.07L12.4301 18.75L12.4201 18.74Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7550">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
