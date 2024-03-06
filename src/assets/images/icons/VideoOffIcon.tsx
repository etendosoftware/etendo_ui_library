import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const VideoOffIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7667)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.4501 6.11C23.1201 5.94 22.7101 5.97 22.4101 6.19L17.1001 10.03L17.0001 9.93V7C17.0001 6.2 16.6801 5.44 16.1201 4.88C15.5601 4.32 14.7901 4 14.0001 4H10.6601C10.1101 4 9.66006 4.45 9.66006 5C9.66006 5.55 10.1101 6 10.6601 6H14.0001C14.2701 6 14.5201 6.11 14.7101 6.29C14.9001 6.48 15.0001 6.73 15.0001 7V10.34C15.0001 10.61 15.1101 10.86 15.2901 11.05L16.2901 12.05C16.6401 12.4 17.1901 12.44 17.5801 12.15L21.9901 8.96V17C21.9901 17.55 22.4401 18 22.9901 18C23.5401 18 23.9901 17.55 23.9901 17V7C23.9901 6.62 23.7801 6.28 23.4401 6.11H23.4501Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.71006 0.289998C1.32006 -0.100002 0.680059 -0.100002 0.290059 0.289998C-0.0999414 0.679998 -0.0999414 1.32 0.290059 1.71L2.62006 4.04C1.96006 4.12 1.35006 4.41 0.880059 4.88C0.320059 5.44 5.85914e-05 6.2 5.85914e-05 7V17C5.85914e-05 17.8 0.320059 18.56 0.880059 19.12C1.44006 19.68 2.21006 20 3.00006 20H14.0001C14.8001 20 15.5601 19.68 16.1201 19.12C16.3901 18.85 16.6101 18.52 16.7601 18.17L22.2901 23.7C22.6801 24.09 23.3101 24.09 23.7001 23.7C24.0901 23.31 24.0901 22.68 23.7001 22.29L1.71006 0.289998ZM15.0001 17C15.0001 17.27 14.8901 17.52 14.7101 17.71C14.5301 17.9 14.2701 18 14.0001 18H3.00006C2.73006 18 2.48006 17.89 2.29006 17.71C2.10006 17.52 2.00006 17.27 2.00006 17V7C2.00006 6.73 2.11006 6.48 2.29006 6.29C2.47006 6.1 2.73006 6 3.00006 6H4.59006L15.0001 16.41V17Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7667">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
