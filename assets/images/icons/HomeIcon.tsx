import React from 'react';
import {ImageStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const HomeIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 30}
      height={style?.height || 32}
      viewBox="0 0 30 32"
      fill="none"
      style={style}
    >
      <Path
        d="M29.6233 12.33C29.6141 11.1238 29.089 10.0843 28.097 9.2663C24.8465 6.58207 21.5904 3.90222 18.3287 1.22675C16.3338 -0.409954 13.6231 -0.407877 11.629 1.22675C8.4075 3.87499 5.1888 6.52486 1.97289 9.17634C0.860988 10.0892 0.323732 11.2227 0.325259 12.5771C0.325259 15.7245 0.348153 24.2803 0.31839 27.4278C0.294733 29.9676 2.56204 32.0375 5.36432 31.9995C8.56954 31.9559 11.7748 31.9898 14.98 31.9898C18.1966 31.9898 21.4133 31.9649 24.63 31.9967C27.5086 32.0258 29.5736 30.0133 29.6194 27.5268C29.6767 24.2644 29.6461 15.5923 29.6233 12.33ZM14.9021 29.4313H11.4077V16.8865H18.5622V29.432L14.9021 29.4313ZM26.5523 27.5897C26.5523 28.7012 25.7365 29.4292 24.5163 29.4306H21.4919V15.9986C21.4919 15.5824 21.3097 15.1833 20.9852 14.889C20.6608 14.5946 20.2208 14.4292 19.7619 14.429H10.208C9.74911 14.4292 9.30906 14.5946 8.98464 14.889C8.66021 15.1833 8.47796 15.5824 8.47796 15.9986V29.4313H5.40248C4.04484 29.4313 3.24964 28.7088 3.24888 27.4721C3.24888 24.3703 3.24888 15.8595 3.24888 12.7577C3.24888 12.0553 3.47095 11.5009 4.08834 11.0013C7.24853 8.4483 10.3706 5.85518 13.501 3.27176C14.1878 2.70635 15.4508 2.52849 16.3315 3.2683C19.4459 5.88287 22.6099 8.45245 25.7465 11.0469C26.0014 11.2482 26.2055 11.4968 26.3448 11.7761C26.4842 12.0553 26.5555 12.3585 26.5539 12.665C26.5554 15.8387 26.5592 24.4181 26.5523 27.5897Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
