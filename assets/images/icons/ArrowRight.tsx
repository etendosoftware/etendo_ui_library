import React from 'react';
import {ImageStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}
export const ArrowRight = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 23}
      height={style?.height || 32}
      viewBox="0 0 23 32"
      fill="none"
      style={style}
    >
      <Path
        d="M21.2914 12.5093C23.4811 14.3213 23.4811 17.6787 21.2914 19.4907L7.44262 30.9511C4.48866 33.3956 0.0229495 31.2947 0.0229495 27.4604L0.0229492 4.5396C0.0229492 0.705348 4.48865 -1.39562 7.44261 1.04888L21.2914 12.5093Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
