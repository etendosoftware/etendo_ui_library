import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}

export const PencilIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 41}
      height={style?.height || 40}
      viewBox="0 0 41 40"
      fill="none"
      style={style as ViewStyle}
    >
      <Path
        d="M40.1796 6.95828C40.1498 8.52335 39.48 10.1135 38.1544 11.4391C31.6145 17.9748 25.0762 24.511 18.5394 31.0478C17.0009 32.5847 15.4578 34.1169 13.9303 35.6648C13.5759 36.0258 13.1385 36.2945 12.6563 36.4473C9.22359 37.5794 5.79504 38.7208 2.37067 39.8717C1.88863 40.0282 1.43164 40.0548 0.976202 39.8028C0.270356 39.4068 0.00898758 38.6634 0.289135 37.8167C0.982981 35.7195 1.68048 33.6234 2.38163 31.5283C2.84019 30.1463 3.28468 28.7597 3.77298 27.3887C3.90777 27.0112 4.12115 26.6666 4.399 26.3776C12.4925 18.2664 20.5928 10.162 28.6998 2.06432C30.0442 0.719922 31.6484 -0.00469971 33.5515 -0.00469971C37.2153 0.00312563 40.1764 2.98458 40.1796 6.95828ZM28.4416 6.84874C21.5146 13.7768 14.5829 20.71 7.64652 27.6485C9.2648 29.2683 10.9097 30.9132 12.5295 32.5362L33.3183 11.7333L28.4416 6.84874ZM35.6534 9.50935C36.7677 8.53745 37.3108 7.3292 36.9524 5.84082C36.6159 4.44322 35.7004 3.54175 34.2918 3.2256C32.8159 2.89537 31.6234 3.43532 30.6812 4.5387L35.6534 9.50935ZM5.99067 30.6221L4.2018 35.9731L9.5512 34.1889L5.99067 30.6221Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
