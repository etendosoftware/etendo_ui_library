import React from 'react';
import { ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { PRIMARY_100 } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const DeleteIcon = ({ style, fill = PRIMARY_100 }: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.1199 3.88C22.5599 3.32 21.7899 3 20.9999 3H7.99994C7.70994 3 7.43994 3.12 7.24994 3.34L0.249941 11.34C-0.0800586 11.72 -0.0800586 12.28 0.249941 12.66L7.24994 20.66C7.43994 20.88 7.70994 21 7.99994 21H20.9999C21.7999 21 22.5599 20.68 23.1199 20.12C23.6799 19.56 23.9999 18.79 23.9999 18V6C23.9999 5.2 23.6799 4.44 23.1199 3.88ZM21.9999 18C21.9999 18.27 21.8899 18.52 21.7099 18.71C21.5299 18.9 21.2699 19 20.9999 19H8.44994L2.32994 12L8.44994 5H20.9999C21.2699 5 21.5199 5.11 21.7099 5.29C21.8999 5.48 21.9999 5.73 21.9999 6V18Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.7099 8.29C18.3199 7.9 17.6899 7.9 17.2999 8.29L15.0099 10.58L12.7199 8.29C12.3299 7.9 11.6999 7.9 11.3099 8.29C10.9199 8.68 10.9199 9.31 11.3099 9.7L13.5999 11.99L11.3099 14.28C10.9199 14.67 10.9199 15.3 11.3099 15.69C11.6999 16.08 12.3299 16.08 12.7199 15.69L15.0099 13.4L17.2999 15.69C17.6899 16.08 18.3199 16.08 18.7099 15.69C19.0999 15.3 19.0999 14.67 18.7099 14.28L16.4199 11.99L18.7099 9.7C19.0999 9.31 19.0999 8.68 18.7099 8.29Z"
        fill={fill}
      />
    </Svg>
  );
};
