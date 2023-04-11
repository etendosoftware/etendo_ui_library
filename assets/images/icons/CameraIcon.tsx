import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path, G, Defs, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}
export const CameraIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 41}
      height={style?.height || 32}
      viewBox="0 0 41 32"
      fill="none"
      style={style as ViewStyle}
    >
      <G clip-path="url(#clip0_1_469)">
        <Path
          d="M39.6953 8.05302C38.7562 6.37041 37.2692 5.58624 35.3581 5.5745C34.1357 5.56668 32.913 5.56798 31.69 5.57842C31.5825 5.58831 31.4743 5.56645 31.3791 5.51554C31.2838 5.46463 31.2055 5.3869 31.1539 5.29198C30.5341 4.33094 29.8814 3.39103 29.2686 2.42608C28.4078 1.0706 27.2135 0.252778 25.6107 0.0493006C25.4461 0.0219176 25.2798 0.00544717 25.113 -3.43065e-06H16.311C15.5146 -0.00160528 14.7226 0.119826 13.9632 0.359995C13.6991 0.442078 13.4398 0.539282 13.1869 0.651125C12.553 0.939695 12.0158 1.40488 11.6396 1.99095C10.9431 3.06547 10.213 4.11964 9.5266 5.19963C9.34034 5.49624 9.1353 5.57998 8.80034 5.57763C7.45974 5.56746 6.11601 5.53459 4.77932 5.60659C2.24211 5.74355 0.334115 7.77754 0.318463 10.3351C0.297332 13.2628 0.312979 16.1906 0.312979 19.1183C0.312979 21.8112 0.30124 24.505 0.312979 27.1987C0.326283 29.5105 1.83828 31.3786 4.09141 31.874C4.51225 31.9588 4.94093 31.9984 5.37018 31.9922C15.3291 31.9984 25.2878 31.9997 35.2462 31.9961C37.907 31.9961 39.7172 30.5091 40.2455 27.8897C40.2786 27.7142 40.2969 27.5362 40.3003 27.3576V10.7663C40.304 10.0432 40.1849 9.32476 39.9481 8.64154C39.8808 8.43851 39.7962 8.24161 39.6953 8.05302ZM20.3172 28.0877C14.4022 28.1073 9.53522 23.2458 9.53052 17.3136C9.52583 11.3994 14.3357 6.60128 20.2961 6.57467C26.2079 6.54728 31.0804 11.4088 31.0882 17.3418C31.0952 23.2371 26.2533 28.0674 20.3172 28.087V28.0877ZM35.1006 12.2603C34.3392 12.3311 33.5729 12.3311 32.8115 12.2603C32.1072 12.1938 31.6298 11.5497 31.6525 10.8681C31.6608 10.5202 31.7987 10.1879 32.0391 9.93632C32.2795 9.68474 32.6052 9.53196 32.9524 9.50788C32.9939 9.50788 33.0361 9.50162 33.0784 9.49927C33.3726 9.48597 33.6692 9.49927 33.9651 9.49927C34.2898 9.49927 34.6154 9.48127 34.9386 9.50397C35.643 9.55327 36.172 10.1175 36.2198 10.8407C36.2644 11.5294 35.7964 12.1954 35.1006 12.2595V12.2603Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M20.355 11.3564C17.1181 11.2852 14.368 13.9844 14.307 17.2917C14.2475 20.5481 16.9146 23.2395 20.2634 23.2974C23.5198 23.3561 26.2488 20.6804 26.3122 17.3676C26.3748 14.1159 23.7139 11.4308 20.355 11.3564Z"
          fill={fill ? fill : '#202452'}
        />
      </G>
      <Defs>
        <clipPath id="clip0_1_469">
          <Rect
            width="39.9967"
            height="32"
            fill={fill ? fill : 'white'}
            transform="translate(0.308502)"
          />
        </clipPath>
      </Defs>
    </Svg>
  );
};
