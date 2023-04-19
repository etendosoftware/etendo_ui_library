import React from 'react';
import {ImageStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const ShoppingCartIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 33}
      height={style?.height || 32}
      viewBox="0 0 33 32"
      fill="none"
      style={style}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.301 8.75854C31.5979 11.7099 30.8942 14.6756 30.2111 17.6173C29.8351 19.245 28.6335 20.2582 26.9441 20.2594C21.0923 20.2637 15.2405 20.2611 9.38884 20.2612C8.49159 20.2613 7.98797 20.635 7.97463 21.3099C7.96101 21.997 8.48171 22.3944 9.39809 22.3944C15.2054 22.3945 21.0127 22.3938 26.8201 22.3944C26.9829 22.3944 27.148 22.3842 27.3081 22.4647C27.8537 22.485 28.2484 22.9491 28.2377 23.4834C28.227 24.0203 27.8169 24.4617 27.2677 24.5235C27.1798 24.5334 27.0902 24.53 27.0013 24.53C21.0311 24.5302 15.0608 24.535 9.09058 24.5272C7.21752 24.5248 5.80687 23.0915 5.8373 21.2605C5.86221 19.7608 6.96046 18.4774 8.4479 18.2082C8.53341 18.1927 8.61722 18.1675 8.75692 18.1653C8.32039 16.2725 7.89561 14.4588 7.46941 12.6453C6.69397 9.34606 5.91524 6.04748 5.14389 2.74712C4.99744 2.18229 5.01025 2.15204 4.35342 2.15204C3.47939 2.15115 2.60527 2.17962 1.73125 2.14314C1.0019 2.1136 0.510654 1.68517 0.545978 1.05743C0.519284 0.465911 0.992289 0.0432671 1.71496 0.0201329C3.03343 -0.0216866 4.3519 0.0139045 5.74494 0.0183534C6.38495 0.0379284 6.75127 0.244712 6.90654 0.943187C7.14331 1.89071 7.37999 2.83939 7.57022 3.79679C7.64354 4.21988 7.78324 4.25974 8.14965 4.25912C15.1569 4.24719 22.1642 4.26704 29.1715 4.26793C30.6199 4.27148 31.7574 4.99763 32.282 6.27259C32.6224 7.13123 32.4996 7.925 32.301 8.75854ZM28.9716 6.40606C22.2885 6.40339 15.4676 6.40428 8.71554 6.40428C8.55503 6.40428 8.39451 6.40428 8.20632 6.40428C8.23658 6.54148 8.25517 6.70057 8.28169 6.76971C8.67301 8.44044 9.06549 10.1109 9.45753 11.7815C9.92395 13.7688 10.3962 15.7549 10.8499 17.7451C10.9884 18.0506 11.0464 18.1524 11.3665 18.1564C11.8149 18.1031 12.2753 18.1249 12.7343 18.1249C17.443 18.1249 22.1517 18.1255 26.8603 18.1241C27.578 18.1238 27.9482 17.8592 28.0978 17.227C28.8263 14.1463 29.5544 11.0656 30.2727 7.98256C30.5232 6.907 30.0885 6.40606 28.9716 6.40606ZM12.291 25.5969C14.0431 25.6188 15.5058 27.0741 15.4376 28.8395C15.42 30.5969 13.9768 32.0103 12.2106 31.9999C10.4582 31.9897 9.02545 30.536 9.03898 28.7819C9.05268 27.0043 10.5124 25.5747 12.291 25.5969ZM12.2296 29.8615C12.8183 29.8674 13.3081 29.3763 13.3016 28.7865C13.2954 28.2194 12.8142 27.7385 12.2723 27.7345C11.6635 27.7304 11.1678 28.2279 11.1756 28.8551C11.2224 29.3829 11.6579 29.8556 12.2296 29.8615ZM23.9874 25.5968C25.7405 25.5991 27.1725 27.0405 27.1715 28.8019C27.1706 30.5637 25.7451 31.9927 23.982 31.9992C22.2244 32.0058 20.7776 30.5723 20.7729 28.8195C20.7681 27.0396 22.2094 25.5946 23.9874 25.5968ZM23.9514 29.8614C24.5397 29.8747 25.0347 29.3895 25.0355 28.7987C25.0364 28.2316 24.5616 27.8052 24.0281 27.7345C23.4105 27.7227 22.9095 28.2141 22.9095 28.7997C22.9094 29.3694 23.3796 29.8485 23.9514 29.8614Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
