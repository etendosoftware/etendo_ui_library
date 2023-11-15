import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const EditIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = typeof style?.width === 'number' ? style.width : 32;
  const height = typeof style?.height === 'number' ? style.height : 32;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.1147 2.00038C29.1877 0.718211 26.054 -0.0137904 24.2424 0.000196858C22.4091 -0.0122363 20.627 0.733752 19.3639 2.05167L2.60152 18.8286C2.4042 18.9918 2.26437 19.2063 2.19291 19.4503L0.0255549 29.3828L0.0224475 29.3984C-0.0536816 29.8615 0.0954694 30.3371 0.424845 32C0.681198 30.9307 1.023 31.0768 2.44926 31.0831H1.63514L11.5941 28.9197C11.8535 28.8746 12.0913 28.7565 13.5734 28.5685L29.1131 11.7806C30.3996 10.5 31.1313 8.72671 31.1189 6.91613C31.1204 5.06981 30.4104 3.32451 29.1147 2.00038ZM8.57533 26.7392L3.18259 27.925L4.37113 22.543L8.57533 26.7392ZM25.5009 11.4853L11.3222 25.5814L5.482 19.8015L19.6591 5.65728L25.5009 11.4853ZM28.372 6.86485V6.9208C28.386 7.88126 28.0427 9.3406 27.4212 9.55196L22.7866 3.69284C22.3283 3.08517 23.2652 2.7417 24.2207 2.7417C24.2253 2.7417 24.2315 2.7417 24.2377 2.7417H24.2393C25.344 2.7417 26.3802 3.17065 27.1617 3.94927C27.9417 4.7279 28.372 6.71409 28.372 6.86485Z"
        fill={fill}
      />
    </Svg>
  );
};
