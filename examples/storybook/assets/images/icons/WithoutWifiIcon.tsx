import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const WithoutWifiIcon = ({
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
        d="M37.1268 15.6002C35.418 13.9649 33.5993 12.6136 31.665 11.557L35.4557 7.76562C37.3479 8.92618 39.151 10.3383 40.8221 12.015C39.5991 13.2015 38.3759 14.3882 37.1268 15.6002ZM29.6605 10.5854L25.5988 14.6478L21.0706 19.1768L9.97794 30.2713L6.03159 26.3242L10.4424 21.9126C9.56061 21.0241 8.69069 20.1477 7.82049 19.2709C10.4932 16.3953 14.2526 14.627 18.2517 14.1153L23.4073 8.9456C22.4766 8.86676 21.5508 8.78501 20.5515 8.78602C14.1445 8.79263 8.6965 11.1459 4.09163 15.5404C2.87565 14.3093 1.6934 13.1052 0.495483 11.8998C7.1649 4.85391 17.9048 1.92147 27.8332 4.519L32.3599 0L36.3172 3.93847L33.5497 6.69553L29.6605 10.5854ZM26.0061 26.5929C24.1896 28.4044 22.3736 30.2154 20.5842 32C19.0551 30.4642 17.4936 28.8959 15.9147 27.31L18.6346 24.6077C21.2174 23.944 24.1441 24.609 26.0061 26.5929ZM27.7929 15.4297C29.7983 16.2953 31.687 17.5517 33.3382 19.2314C32.1265 20.4325 30.9196 21.6337 29.6702 22.8672C27.9432 21.2011 25.9429 20.067 23.6949 19.5283L27.7929 15.4297Z"
        fill={fill}
      />
    </Svg>
  );
};
