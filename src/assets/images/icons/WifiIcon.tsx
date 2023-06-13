import React from 'react';
import {ImageStyle, ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const WifiIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 46}
      height={style?.height || 32}
      viewBox="0 0 46 32"
      fill="none"
      style={style}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.0683 13.4158C35.9369 8.50596 29.803 5.86644 22.6118 5.86444C15.4191 5.86255 9.28304 8.49699 4.1491 13.4049C2.78673 12.0352 1.43698 10.6781 0.0859375 9.31961C11.7999 -2.80791 32.6083 -3.41685 45.1836 9.36424C43.8289 10.698 42.5227 12.0321 41.0683 13.4158ZM36.9584 17.6266C35.5893 18.9979 34.2448 20.3446 32.8629 21.7288C30.0115 18.9745 26.5731 17.5148 22.5793 17.5204C18.6078 17.526 15.1887 18.9834 12.3525 21.7194C10.977 20.3373 9.63544 18.9893 8.29243 17.6398C15.1084 10.2505 28.5939 9.1404 36.9584 17.6266ZM28.787 25.9455C27.7592 26.956 26.7249 27.964 25.701 28.9823C24.6846 29.9929 23.6786 31.014 22.6983 32C20.646 29.9311 18.6182 27.8868 16.5575 25.8093C19.6156 22.5033 25.4493 22.495 28.787 25.9455Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
