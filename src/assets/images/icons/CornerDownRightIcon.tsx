import React from 'react';
import { ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const CornerDownRightIcon = ({
  style,
  fill = 'black',
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.92 15.38C21.02 15.14 21.02 14.86 20.92 14.62C20.87 14.5 20.8 14.39 20.71 14.3L15.71 9.3C15.32 8.91 14.69 8.91 14.3 9.3C13.91 9.69 13.91 10.32 14.3 10.71L17.59 14H8C7.2 14 6.44 13.68 5.88 13.12C5.32 12.56 5 11.79 5 11V4C5 3.45 4.55 3 4 3C3.45 3 3 3.45 3 4V11C3 12.33 3.53 13.6 4.46 14.54C5.4 15.48 6.67 16 8 16H17.59L14.3 19.29C13.91 19.68 13.91 20.31 14.3 20.7C14.69 21.09 15.32 21.09 15.71 20.7L20.71 15.7C20.8 15.61 20.87 15.5 20.92 15.38Z"
        fill={fill}
      />
    </Svg>
  );
};
