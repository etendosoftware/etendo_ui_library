import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const UserIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width ?? 33}
      height={style?.height ?? 32}
      viewBox="0 0 33 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.1227 16.0018C32.1247 13.6679 31.617 11.3352 30.5974 9.18206C28.2358 4.19521 23.798 0.968211 18.6162 0.177114C18.6162 0.171444 18.6162 0.165859 18.6162 0.226218C17.7787 0.0422211 16.949 -0.0138869 16.1315 0.00278708C15.314 -0.0138869 14.4843 0.0422211 13.6468 0.226218C13.6468 0.165859 13.6468 0.171444 13.6468 0.177114C8.49644 0.968211 4.02723 4.19521 1.66561 9.18206C0.646079 11.3349 0.138356 13.6674 0.140274 16.0732C0.132771 21.4485 2.93667 26.8479 8.12452 29.8491C10.6057 31.2603 13.2268 31.961 15.9422 31.9982C15.9012 31.9985 15.9149 31.9987 15.9287 31.9988C15.9963 31.9996 16.0639 32.0001 16.1315 32C16.1991 32.0001 16.2667 31.9996 16.3343 31.9988C16.348 31.9987 16.3618 31.9985 16.3756 31.9982C19.0361 31.961 21.7113 31.2603 24.17 29.8491C29.326 26.8496 32.1385 21.449 32.1227 16.0018ZM16.1315 2.47162C22.2085 2.49596 26.8401 6.43394 28.6633 11.0701C30.7087 16.149 29.1868 21.6941 26.2655 24.7921C25.3726 21.467 23.3956 19.1158 20.3542 17.6498C22.3096 15.7369 22.7063 13.1962 22.0061 11.1385C21.99 11.0309 22.0265 10.9814 21.9559 10.9323C21.9479 10.9317 21.9398 10.8879 21.9316 10.8657C21.9026 10.7866 21.8719 10.7083 21.8396 10.631C21.8369 10.6244 21.834 10.6179 21.8313 10.6114C21.7986 10.5338 21.7643 10.4571 21.7283 10.3813C21.7168 10.3569 21.7051 10.3327 21.6933 10.3086C21.6709 10.263 21.6481 10.2175 21.6244 10.1726C21.3371 9.61609 20.9836 9.10553 20.5265 8.66617C19.7364 7.88099 18.781 7.34809 17.7682 7.08923C17.7452 7.06639 17.7797 7.06088 17.6988 7.0548C17.6746 7.03854 17.5739 7.02262 17.5111 7.00844C17.5004 6.99877 17.4265 7.00086 17.4037 6.9816C17.3382 6.97218 17.2924 6.96259 17.2463 6.95417C17.194 6.94467 17.1416 6.9365 17.0892 6.92833C17.0735 6.92241 17.0128 6.91607 16.9745 6.95584C16.9189 6.90323 16.8632 6.89706 16.8074 6.89098C16.7706 6.88697 16.7339 6.88264 16.697 6.87922C16.6427 6.8743 16.5883 6.87072 16.5339 6.86722C16.4944 6.86463 16.4548 6.8618 16.4153 6.85996C16.3653 6.85771 16.3152 6.85671 16.2652 6.85563C16.2723 6.85463 16.1761 6.85354 16.1315 6.85354C16.0869 6.85354 16.0423 6.85463 15.9978 6.85563C15.9477 6.85671 15.8977 6.85771 15.8477 6.85996C15.8081 6.8618 15.7686 6.86463 15.729 6.86722C15.6747 6.87072 15.6203 6.8743 15.566 6.87922C15.5291 6.88264 15.4923 6.88697 15.4555 6.89098C15.3998 6.89706 15.3441 6.90323 15.2885 6.95584C15.2501 6.91607 15.212 6.92241 15.1736 6.92833C15.1213 6.9365 15.0689 6.94467 15.0167 6.95417C15.0276 6.96259 14.9247 6.97218 14.8787 6.98168C14.8364 7.00086 14.7941 6.99877 14.7519 7.00844C14.6891 7.0227 14.6265 7.03862 14.5641 7.0548C14.541 7.06088 14.5178 7.06639 14.4948 7.08923C13.482 7.34809 12.5265 7.88099 11.7364 8.66617C11.2944 9.10553 10.9258 9.61617 10.6385 10.1726C10.6149 10.2175 10.5921 10.263 10.5697 10.3085C10.5579 10.3327 10.5874 10.357 10.5346 10.3814C10.4986 10.457 10.484 10.5337 10.4318 10.6112C10.429 10.6179 10.4261 10.6245 10.4233 10.6312C10.391 10.7084 10.3604 10.7865 10.3314 10.8656C10.3232 10.8878 10.315 10.9326 10.307 10.9324C10.2896 10.9814 10.273 11.0309 10.2569 11.1377C9.55665 13.1961 9.95333 15.7369 11.9088 17.6498C8.86743 19.1158 6.8904 21.467 5.99751 24.7921C3.07614 21.6941 1.55431 16.149 3.59971 11.0701C5.42284 6.43394 10.0545 2.49596 16.1315 2.47162ZM23.7507 27.0963C22.9608 27.6448 22.1933 28.0963 21.2895 28.4536C20.2672 28.8695 19.1847 29.2364 18.0839 29.4107C18.0626 29.3432 18.0415 29.3462 18.0202 29.3492C17.9432 29.3606 17.866 29.3699 17.7889 29.3799C17.2459 29.4474 16.6935 29.4841 16.1315 29.4901C15.5695 29.4841 15.017 29.4474 14.474 29.3799C14.3969 29.3699 14.3197 29.3606 14.2428 29.3492C14.2898 29.3462 14.2003 29.3432 14.1791 29.4107C13.0783 29.2364 11.9958 28.8695 10.9735 28.4536C10.123 28.0964 9.36599 27.6449 8.51228 27.0963C8.38897 26.9572 8.32053 26.8088 8.2901 26.6446C8.43941 23.5575 10.6272 20.8211 13.5184 19.7351C13.5232 19.7334 13.5281 19.7317 13.5329 19.7299C13.7242 19.6781 13.9186 19.6038 14.1157 19.553C14.7939 19.3782 15.5153 19.2948 16.1315 19.2936C16.7933 19.2948 17.5021 19.3782 18.1472 19.553C18.3443 19.6038 18.5387 19.6781 18.7301 19.7299C18.7349 19.7317 18.7397 19.7334 18.7445 19.7351C21.6522 20.8211 23.8235 23.5575 24.0141 26.6446C23.9425 26.8088 23.8739 26.9572 23.7507 27.0963ZM19.8116 13.0557C19.8154 15.1065 18.1699 16.7708 16.1315 16.779C14.093 16.7708 12.4476 15.1065 12.4514 13.0557C12.4552 11.0027 14.0929 9.35706 16.1315 9.35322C18.1701 9.35706 19.8798 11.0027 19.8116 13.0557Z"
        fill={fill}
      />
    </Svg>
  );
};
