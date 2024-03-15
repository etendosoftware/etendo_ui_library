import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CornerLeftDownIcon = ({
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
        d="M19.9999 3H12.9999C11.6699 3 10.3999 3.53 9.45995 4.46C8.51995 5.4 7.99995 6.67 7.99995 8V17.59L4.70995 14.3C4.31995 13.91 3.68995 13.91 3.29995 14.3C2.90995 14.69 2.90995 15.32 3.29995 15.71L8.29995 20.71C8.38995 20.8 8.49995 20.87 8.61995 20.92C8.85995 21.02 9.13995 21.02 9.37995 20.92C9.49995 20.87 9.60995 20.8 9.69995 20.71L14.6999 15.71C15.0899 15.32 15.0899 14.69 14.6999 14.3C14.3099 13.91 13.6799 13.91 13.2899 14.3L9.99995 17.59V8C9.99995 7.2 10.3199 6.44 10.8799 5.88C11.4399 5.32 12.2099 5 12.9999 5H19.9999C20.5499 5 20.9999 4.55 20.9999 4C20.9999 3.45 20.5499 3 19.9999 3Z"
        fill={fill}
      />
    </Svg>
  );
};
