import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CoffeIcon = ({
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
        d="M22.54 9.46C21.6 8.52 20.33 8 19 8H2C1.45 8 1 8.45 1 9V18C1 19.33 1.53 20.6 2.46 21.54C3.4 22.48 4.67 23 6 23H14C15.33 23 16.6 22.47 17.54 21.54C18.48 20.6 19 19.33 19 18C20.33 18 21.6 17.47 22.54 16.54C23.48 15.6 24 14.33 24 13C24 11.67 23.47 10.4 22.54 9.46ZM17 18C17 18.8 16.68 19.56 16.12 20.12C15.56 20.68 14.79 21 14 21H6C5.2 21 4.44 20.68 3.88 20.12C3.32 19.56 3 18.79 3 18V10H17V18ZM21.12 15.12C20.56 15.68 19.79 16 19 16V10C19.8 10 20.56 10.32 21.12 10.88C21.68 11.44 22 12.21 22 13C22 13.79 21.68 14.56 21.12 15.12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 6C6.55 6 7 5.55 7 5V2C7 1.45 6.55 1 6 1C5.45 1 5 1.45 5 2V5C5 5.55 5.45 6 6 6Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 6C10.55 6 11 5.55 11 5V2C11 1.45 10.55 1 10 1C9.45 1 9 1.45 9 2V5C9 5.55 9.45 6 10 6Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 6C14.55 6 15 5.55 15 5V2C15 1.45 14.55 1 14 1C13.45 1 13 1.45 13 2V5C13 5.55 13.45 6 14 6Z"
        fill={fill}
      />
    </Svg>
  );
};
