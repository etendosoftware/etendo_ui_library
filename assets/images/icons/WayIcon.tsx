import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}
export const WayIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 40}
      height={style?.height || 40}
      viewBox="0 0 40 40"
      fill="none"
      style={style as ViewStyle}
    >
      <G clip-path="url(#clip0_242_145)">
        <Path
          d="M24.5314 29.4574C24.4275 29.4536 24.3239 29.4708 24.2268 29.5078C24.1297 29.5448 24.041 29.601 23.966 29.6729C23.8909 29.7449 23.8312 29.8312 23.7902 29.9267C23.7491 30.0222 23.7277 30.125 23.7272 30.2289C23.7267 30.3328 23.7471 30.4358 23.7871 30.5318C23.8271 30.6277 23.8861 30.7146 23.9603 30.7873C24.0346 30.86 24.1227 30.917 24.2195 30.955C24.3162 30.993 24.4196 31.0112 24.5235 31.0085C24.725 31.0032 24.9166 30.9197 25.0576 30.7756C25.1986 30.6316 25.278 30.4383 25.279 30.2367C25.28 30.0352 25.2026 29.8411 25.063 29.6957C24.9235 29.5502 24.7328 29.4648 24.5314 29.4574Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M20.1538 22.0013C20.3569 22.0001 20.5516 21.9201 20.6968 21.7781C20.8421 21.6361 20.9264 21.4432 20.9321 21.2402C20.9353 21.1391 20.9183 21.0385 20.8821 20.944C20.8459 20.8496 20.7911 20.7634 20.7211 20.6905C20.6511 20.6175 20.5672 20.5593 20.4743 20.5193C20.3815 20.4792 20.2816 20.4581 20.1804 20.4572C19.9771 20.4553 19.781 20.5333 19.6346 20.6745C19.4882 20.8157 19.403 21.0087 19.3975 21.212C19.3981 21.4155 19.477 21.611 19.6178 21.7579C19.7586 21.9049 19.9505 21.992 20.1538 22.0013Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M21.6415 34.268L22.8441 33.0363C22.9219 32.9675 22.9848 32.8835 23.0289 32.7894C23.0731 32.6954 23.0975 32.5933 23.1007 32.4895C23.104 32.3856 23.0859 32.2822 23.0477 32.1856C23.0095 32.089 22.9519 32.0012 22.8785 31.9277C22.8079 31.857 22.7239 31.8009 22.6316 31.7626C22.5392 31.7243 22.4402 31.7046 22.3402 31.7046C22.2403 31.7046 22.1413 31.7243 22.0489 31.7626C21.9566 31.8009 21.8726 31.857 21.802 31.9277L19.955 33.7739C19.3441 33.6623 18.7243 33.6064 18.1032 33.6071C14.8931 33.6071 12.2897 35.0384 12.2897 36.804C12.2897 38.5695 14.8923 40 18.1032 40C21.3142 40 23.9167 38.5695 23.9167 36.804C23.9167 35.7705 23.0242 34.8528 21.6415 34.268ZM18.1032 38.3652C15.7645 38.3652 13.869 37.6668 13.869 36.8055C13.869 35.9443 15.7622 35.2443 18.1032 35.2443C20.4443 35.2443 22.3391 35.9427 22.3391 36.804C22.3391 37.6652 20.442 38.3652 18.1032 38.3652Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M30.9517 20.4353C28.9888 20.4353 27.2553 20.9701 26.2022 21.7891L23.501 21.1502C23.402 21.1183 23.2976 21.1071 23.1941 21.1172C23.0907 21.1274 22.9904 21.1586 22.8994 21.209C22.8085 21.2594 22.7289 21.3279 22.6655 21.4103C22.6021 21.4927 22.5563 21.5873 22.5309 21.6881C22.4816 21.8839 22.512 22.0913 22.6155 22.2647C22.719 22.4381 22.8871 22.5633 23.0829 22.6128L25.2032 23.1483C25.1598 23.3054 25.1377 23.4676 25.1374 23.6306C25.1374 24.6641 26.03 25.5817 27.4127 26.1666L26.21 27.4037C26.132 27.4707 26.0683 27.5529 26.0229 27.6452C25.9775 27.7375 25.9512 27.8381 25.9457 27.9409C25.9402 28.0436 25.9556 28.1464 25.9909 28.243C26.0262 28.3397 26.0807 28.4282 26.1512 28.5032C26.2216 28.5782 26.3065 28.6381 26.4008 28.6794C26.495 28.7207 26.5966 28.7424 26.6995 28.7434C26.8024 28.7443 26.9044 28.7244 26.9994 28.6848C27.0944 28.6453 27.1804 28.5869 27.2522 28.5132L29.0992 26.6661C29.7105 26.7765 30.3305 26.831 30.9517 26.829C34.1618 26.829 36.7652 25.3977 36.7652 23.6322C36.7652 21.8666 34.1618 20.4353 30.9517 20.4353ZM30.9517 25.191C28.613 25.191 26.7174 24.4926 26.7174 23.6314C26.7174 22.7701 28.613 22.0717 30.9517 22.0717C33.2904 22.0717 35.1859 22.7701 35.1859 23.6314C35.1859 24.4926 33.2888 25.1918 30.9517 25.1918V25.191Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M12.5787 6.40779C12.6296 4.65395 11.1881 3.17259 9.40218 3.14205C7.67966 3.1123 6.20769 4.56704 6.17559 6.32949C6.14427 8.04731 7.56065 9.49423 9.32466 9.54512C11.0738 9.59601 12.527 8.19529 12.5787 6.40779ZM7.73682 6.35924C7.74121 5.92466 7.91468 5.50887 8.22045 5.20003C8.52622 4.89119 8.94026 4.71357 9.37477 4.70484C9.80936 4.70484 10.2263 4.87688 10.5344 5.18338C10.8425 5.48987 11.0167 5.90587 11.019 6.34045C11.0217 6.55554 10.9816 6.76902 10.9011 6.9685C10.8206 7.16797 10.7013 7.34946 10.5501 7.50244C10.3989 7.65541 10.2187 7.77682 10.0202 7.8596C9.82168 7.94238 9.60867 7.9849 9.39357 7.98467C8.95899 7.98658 8.54122 7.81693 8.23101 7.51258C7.9208 7.20823 7.74321 6.79377 7.73682 6.35924Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M16.8936 21.3577C16.9909 21.3895 17.0937 21.4015 17.1957 21.3927C17.2977 21.3839 17.3969 21.3546 17.4874 21.3066C17.5778 21.2586 17.6577 21.1928 17.7221 21.1131C17.7865 21.0335 17.8342 20.9417 17.8623 20.8433C17.8904 20.7448 17.8983 20.6416 17.8856 20.54C17.8729 20.4384 17.8398 20.3404 17.7883 20.2518C17.7369 20.1633 17.668 20.0861 17.586 20.0248C17.504 19.9635 17.4104 19.9194 17.3109 19.8951L15.1906 19.3588C15.234 19.2017 15.2561 19.0394 15.2564 18.8765C15.2564 17.5525 13.7923 16.4164 11.7057 15.931L11.7331 15.8754C11.7879 15.7634 11.8442 15.646 11.9022 15.5301C12.9709 13.3895 14.0459 11.2512 15.1068 9.10978C17.0729 5.13311 14.2746 0.277962 9.84377 0.014104C7.43068 -0.129178 5.47406 0.810377 4.12814 2.81006C2.75874 4.83872 2.65069 7.01927 3.72414 9.22331C4.74199 11.3162 5.79899 13.3902 6.83798 15.4729C6.90688 15.6107 6.96952 15.7517 7.0486 15.9216L7.06817 15.9591C5.04186 16.4587 3.62627 17.576 3.62627 18.8765C3.62627 20.642 6.22883 22.0725 9.43976 22.0725C11.4027 22.0725 13.1361 21.5378 14.1892 20.7188L16.8936 21.3577ZM5.10607 8.49985C4.73892 7.77045 4.56441 6.95928 4.59911 6.14343C4.6338 5.32757 4.87656 4.53415 5.3043 3.83855C5.73204 3.14295 6.33056 2.56829 7.04298 2.16919C7.75539 1.77008 8.55804 1.55979 9.37463 1.5583C10.1912 1.55681 10.9946 1.76416 11.7085 2.16066C12.4224 2.55715 13.023 3.12962 13.4533 3.82364C13.8835 4.51767 14.1292 5.31021 14.1669 6.12593C14.2046 6.94165 14.033 7.75345 13.6685 8.48419C12.4717 10.8905 11.2727 13.2952 10.0716 15.6984L9.56347 16.7163C9.51728 16.8087 9.4656 16.8987 9.38026 17.0576L9.09369 16.4869L8.70221 15.7039C7.50324 13.3044 6.30452 10.903 5.10607 8.49985ZM9.4429 20.4353C7.10419 20.4353 5.20863 19.7369 5.20863 18.8757C5.20863 18.2258 6.28756 17.6691 7.82138 17.4342L7.91534 17.6182C8.15022 18.1115 8.40156 18.5946 8.64271 19.0839C8.79147 19.3862 9.01618 19.5874 9.36382 19.596C9.73338 19.6054 9.96826 19.4018 10.1249 19.0855C10.3668 18.5969 10.5993 18.1029 10.8624 17.6253L10.9634 17.4209C12.5497 17.6464 13.6756 18.2125 13.6756 18.8765C13.6772 19.7377 11.7816 20.4353 9.4429 20.4353Z"
          fill={fill ? fill : '#202452'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_242_145">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
