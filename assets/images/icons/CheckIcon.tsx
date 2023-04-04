import React, {CSSProperties} from 'react';
import {Platform, ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}

export const CheckIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 43}
      height={style?.height || 32}
      viewBox="0 0 43 32"
      fill="none"
      style={style as ViewStyle}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.0309 1.12469C39.3624 -0.37562 36.6578 -0.374175 34.9899 1.12469L15.4917 21.2185L6.88504 12.2221C5.21785 10.4783 2.51325 10.4783 0.92578 12.2224C-0.277994 13.9669 -0.277994 16.7949 0.92578 18.5386L12.4693 30.6925C14.1382 32.4358 16.8428 32.4358 18.5114 30.6925L41.0309 7.15158C42.6985 5.40676 42.6985 2.57913 41.0309 1.12469Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
