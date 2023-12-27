import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const CalendarIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 33);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      style={style}>
      <Path
        d="M8.0495 2.47674C8.0495 2.02445 8.042 1.66544 8.0495 1.3106C8.07282 0.537622 8.61841 -0.0162932 9.32558 0.000365899C10.0328 0.017025 10.53 0.554281 10.5475 1.3131C10.5559 1.67127 10.5475 2.03028 10.5475 2.4201H22.8103C22.8103 2.00779 22.7928 1.59797 22.8103 1.19066C22.8254 0.872519 22.9622 0.572341 23.1922 0.352087C23.4223 0.131833 23.7281 0.00831623 24.0466 0.00703369C24.3651 0.00575114 24.672 0.1268 24.9038 0.345194C25.1356 0.563589 25.2748 0.862656 25.2925 1.18066C25.31 1.41556 25.3 1.65212 25.3016 1.88784C25.3016 2.05443 25.3016 2.21686 25.3016 2.45259C25.6623 2.45259 25.9888 2.45259 26.3154 2.45259C28.7817 2.47674 30.6609 3.5296 31.9045 5.67029C32.4041 6.52726 32.6661 7.50202 32.6633 8.49401C32.6716 14.3122 32.6883 20.1304 32.6591 25.9478C32.6425 29.2229 29.9262 31.9584 26.6502 31.975C20.0005 32.0083 13.351 32.0083 6.70178 31.975C3.4266 31.9592 0.704506 29.2263 0.687847 25.9511C0.658971 20.1343 0.660082 14.3161 0.691179 8.49651C0.707005 5.31379 3.27334 2.67249 6.45106 2.47924C6.96083 2.45092 7.47309 2.47674 8.0495 2.47674ZM3.18088 12.3514V12.7679C3.18088 17.0715 3.18088 21.3751 3.18088 25.6787C3.18088 27.8885 4.77266 29.4836 6.99165 29.4853C13.447 29.4914 19.9022 29.4914 26.357 29.4853C28.5968 29.4853 30.1694 27.891 30.1711 25.6412C30.1711 21.3654 30.1711 17.0896 30.1711 12.8137V12.3523L3.18088 12.3514ZM3.20753 9.79925H30.1469C30.5718 5.99764 27.883 4.57162 25.3058 5.02975C25.3058 5.17302 25.3058 5.32295 25.3058 5.47288C25.3058 6.12592 25.3241 6.77895 25.2967 7.43116C25.2938 7.62308 25.2461 7.81168 25.1575 7.98194C25.0689 8.1522 24.9417 8.29941 24.7862 8.41185C24.6306 8.52429 24.451 8.59886 24.2615 8.62961C24.072 8.66036 23.878 8.64644 23.6949 8.58897C23.156 8.43404 22.8153 7.96092 22.8086 7.32371C22.7995 6.54989 22.8086 5.77608 22.8086 4.97977H10.5492C10.5492 5.14636 10.5492 5.29963 10.5492 5.44789C10.5492 6.11426 10.5634 6.78062 10.54 7.44698C10.5273 7.76501 10.3929 8.06599 10.1646 8.28773C9.9363 8.50948 9.63152 8.63504 9.31326 8.63846C8.99501 8.64188 8.6876 8.52291 8.45457 8.30612C8.22154 8.08934 8.0807 7.79131 8.06116 7.47364C8.03117 6.94804 8.05033 6.41912 8.04867 5.89102C8.04867 5.59199 8.04867 5.29213 8.04867 5.00393C5.06752 4.60328 2.81438 6.31 3.20753 9.79925Z"
        fill={fill}
      />
      <Path
        d="M9.30304 18.492C8.90073 18.492 8.49841 18.5003 8.09693 18.492C7.3531 18.4711 6.82334 17.9405 6.82751 17.235C6.83167 16.5295 7.36976 16.0056 8.11608 15.9931C8.90572 15.9814 9.69536 15.9814 10.485 15.9931C11.2347 16.0031 11.7702 16.5278 11.7752 17.2292C11.7802 17.9522 11.2413 18.4745 10.4667 18.4895C10.081 18.4995 9.69036 18.492 9.30304 18.492Z"
        fill={fill}
      />
      <Path
        d="M24.0594 18.492C23.6429 18.492 23.2265 18.5045 22.81 18.492C22.0928 18.4645 21.5747 17.9289 21.5772 17.2425C21.5758 17.0784 21.6071 16.9156 21.6693 16.7637C21.7315 16.6118 21.8234 16.4738 21.9396 16.3579C22.0558 16.2419 22.1939 16.1503 22.346 16.0884C22.498 16.0264 22.6608 15.9955 22.825 15.9972C23.6424 15.9806 24.4598 15.9806 25.2772 15.9972C25.9977 16.0114 26.5216 16.542 26.5266 17.2292C26.5333 17.9372 26.0068 18.4703 25.2647 18.492C24.8632 18.5028 24.4609 18.492 24.0594 18.492Z"
        fill={fill}
      />
      <Path
        d="M16.6562 25.8611C16.2397 25.8611 15.8232 25.8753 15.4068 25.857C15.0842 25.8514 14.7766 25.7204 14.5489 25.4918C14.3213 25.2633 14.1916 24.955 14.1873 24.6325C14.1797 24.3091 14.2998 23.9958 14.5217 23.7605C14.7436 23.5252 15.0494 23.3869 15.3726 23.3756C16.2297 23.3456 17.0902 23.3464 17.9481 23.3756C18.2713 23.383 18.5785 23.5181 18.8025 23.7512C19.0264 23.9844 19.149 24.2967 19.1434 24.62C19.1434 25.3064 18.622 25.8328 17.8998 25.8603C17.4875 25.8736 17.0718 25.8611 16.6562 25.8611Z"
        fill={fill}
      />
      <Path
        d="M16.678 18.4919C16.2616 18.4919 15.8451 18.5044 15.4286 18.4919C14.7206 18.4661 14.1858 17.918 14.1875 17.2425C14.1893 16.9123 14.3217 16.5962 14.5558 16.3633C14.7899 16.1305 15.1067 15.9997 15.4369 15.9997C16.2532 15.9823 17.0704 15.9839 17.8867 15.9997C18.6038 16.0122 19.1361 16.5437 19.1452 17.2275C19.1586 17.9239 18.618 18.4719 17.8817 18.4936C17.481 18.5028 17.0779 18.4919 16.678 18.4919Z"
        fill={fill}
      />
      <Path
        d="M24.042 25.8603C23.6255 25.8603 23.209 25.8745 22.7925 25.8603C22.4703 25.8555 22.1627 25.7248 21.9356 25.4961C21.7084 25.2675 21.5798 24.959 21.5773 24.6367C21.5671 24.3137 21.6856 23.9999 21.9065 23.7641C22.1275 23.5283 22.4329 23.3898 22.7559 23.3789C23.6138 23.3481 24.4743 23.3489 25.3322 23.3789C26.0444 23.4022 26.5417 23.9686 26.5233 24.6633C26.5067 25.3297 25.9911 25.8386 25.2856 25.8645C24.8691 25.8786 24.4526 25.8645 24.0361 25.8645L24.042 25.8603Z"
        fill={fill}
      />
      <Path
        d="M9.27982 25.8603C8.86334 25.8603 8.44686 25.8753 8.03039 25.8603C7.70883 25.8512 7.40333 25.7178 7.17819 25.488C6.95305 25.2583 6.82585 24.9501 6.82337 24.6284C6.82089 24.3067 6.94332 23.9966 7.16488 23.7634C7.38644 23.5302 7.68985 23.3921 8.01123 23.3781C8.86917 23.3497 9.72767 23.3497 10.5867 23.3781C10.9062 23.3949 11.2068 23.5344 11.426 23.7675C11.6452 24.0006 11.7659 24.3092 11.7631 24.6291C11.7604 24.949 11.6342 25.2555 11.411 25.4847C11.1878 25.7139 10.8848 25.8482 10.5651 25.8594C10.1394 25.8753 9.70962 25.8603 9.27982 25.8603Z"
        fill={fill}
      />
    </Svg>
  );
};
