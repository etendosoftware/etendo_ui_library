import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}

export const VNoteCard = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 26}
      height={style?.height || 32}
      viewBox="0 0 26 32"
      fill="none"
      style={style as ViewStyle}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.695 32H4.13936C2.11311 32 0.767914 30.6548 0.767914 29.0008V2.90417C0.767914 1.25056 2.11311 0 4.13936 0H16.7531C17.0544 0 17.3493 0.0270392 17.5626 0.240395L24.9832 7.66095C25.1961 7.87389 25.3182 8.16878 25.3182 8.47002V29.0008C25.3182 30.6548 23.9726 32 22.695 32ZM17.8968 3.81125V6.61488C17.8968 7.00694 18.2162 7.32592 18.6083 7.32592H21.4119L17.8968 3.81125ZM23.0296 9.86507H18.6083C16.9542 9.86507 15.609 8.26849 15.609 6.61488V2.19313H4.13936C3.37466 2.19313 3.05568 2.51211 3.05568 2.90417V29.0008C3.05568 29.3933 3.37466 29.7122 4.13936 29.7122H22.695C22.7106 29.7122 23.0296 29.3933 23.0296 29.0008V9.86507ZM18.6083 26.4346H7.47701C6.84623 26.4346 6.33333 25.9213 6.33333 25.2905C6.33333 24.6597 6.84623 24.1464 7.47701 24.1464H18.6083C19.2395 24.1464 19.7528 24.6597 19.7528 25.2905C19.7528 25.9213 19.2395 26.4346 18.6083 26.4346ZM18.6083 22.865H7.47701C6.84623 22.865 6.33333 22.211 6.33333 21.5802C6.33333 20.9494 6.84623 20.4361 7.47701 20.4361H18.6083C19.2395 20.4361 19.7528 20.9494 19.7528 21.5802C19.7528 22.211 19.2395 22.865 18.6083 22.865ZM18.6083 19.0136H7.47701C6.84623 19.0136 6.33333 18.6528 6.33333 17.8695C6.33333 17.4403 6.84623 16.7258 7.47701 16.7258H18.6083C19.2395 16.7258 19.7528 17.4403 19.7528 17.8695C19.7528 18.6528 19.2395 19.0136 18.6083 19.0136Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
