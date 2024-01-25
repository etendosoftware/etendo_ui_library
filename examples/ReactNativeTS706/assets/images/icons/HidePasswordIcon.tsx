import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const HidePasswordIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 40);
  const height = sizeSvg(style?.height, 40);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      style={style}>
      <Path
        d="M8.78851 29.4252C7.85784 28.7421 6.91933 28.1091 6.04193 27.3994C3.80119 25.5811 1.86991 23.4117 0.323166 20.9755C-0.101432 20.3112 -0.113966 19.7221 0.323166 19.0609C3.57424 14.0645 7.84374 10.3151 13.5891 8.48984C18.6028 6.89642 23.5868 7.19097 28.4438 9.25286C28.7462 9.3829 28.9138 9.34843 29.141 9.11968C30.3662 7.86626 31.6071 6.64416 32.8433 5.40954C33.0004 5.23272 33.2054 5.1054 33.4335 5.04308C33.6617 4.98077 33.903 4.98615 34.1281 5.05858C34.3443 5.11597 34.5398 5.23339 34.692 5.39726C34.8442 5.56112 34.9469 5.76474 34.9883 5.98455C35.1026 6.48905 34.9068 6.89172 34.548 7.24894C32.8559 8.93062 31.1679 10.616 29.4841 12.305L7.38309 34.3966C7.30005 34.4796 7.21858 34.5643 7.13397 34.6442C6.59187 35.1518 5.8398 35.1581 5.3447 34.6614C5.22573 34.5443 5.1317 34.4043 5.06829 34.2499C5.00488 34.0955 4.9734 33.9299 4.97574 33.763C4.97809 33.5961 5.01421 33.4314 5.08193 33.2788C5.14965 33.1262 5.24756 32.989 5.36977 32.8753C6.41325 31.8177 7.46926 30.7726 8.52057 29.7213C8.61458 29.6226 8.70703 29.5176 8.78851 29.4252ZM13.8351 24.3332C11.4693 20.8173 12.5362 16.9865 14.4618 14.9325C15.6886 13.596 17.3576 12.7488 19.1605 12.5472C20.9633 12.3456 22.7782 12.8033 24.2699 13.8357L26.7971 11.31C26.781 11.2928 26.7612 11.2794 26.7391 11.2709C22.4571 9.64299 18.1344 9.54742 13.8179 11.0625C9.17863 12.6982 5.6565 15.7816 2.85039 19.755C2.78735 19.8257 2.75329 19.9176 2.75503 20.0122C2.75677 20.1069 2.79418 20.1975 2.85978 20.2658C3.96425 21.8489 5.2464 23.3003 6.68117 24.5917C7.89669 25.6974 9.2296 26.6668 10.6561 27.4824L13.8351 24.3332ZM15.6965 22.4765L22.4509 15.7252C21.0533 14.7225 18.4446 14.6285 16.5958 16.352C14.8739 17.9438 14.4618 20.6967 15.6965 22.4828V22.4765Z"
        fill={fill}
      />
      <Path
        d="M13.7395 31.5514C14.3945 30.9058 15.0165 30.276 15.6604 29.6712C15.7215 29.6305 15.7902 29.6027 15.8624 29.5895C15.9346 29.5763 16.0088 29.578 16.0803 29.5944C20.0052 30.4685 24.1087 30.0246 27.756 28.3316C31.0885 26.8212 33.7975 24.5196 36.0772 21.6884C36.436 21.2419 36.7525 20.7625 37.1066 20.3128C37.2632 20.106 37.2632 19.9587 37.1066 19.7378C35.633 17.6297 33.8492 15.7566 31.8155 14.182C31.7027 14.0958 31.593 14.0065 31.5116 13.9423L33.3666 12.1091C34.1062 12.7672 34.9334 13.4597 35.7168 14.2055C37.2364 15.673 38.5727 17.3191 39.6964 19.108C40.0928 19.7347 40.1022 20.2987 39.6964 20.9223C36.3451 26.0848 31.9283 29.9047 25.9417 31.6845C21.9699 32.8659 17.9761 32.811 13.9965 31.6642C13.9087 31.6317 13.8229 31.5941 13.7395 31.5514Z"
        fill={fill}
      />
      <Path
        d="M18.0278 27.2756C18.8112 26.4922 19.5257 25.7809 20.2433 25.0821C20.3457 25.0044 20.469 24.9591 20.5974 24.9521C21.6987 24.8206 22.7242 24.3238 23.5101 23.5411C24.296 22.7584 24.7968 21.7348 24.9326 20.634C24.9319 20.5171 24.9656 20.4027 25.0298 20.305C25.7458 19.5749 26.4744 18.8557 27.2546 18.0801C27.8704 20.7891 27.3267 23.1487 25.4748 25.1197C23.4724 27.2537 20.9844 27.9133 18.0278 27.2756Z"
        fill={fill}
      />
    </Svg>
  );
};
