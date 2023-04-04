import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}

export const TracingIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 40}
      height={style?.height || 40}
      viewBox="0 0 40 40"
      fill="none"
      style={style as ViewStyle}
    >
      <G clip-path="url(#clip0_241_133)">
        <Path
          d="M39.9214 28.2215C39.9172 27.9714 39.8911 27.7221 39.8436 27.4765C39.4987 25.7787 38.2151 24.6741 36.4846 24.5387C36.4365 24.5343 36.3897 24.5201 36.3473 24.4969C36.3048 24.4738 36.2676 24.4422 36.2379 24.404C35.5746 23.3056 34.9441 22.1855 34.2622 21.1011C33.8372 20.4247 33.3857 19.7521 32.861 19.155C32.4259 18.6623 31.8841 18.2528 31.3501 17.8597C30.3629 17.1384 29.2133 16.6713 28.0028 16.4998C27.7457 16.4692 27.4863 16.4639 27.2282 16.4842C27.2282 15.9393 27.2282 15.3827 27.222 14.2703C27.222 14.0952 27.222 13.906 27.222 13.7013C27.2218 13.547 27.1875 13.3947 27.1216 13.2552C27.0491 13.1049 26.943 12.9732 26.8115 12.8704C26.6801 12.7676 26.5268 12.6963 26.3634 12.6621L26.2933 12.6512L26.1587 12.6364H23.0488C23.0527 12.6208 23.0558 12.6052 23.0597 12.5897C23.0636 12.5741 23.0597 12.5757 23.0652 12.5687C23.0799 12.5103 23.0924 12.4566 23.1025 12.406C24.3138 7.03475 21.7605 3.01178 18.2459 1.23305C14.3856 -0.720044 10.572 -0.372861 7.23486 2.41861C4.04171 5.09021 3.23524 8.64067 4.16859 12.6356H3.15662C2.48457 12.6356 1.812 12.6356 1.13891 12.6356C0.527838 12.6325 0.0280816 13.0957 0.0265248 13.7005C0.0197783 16.8008 0.0164051 19.9 0.0164051 22.9982C0.0164051 27.0569 0.0343091 31.1149 5.79064e-05 35.1729C-0.00694803 36.0168 0.622808 36.476 1.3234 36.4682C2.15244 36.4597 2.98147 36.4682 3.8035 36.4682C4.39356 38.8355 6.12947 39.7953 7.61785 39.9619C8.64149 40.0771 9.65346 39.9517 10.5549 39.417C11.6813 38.7514 12.3881 37.7511 12.6567 36.4776H27.8619C28.4263 38.8471 30.2968 39.9027 32.018 39.9805C34.263 40.0903 36.1717 38.774 36.7267 36.4589H37.344C37.7621 36.4589 38.1809 36.4589 38.5996 36.4628C38.9154 36.4711 39.2243 36.3699 39.4738 36.1763C39.6442 36.0399 39.7724 35.858 39.8436 35.6517C39.8976 35.496 39.9239 35.3322 39.9214 35.1675C39.8872 31.1149 39.923 32.2795 39.9214 28.2215ZM6.70318 7.24882C7.09629 6.26332 7.62874 5.37123 8.39083 4.64183C9.7531 3.33639 11.3676 2.58831 13.2856 2.51825C13.3845 2.51825 13.4818 2.51358 13.5799 2.51358H13.6406C13.8282 2.51358 14.015 2.52059 14.2003 2.53616C15.6122 2.6312 16.964 3.14385 18.0839 4.00896C19.6719 5.21788 20.5749 6.8417 20.9556 8.77533C20.993 8.96216 20.9665 9.16455 20.9844 9.35293C21.0015 9.52964 21.0389 9.70479 21.0568 9.81533C21.0381 10.0566 21.0101 10.2917 20.9789 10.5245C20.9182 12.3102 20.4177 13.6935 19.7031 15.0013C19.1357 16.031 18.4696 17.0032 17.7142 17.9041C17.4589 18.2616 17.1934 18.6122 16.9178 18.9557C16.1503 19.9124 15.3392 20.8536 14.1933 21.4086C14.0329 21.4882 13.8588 21.5365 13.6803 21.551C13.6516 21.5542 13.6228 21.5557 13.5939 21.5557C13.3852 21.5569 13.1788 21.5114 12.9898 21.4226C12.2777 21.1013 11.6519 20.6157 11.1636 20.0058C10.5627 19.2586 9.89711 18.5525 9.37322 17.7569C8.66986 16.9019 8.04681 15.9839 7.51198 15.0145C6.80204 13.72 6.26648 12.3484 6.23612 10.8187C6.23612 10.702 6.23612 10.5852 6.23612 10.4708C6.12431 9.37472 6.28474 8.26801 6.70318 7.24882ZM8.21335 37.5985C6.95929 37.5635 6.2369 36.6348 6.17462 35.6392C6.08899 34.2847 7.22551 33.3039 8.48191 33.4207C9.39891 33.504 10.3961 34.484 10.2996 35.5349C10.3743 36.7181 9.26969 37.6312 8.21335 37.5985ZM24.8252 34.0177H12.5181C11.8276 32.1035 10.3315 31.1562 8.67574 31.0239C6.02906 30.8129 4.4932 32.4118 3.96153 34.0348H2.38986V15.0581H5.05056C5.23038 15.4318 5.42577 15.807 5.62972 16.1759C6.35175 17.5974 7.21887 18.9403 8.21724 20.1833L8.43521 20.4605V20.4643C8.76286 20.9016 9.12216 21.3143 9.51023 21.699C10.5004 22.6331 11.5116 23.5781 12.8964 23.9027C13.3381 24.0061 13.7964 24.0176 14.2427 23.9365C14.689 23.8553 15.1139 23.6832 15.491 23.431C16.0725 23.0585 16.6266 22.6448 17.149 22.1933L17.1599 22.1831C17.8459 21.5227 18.4906 20.8208 19.0905 20.0814C20.1012 18.8346 20.9706 17.4797 21.6827 16.0413C21.8477 15.7073 21.9987 15.3796 22.1388 15.0581H24.8252V34.0177ZM34.3556 35.7427C34.2894 36.6372 33.4596 37.625 32.2974 37.6032C31.2286 37.583 30.1123 36.7835 30.2206 35.2912C30.2883 34.3517 31.2878 33.3452 32.2982 33.4316C33.2884 33.3755 34.4661 34.259 34.3556 35.7404V35.7427ZM37.5347 34.0434H36.5749C36.5754 34.0406 36.5754 34.0377 36.5749 34.0348C36.2293 33.0377 35.6346 32.2133 34.7191 31.6559C33.8397 31.1116 32.7989 30.8883 31.7735 31.0239C30.1015 31.2371 28.7532 32.0631 27.9989 34.0411H27.2306V18.8211C28.0869 18.9526 28.9058 19.1659 29.657 19.633C30.4994 20.1675 31.2167 20.8772 31.7603 21.7137C32.3659 22.6191 32.9046 23.568 33.5017 24.5465C32.4484 24.5465 31.4559 24.5597 30.4658 24.541C29.9987 24.5317 29.5861 24.6189 29.3666 25.0696C29.1471 25.5203 29.1035 25.9827 29.3666 26.4264C29.6297 26.8701 30.0672 26.9659 30.5265 26.9713C32.3418 26.9814 34.1579 26.9993 35.9755 26.9596C36.9564 26.9378 37.5013 27.4835 37.5231 28.3733C37.5285 28.5671 37.5316 28.7625 37.5347 28.954C37.5604 30.6362 37.5347 32.3238 37.5347 34.0411V34.0434Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M13.6282 13.8297C14.4024 13.8297 15.1593 13.6001 15.8031 13.17C16.4469 12.7398 16.9486 12.1284 17.2449 11.4131C17.5412 10.6978 17.6188 9.91063 17.4677 9.15124C17.3167 8.39186 16.9438 7.69431 16.3963 7.14682C15.8488 6.59933 15.1513 6.22649 14.3919 6.07544C13.6325 5.92438 12.8454 6.00191 12.13 6.29821C11.4147 6.59451 10.8033 7.09627 10.3732 7.74005C9.943 8.38383 9.7134 9.14071 9.7134 9.91498C9.71361 10.9532 10.1261 11.9488 10.8602 12.6829C11.5944 13.417 12.59 13.8295 13.6282 13.8297ZM13.6282 8.43439C13.9207 8.43439 14.2066 8.52113 14.4499 8.68365C14.6931 8.84617 14.8827 9.07716 14.9946 9.34742C15.1066 9.61768 15.1358 9.91506 15.0788 10.202C15.0217 10.4889 14.8808 10.7524 14.674 10.9593C14.4672 11.1661 14.2036 11.307 13.9167 11.364C13.6298 11.4211 13.3324 11.3918 13.0622 11.2799C12.7919 11.1679 12.5609 10.9784 12.3984 10.7351C12.2359 10.4919 12.1491 10.2059 12.1491 9.91342C12.1491 9.52116 12.305 9.14496 12.5823 8.86759C12.8597 8.59021 13.2359 8.43439 13.6282 8.43439Z"
          fill={fill ? fill : '#202452'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_241_133">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
