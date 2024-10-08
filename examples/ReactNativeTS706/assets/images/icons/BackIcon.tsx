import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const BackIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 41);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 41 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8711 16.1202C12.582 17.4907 14.2017 18.7873 15.8206 20.085C16.6947 20.693 17.3528 21.283 18.0892 21.9163C19.2559 22.9197 19.4266 24.5128 18.5212 25.6396C17.5956 26.7913 16.0025 27.035 14.8039 26.0873C10.3166 22.5394 5.84367 18.9726 1.39981 15.3702C-0.0201168 14.2591 0.0550472 12.3541 1.43623 11.2365C5.86238 7.65623 10.3118 4.10432 14.7752 0.57044C16.0042 -0.451956 17.6264 0.0202401 18.5517 1.0393C19.4337 2.17845 19.3638 3.77276 18.0518 4.75607C15.9614 6.51658 13.723 8.23549 11.5735 9.97328C11.3649 10.1846 11.1815 10.3282 11.0096 10.6434C11.2867 10.6434 11.6437 10.6434 11.8411 10.6434C16.8149 10.6436 21.7886 10.7692 26.8285 10.6452C34.6258 10.6583 40.4259 16.5151 40.4411 24.3488C40.4443 25.9602 40.4513 27.5713 40.4383 29.1825C40.4251 30.8139 39.4393 31.9977 37.8174 32C36.2709 32.0022 35.1391 30.8147 35.1045 29.1904C35.0579 27.0714 35.1875 24.7868 34.9244 22.6219C34.485 19.0053 31.2578 16.1001 27.6235 16.035C22.1514 15.9371 16.6763 16.0058 11.2025 16.0059C11.1531 16.0059 11.1035 16.0385 10.8711 16.1202Z"
        fill={fill}
      />
    </Svg>
  );
};
