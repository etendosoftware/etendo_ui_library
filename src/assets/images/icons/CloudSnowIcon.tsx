import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path, Defs, G, ClipPath, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CloudSnowIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7594)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.08241 1.04659C9.50129 0.902107 10.9342 1.0969 12.263 1.61491C13.5918 2.13292 14.7785 2.95932 15.7252 4.02599C16.498 4.89666 17.0929 5.90707 17.4793 7H18.0012C19.3784 7.00162 20.7131 7.47695 21.7813 8.3462C22.8494 9.21545 23.5861 10.4257 23.8675 11.7738C24.149 13.1219 23.9581 14.5258 23.3269 15.7498C22.6957 16.9739 21.6627 17.9435 20.4012 18.496C19.8953 18.7176 19.3056 18.4871 19.084 17.9812C18.8625 17.4753 19.093 16.8856 19.5989 16.664C20.4399 16.2957 21.1285 15.6492 21.5493 14.8332C21.9701 14.0172 22.0974 13.0813 21.9097 12.1825C21.7221 11.2838 21.231 10.477 20.5189 9.89747C19.8069 9.31805 18.9172 9.00117 17.9992 9H16.74C16.284 9 15.8858 8.69154 15.7718 8.25003C15.4944 7.17599 14.9658 6.18324 14.2294 5.35361C13.4931 4.52398 12.5701 3.88123 11.5366 3.47833C10.5031 3.07543 9.38859 2.92393 8.28502 3.0363C7.18145 3.14867 6.12038 3.52171 5.18928 4.12466C4.25818 4.72761 3.4837 5.54321 2.92969 6.50423C2.37567 7.46526 2.05799 8.54419 2.00281 9.65209C1.94763 10.76 2.15654 11.8652 2.61233 12.8765C3.06811 13.8878 3.75771 14.7763 4.6243 15.4688C5.05575 15.8136 5.12602 16.4428 4.78125 16.8743C4.43648 17.3057 3.80722 17.376 3.37577 17.0312C2.26159 16.1409 1.37496 14.9985 0.78895 13.6982C0.202942 12.398 -0.0656602 10.9771 0.00528293 9.55261C0.0762262 8.12816 0.484683 6.74096 1.19699 5.50536C1.90929 4.26976 2.90505 3.22113 4.10218 2.44591C5.29931 1.67069 6.66353 1.19107 8.08241 1.04659Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00003 16C7.00003 15.4477 7.44775 15 8.00003 15H8.01003C8.56232 15 9.01003 15.4477 9.01003 16C9.01003 16.5523 8.56232 17 8.01003 17H8.00003C7.44775 17 7.00003 16.5523 7.00003 16Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00003 20C7.00003 19.4477 7.44775 19 8.00003 19H8.01003C8.56232 19 9.01003 19.4477 9.01003 20C9.01003 20.5523 8.56232 21 8.01003 21H8.00003C7.44775 21 7.00003 20.5523 7.00003 20Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 18C11 17.4477 11.4477 17 12 17H12.01C12.5623 17 13.01 17.4477 13.01 18C13.01 18.5523 12.5623 19 12.01 19H12C11.4477 19 11 18.5523 11 18Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 22C11 21.4477 11.4477 21 12 21H12.01C12.5623 21 13.01 21.4477 13.01 22C13.01 22.5523 12.5623 23 12.01 23H12C11.4477 23 11 22.5523 11 22Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 16C15 15.4477 15.4477 15 16 15H16.01C16.5623 15 17.01 15.4477 17.01 16C17.01 16.5523 16.5623 17 16.01 17H16C15.4477 17 15 16.5523 15 16Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 20C15 19.4477 15.4477 19 16 19H16.01C16.5623 19 17.01 19.4477 17.01 20C17.01 20.5523 16.5623 21 16.01 21H16C15.4477 21 15 20.5523 15 20Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7594">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
