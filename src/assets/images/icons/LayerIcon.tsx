import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const LayerIcon = ({
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
        d="M11.5528 1.10557C11.8343 0.964809 12.1657 0.964809 12.4472 1.10557L22.4472 6.10557C22.786 6.27496 23 6.62123 23 7C23 7.37877 22.786 7.72504 22.4472 7.89443L12.4472 12.8944C12.1657 13.0352 11.8343 13.0352 11.5528 12.8944L1.55276 7.89443C1.21398 7.72504 0.999975 7.37877 0.999975 7C0.999975 6.62123 1.21398 6.27496 1.55276 6.10557L11.5528 1.10557ZM4.23604 7L12 10.882L19.7639 7L12 3.11803L4.23604 7Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.10555 16.5528C1.35254 16.0588 1.95321 15.8586 2.44719 16.1056L12 20.882L21.5528 16.1056C22.0467 15.8586 22.6474 16.0588 22.8944 16.5528C23.1414 17.0468 22.9412 17.6474 22.4472 17.8944L12.4472 22.8944C12.1657 23.0352 11.8343 23.0352 11.5528 22.8944L1.55276 17.8944C1.05878 17.6474 0.858558 17.0468 1.10555 16.5528Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.10555 11.5528C1.35254 11.0588 1.95321 10.8586 2.44719 11.1056L12 15.882L21.5528 11.1056C22.0467 10.8586 22.6474 11.0588 22.8944 11.5528C23.1414 12.0468 22.9412 12.6474 22.4472 12.8944L12.4472 17.8944C12.1657 18.0352 11.8343 18.0352 11.5528 17.8944L1.55276 12.8944C1.05878 12.6474 0.858558 12.0468 1.10555 11.5528Z"
        fill={fill}
      />
    </Svg>
  );
};
