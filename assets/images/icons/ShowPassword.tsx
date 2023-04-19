import React from 'react';
import {ImageStyle} from 'react-native';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const ShowPassword = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 40}
      height={style?.height || 26}
      viewBox="0 0 40 26"
      fill="none"
      style={style}
    >
      <G clip-path="url(#clip0_237_229)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.17201 19.6764C9.38878 23.4234 14.2811 25.4881 19.7126 25.5306C22.1912 25.5217 24.3656 25.2152 26.4795 24.5285C32.1951 22.6449 36.4521 18.9359 39.6913 13.9563C39.8946 13.6853 40.0045 13.3556 40.0045 13.0168C40.0045 12.678 39.8946 12.3483 39.6913 12.0773C37.5259 8.68371 34.799 5.84942 31.3518 3.76229C25.4304 0.176358 19.1511 -0.508167 12.6369 1.83846C7.31283 3.75334 3.35332 7.39967 0.310989 12.0974C0.112342 12.3645 0.00506592 12.6884 0.00506592 13.0213C0.00506592 13.3541 0.112342 13.6781 0.310989 13.9452C1.65277 16.0754 3.28934 18.0049 5.17201 19.6764ZM26.5444 21.8373C24.3866 22.6464 22.0976 23.0492 19.7931 23.0252C15.2922 22.9961 11.1806 21.3407 7.57008 18.3812C5.7855 16.9153 4.21415 15.2077 2.90144 13.3076C2.89559 13.2992 2.88976 13.2909 2.88399 13.2826C2.77932 13.1332 2.69275 13.0096 2.84327 12.7976C5.62612 8.84478 9.10915 5.74204 13.7241 4.12245C19.5001 2.09571 25.0143 2.80932 30.1952 6.03509C32.9325 7.77145 35.2844 10.051 37.1053 12.7327C37.1191 12.7525 37.1336 12.7717 37.1481 12.7908C37.2351 12.9056 37.3182 13.0152 37.1859 13.2069C34.459 17.0949 31.0184 20.1171 26.5444 21.8373ZM13.7619 8.82896C12.9344 10.0632 12.4915 11.5151 12.4893 13.0011C12.4881 14.9917 13.2763 16.9015 14.6811 18.3118C16.086 19.7221 17.9927 20.5177 19.9832 20.5242C21.4692 20.5277 22.9229 20.0905 24.1603 19.2677C25.3978 18.4449 26.3634 17.2736 26.935 15.902C27.5066 14.5303 27.6586 13.02 27.3717 11.5619C27.0847 10.1039 26.3718 8.76373 25.3231 7.71094C24.2744 6.65815 22.937 5.94005 21.4801 5.64749C20.0232 5.35492 18.5122 5.50104 17.1384 6.06735C15.7645 6.63366 14.5895 7.59473 13.7619 8.82896ZM24.1729 10.2334C24.7234 11.0573 25.017 12.026 25.0165 13.0168H25.0054C25.0019 14.339 24.4766 15.6065 23.5437 16.5435C22.6108 17.4806 21.3457 18.0116 20.0235 18.021C19.0327 18.0236 18.0633 17.7322 17.2382 17.1836C16.4131 16.635 15.7693 15.8539 15.3884 14.9392C15.0075 14.0245 14.9065 13.0174 15.0984 12.0453C15.2902 11.0732 15.7662 10.1799 16.466 9.47846C17.1659 8.77704 18.0581 8.29907 19.0298 8.10506C20.0015 7.91105 21.0089 8.00972 21.9244 8.38859C22.84 8.76746 23.6225 9.40949 24.1729 10.2334Z"
          fill={fill ? fill : '#202452'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_237_229">
          <Rect
            width="40"
            height="25.0612"
            fill={fill ? fill : '#202452'}
            transform="translate(0 0.469391)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
