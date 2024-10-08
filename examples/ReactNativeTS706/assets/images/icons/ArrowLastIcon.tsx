import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const ArrowLastIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 31);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 31 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.1664 32C28.7953 32 28.4241 32 28.0531 32C27.7698 31.8864 27.4587 31.8159 27.2092 31.6504C26.6598 31.2857 26.4392 30.7359 26.4402 30.0727L26.4299 2.02074C26.4223 0.742552 27.3379 -0.0642497 28.4277 0.00401875C28.52 0.0097822 28.6131 0.00442463 28.7058 0.00442463C29.9566 0.00434345 30.6458 0.691411 30.646 1.94792C30.6469 11.309 30.6467 20.6701 30.6461 30.0313C30.646 31.1858 30.2454 31.6443 29.1664 32ZM22.3999 19.1116C16.7569 23.0341 11.114 26.9566 5.47496 30.8847C4.76762 31.3775 4.05089 31.8364 3.18937 32C2.98318 32 2.77707 32 2.57088 32C1.58993 31.7934 0.967588 31.1795 0.700239 30.226C0.569895 29.7611 0.482411 29.2663 0.481688 28.7847C0.468846 20.267 0.493727 11.7493 0.525832 3.23155C0.52824 2.63889 0.558739 2.00937 0.862928 1.43157C1.20323 0.473862 2.12222 -0.00499171 3.08383 0.0473664C3.84839 0.12773 4.49522 0.476865 5.11058 0.904415C10.8732 4.90806 16.6354 8.91252 22.3944 12.9215C22.6985 13.1332 22.9985 13.363 23.2562 13.6282C24.2348 14.6902 24.5892 15.8104 24.0817 17.1684C23.7635 18.02 23.1254 18.6191 22.3999 19.1116Z"
        fill={fill}
      />
    </Svg>
  );
};
