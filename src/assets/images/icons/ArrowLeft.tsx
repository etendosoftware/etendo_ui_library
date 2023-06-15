import React from 'react';
import {ImageStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const ArrowLeft = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 24}
      height={style?.height || 32}
      viewBox="0 0 24 32"
      fill="none"
      style={style}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.28888 12.5093C0.099184 14.3213 0.0991821 17.6787 2.28888 19.4907L16.1377 30.9511C19.0917 33.3956 23.5574 31.2947 23.5574 27.4604L23.5574 4.5396C23.5574 0.705348 19.0917 -1.39562 16.1377 1.04888L2.28888 12.5093Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
