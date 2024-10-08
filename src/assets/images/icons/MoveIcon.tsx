import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MoveIcon = ({
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
        d="M22.92 12.38C23.02 12.14 23.02 11.86 22.92 11.62C22.87 11.5 22.8 11.39 22.7 11.3L19.7 8.3C19.31 7.91 18.68 7.91 18.29 8.3C17.9 8.69 17.9 9.31999 18.29 9.71L19.58 11H12.99V4.41L14.28 5.7C14.67 6.08999 15.3 6.08999 15.69 5.7C16.08 5.31 16.08 4.68 15.69 4.29L12.71 1.29C12.62 1.2 12.51 1.12 12.39 1.07C12.15 0.969995 11.87 0.969995 11.63 1.07C11.51 1.12 11.4 1.19 11.31 1.29L8.30999 4.29C7.91999 4.68 7.91999 5.31 8.30999 5.7C8.69999 6.08999 9.32999 6.08999 9.71999 5.7L11.01 4.41V11H4.40999L5.69999 9.71C6.08999 9.31999 6.08999 8.69 5.69999 8.3C5.30999 7.91 4.67999 7.91 4.28999 8.3L1.28999 11.29C1.19999 11.38 1.12999 11.49 1.06999 11.61C1.01999 11.73 0.99999 11.86 0.98999 11.98C0.98999 12.11 1.01999 12.23 1.06999 12.35C1.11999 12.47 1.18999 12.58 1.27999 12.67L4.27999 15.67C4.66999 16.06 5.29999 16.06 5.68999 15.67C6.07999 15.28 6.07999 14.65 5.68999 14.26L4.39999 12.97H10.99V19.56L9.69999 18.27C9.30999 17.88 8.67999 17.88 8.28999 18.27C7.89999 18.66 7.89999 19.29 8.28999 19.68L11.29 22.68C11.38 22.77 11.49 22.84 11.61 22.89C11.85 22.99 12.13 22.99 12.37 22.89C12.49 22.84 12.6 22.77 12.69 22.68L15.69 19.68C16.08 19.29 16.08 18.66 15.69 18.27C15.3 17.88 14.67 17.88 14.28 18.27L12.99 19.56V12.97H19.58L18.29 14.26C17.9 14.65 17.9 15.28 18.29 15.67C18.68 16.06 19.31 16.06 19.7 15.67L22.7 12.67C22.79 12.58 22.86 12.47 22.91 12.35L22.92 12.38Z"
        fill={fill}
      />
    </Svg>
  );
};
