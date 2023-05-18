import React from 'react';
import {ImageStyle, ViewStyle} from 'react-native';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const TouchIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 23}
      height={style?.height || 32}
      viewBox="0 0 23 32"
      fill="none"
      style={style}
    >
      <G clip-path="url(#clip0_1_476)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.3221 17.3887C22.3211 20.3294 22.3297 23.2701 22.3149 26.2106C22.3046 28.309 21.4797 29.9995 19.7125 31.1807C18.9449 31.6937 18.0852 31.9541 17.1653 31.959C14.8372 31.9716 12.5081 31.9998 10.181 31.9523C8.14592 31.9107 6.64492 30.8863 5.70636 29.1168C3.95858 25.8216 2.24986 22.5056 0.525103 19.181C-0.110409 17.9798 0.938859 16.5121 2.29233 16.7755C2.91006 16.8957 3.50443 17.3631 4.06206 17.9518C4.4926 18.4993 4.94376 19.0434 5.39293 19.5892C5.44571 19.6534 5.48552 19.7504 5.55284 19.7762C5.72199 19.8409 5.93917 20.0212 6.07058 19.8979C6.22243 19.8314 6.32591 19.6126 6.40587 19.4394C6.4535 19.3363 6.4161 19.1937 6.4161 19.0688C6.41801 14.5053 6.42308 9.94178 6.41826 5.37833C6.41751 4.64008 6.65738 4.03591 7.31135 3.66562C8.31316 3.09843 9.55883 3.84399 9.6579 5.05459C9.67253 5.23387 9.66605 5.41506 9.66605 5.59535C9.66638 9.46527 9.6663 13.3353 9.66638 17.2135C9.66638 17.3301 9.6638 17.5044 9.66838 17.5797C9.67985 17.8879 9.82563 18.0874 10.1473 18.0901C10.4651 18.0928 10.6039 17.8868 10.6409 17.6008C10.6459 17.5622 10.647 17.523 10.647 17.4841C10.6484 16.2833 10.641 15.0826 10.6496 13.8938C10.6566 12.9288 11.3322 12.1662 12.2408 12.163C13.1435 12.1598 13.8858 12.9222 13.8984 13.8954C13.9122 14.9835 13.9062 16.0314 13.9004 17.0995C13.8985 17.4427 13.9742 17.7177 14.3765 17.7406C14.7426 17.758 14.873 17.5209 14.8772 17.1109C14.8865 16.2234 14.8599 15.3346 14.8967 14.4483C14.9828 13.435 15.8128 12.7289 16.7533 12.9001C17.4854 13.0334 18.0387 13.7482 18.0545 14.615C18.0687 15.3916 18.0611 16.1685 18.0577 16.9453C18.0562 17.2834 18.1298 17.5653 18.5319 17.5928C18.9101 17.6143 19.0211 17.3918 19.0296 16.9674C19.0373 16.5792 19.0245 16.1904 19.0341 15.8023C19.0597 14.7645 19.7415 14.0565 20.7018 14.0617C21.6314 14.0667 22.2927 14.7743 22.3181 15.8075C22.3311 16.3343 22.3223 16.8617 22.3221 17.3887ZM12.4635 5.39578C12.1254 5.44499 11.9571 5.18882 11.9294 4.73118C11.8231 2.96877 10.6249 1.48147 9.01084 1.10845C7.19357 0.688373 5.43922 1.45953 4.60647 3.0341C4.32986 3.57078 4.24026 4.21245 4.11766 4.81679C4.1111 5.14011 3.97213 5.40077 3.60317 5.38863C3.22441 5.37617 3.1491 5.10238 3.15118 4.77382C3.16789 2.16935 5.38362 -9.90927e-07 8.02956 0.0382328C10.6425 0.0756354 12.8672 2.14849 12.9089 4.69926C12.9163 5.15133 12.76 5.38473 12.4635 5.39578Z"
          fill={fill ? fill : '#202452'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_476">
          <Rect
            width="22.026"
            height="32"
            fill="white"
            transform="translate(0.305176)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
