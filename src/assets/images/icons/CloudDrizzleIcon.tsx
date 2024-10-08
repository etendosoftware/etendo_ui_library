import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CloudDrizzleIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7499)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00003 18C8.55232 18 9.00003 18.4477 9.00003 19V21C9.00003 21.5523 8.55232 22 8.00003 22C7.44775 22 7.00003 21.5523 7.00003 21V19C7.00003 18.4477 7.44775 18 8.00003 18Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00003 12C8.55232 12 9.00003 12.4477 9.00003 13V15C9.00003 15.5523 8.55232 16 8.00003 16C7.44775 16 7.00003 15.5523 7.00003 15V13C7.00003 12.4477 7.44775 12 8.00003 12Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 18C16.5523 18 17 18.4477 17 19V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V19C15 18.4477 15.4477 18 16 18Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 12C16.5523 12 17 12.4477 17 13V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V13C15 12.4477 15.4477 12 16 12Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21C11 20.4477 11.4477 20 12 20Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 14C12.5523 14 13 14.4477 13 15V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15C11 14.4477 11.4477 14 12 14Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.08241 0.0465895C9.50129 -0.0978908 10.9342 0.096903 12.263 0.614915C13.5918 1.13293 14.7785 1.95932 15.7252 3.02599C16.498 3.89666 17.0929 4.90707 17.4793 6H18.0012C19.3784 6.00162 20.7131 6.47695 21.7813 7.3462C22.8494 8.21546 23.5861 9.42571 23.8675 10.7738C24.149 12.1219 23.9581 13.5258 23.3269 14.7499C22.6957 15.9739 21.6627 16.9435 20.4012 17.496C19.8953 17.7176 19.3056 17.4871 19.084 16.9812C18.8625 16.4753 19.093 15.8856 19.5989 15.664C20.4399 15.2957 21.1285 14.6492 21.5493 13.8332C21.9701 13.0172 22.0974 12.0813 21.9097 11.1825C21.7221 10.2838 21.231 9.47697 20.5189 8.89747C19.8069 8.31805 18.9172 8.00117 17.9992 8H16.74C16.284 8 15.8858 7.69154 15.7718 7.25004C15.4944 6.17599 14.9658 5.18324 14.2294 4.35361C13.4931 3.52398 12.5701 2.88123 11.5366 2.47833C10.5031 2.07543 9.38859 1.92393 8.28502 2.0363C7.18145 2.14867 6.12038 2.52171 5.18928 3.12466C4.25818 3.72761 3.4837 4.54321 2.92969 5.50423C2.37567 6.46526 2.05799 7.54419 2.00281 8.65209C1.94763 9.76 2.15654 10.8652 2.61233 11.8765C3.06811 12.8878 3.75771 13.7763 4.6243 14.4688C5.05575 14.8136 5.12602 15.4428 4.78125 15.8743C4.43648 16.3057 3.80722 16.376 3.37577 16.0312C2.26159 15.1409 1.37496 13.9985 0.78895 12.6982C0.202942 11.398 -0.0656602 9.97706 0.00528293 8.55261C0.0762262 7.12816 0.484683 5.74096 1.19699 4.50536C1.90929 3.26976 2.90505 2.22113 4.10218 1.44591C5.29931 0.670687 6.66353 0.19107 8.08241 0.0465895Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7499">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
