import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const BellActiveIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 31);
  const height = sizeSvg(style?.height, 36);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 31 36"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2472 17.1667C25.0807 17.1667 25.9142 17.0333 26.7476 16.8167V25.5L30.0815 28.8333V30.5H0.0769043V28.8333L3.41074 25.5V15.5C3.41074 10.3333 6.79459 5.78334 11.7453 4.31667V3.83334C11.7453 2.00001 13.2456 0.500009 15.0792 0.500009C15.5577 0.498892 16.0305 0.604539 16.4631 0.809249C16.8956 1.01396 17.277 1.31258 17.5796 1.68334C16.046 3.33334 15.0792 5.55001 15.0792 8.00001C15.0836 10.4298 16.0509 12.7588 17.7693 14.477C19.4877 16.1951 21.8171 17.1623 24.2472 17.1667ZM18.413 32.1667C18.413 34.0167 16.9295 35.5 15.0792 35.5C14.195 35.5 13.347 35.1488 12.7218 34.5237C12.0966 33.8986 11.7453 33.0507 11.7453 32.1667H18.413Z"
        fill={fill}
      />
      <Path
        d="M30.0815 8.00001C30.0815 11.2167 27.4644 13.8333 24.2472 13.8333C21.0301 13.8333 18.413 11.2167 18.413 8.00001C18.413 4.78334 21.0301 2.16667 24.2472 2.16667C27.4644 2.16667 30.0815 4.78334 30.0815 8.00001Z"
        fill="#F36A62"
      />
    </Svg>
  );
};
