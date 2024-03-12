import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const UploadCloudIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7422)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.8199 12.52C23.4899 11.23 22.7399 10.08 21.6899 9.25998C20.6399 8.43998 19.3399 7.99998 18.0099 7.99998H17.4899C17.1299 6.96998 16.5699 6.00998 15.8599 5.16998C14.9799 4.12998 13.8699 3.30998 12.6299 2.75998C11.3899 2.20998 10.0299 1.95998 8.66995 1.99998C7.30995 2.04998 5.97995 2.40998 4.77995 3.04998C3.57995 3.68998 2.53995 4.58998 1.73995 5.68998C0.929948 6.78998 0.389948 8.05998 0.139948 9.38998C-0.100052 10.73 -0.0400516 12.1 0.329948 13.42C0.699948 14.73 1.34995 15.94 2.24995 16.96C2.61995 17.37 3.24995 17.41 3.65995 17.05C4.06995 16.68 4.10995 16.05 3.74995 15.64C3.04995 14.85 2.53995 13.91 2.24995 12.89C1.96995 11.87 1.91995 10.8 2.09995 9.75998C2.27995 8.71998 2.70995 7.72998 3.33995 6.87998C3.95995 6.02998 4.76995 5.31998 5.70995 4.82998C6.63995 4.32998 7.67995 4.05998 8.73995 4.01998C9.79995 3.97998 10.8499 4.17998 11.8199 4.60998C12.7899 5.03998 13.6499 5.67998 14.3299 6.47998C15.0099 7.27998 15.5099 8.23998 15.7699 9.25998C15.8799 9.69998 16.2799 10.01 16.7399 10.01H17.9999C18.8899 10.01 19.7499 10.31 20.4499 10.85C21.15 11.4 21.65 12.16 21.8699 13.02C22.0899 13.88 22.0199 14.79 21.6599 15.61C21.2999 16.42 20.6899 17.1 19.9099 17.52C19.4299 17.78 19.2499 18.39 19.5099 18.88C19.7699 19.36 20.3799 19.54 20.8699 19.28C22.0399 18.64 22.9599 17.63 23.4999 16.41C24.0299 15.19 24.1399 13.82 23.8099 12.53L23.8199 12.52Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.7099 11.29C12.6199 11.2 12.5099 11.13 12.3899 11.08C12.1499 10.98 11.8699 10.98 11.6299 11.08C11.5099 11.13 11.3999 11.2 11.3099 11.29L7.30995 15.29C6.91995 15.68 6.91995 16.31 7.30995 16.7C7.69995 17.09 8.32995 17.09 8.71995 16.7L11.0099 14.41V21C11.0099 21.55 11.4599 22 12.0099 22C12.5599 22 13.0099 21.55 13.0099 21V14.41L15.2999 16.7C15.6899 17.09 16.3199 17.09 16.7099 16.7C17.0999 16.31 17.0999 15.68 16.7099 15.29L12.7099 11.29Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7422">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
