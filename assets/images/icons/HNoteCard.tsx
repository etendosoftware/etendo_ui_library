import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path, Mask, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}

export const HNoteCard = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 43}
      height={style?.height || 34}
      viewBox="0 0 43 34"
      fill="none"
      style={style as ViewStyle}
    >
      <Mask
        id="path-1-outside-1_1_520"
        maskUnits="userSpaceOnUse"
        x="-0.898743"
        y="0"
        width="44"
        height="34"
        fill="black"
      >
        <Rect fill="white" x="-0.898743" width="44" height="34" />
        <Path d="M38.7679 3.66667C39.1215 3.66667 39.4607 3.80714 39.7107 4.05719C39.9608 4.30724 40.1013 4.64638 40.1013 5V29C40.1013 29.3536 39.9608 29.6928 39.7107 29.9428C39.4607 30.1929 39.1215 30.3333 38.7679 30.3333H4.10126C3.74764 30.3333 3.4085 30.1929 3.15845 29.9428C2.9084 29.6928 2.76792 29.3536 2.76792 29V5C2.76792 4.64638 2.9084 4.30724 3.15845 4.05719C3.4085 3.80714 3.74764 3.66667 4.10126 3.66667H38.7679ZM4.10126 1C3.04039 1 2.02298 1.42143 1.27283 2.17157C0.522685 2.92172 0.101257 3.93913 0.101257 5V29C0.101257 30.0609 0.522685 31.0783 1.27283 31.8284C2.02298 32.5786 3.04039 33 4.10126 33H38.7679C39.8288 33 40.8462 32.5786 41.5964 31.8284C42.3465 31.0783 42.7679 30.0609 42.7679 29V5C42.7679 3.93913 42.3465 2.92172 41.5964 2.17157C40.8462 1.42143 39.8288 1 38.7679 1H4.10126Z" />
        <Path d="M8.10126 10.3333C8.10126 9.97971 8.24173 9.64057 8.49178 9.39052C8.74183 9.14048 9.08097 9 9.43459 9H33.4346C33.7882 9 34.1274 9.14048 34.3774 9.39052C34.6275 9.64057 34.7679 9.97971 34.7679 10.3333C34.7679 10.687 34.6275 11.0261 34.3774 11.2761C34.1274 11.5262 33.7882 11.6667 33.4346 11.6667H9.43459C9.08097 11.6667 8.74183 11.5262 8.49178 11.2761C8.24173 11.0261 8.10126 10.687 8.10126 10.3333ZM8.10126 17C8.10126 16.6464 8.24173 16.3072 8.49178 16.0572C8.74183 15.8071 9.08097 15.6667 9.43459 15.6667H33.4346C33.7882 15.6667 34.1274 15.8071 34.3774 16.0572C34.6275 16.3072 34.7679 16.6464 34.7679 17C34.7679 17.3536 34.6275 17.6928 34.3774 17.9428C34.1274 18.1929 33.7882 18.3333 33.4346 18.3333H9.43459C9.08097 18.3333 8.74183 18.1929 8.49178 17.9428C8.24173 17.6928 8.10126 17.3536 8.10126 17ZM8.10126 23.6667C8.10126 23.313 8.24173 22.9739 8.49178 22.7239C8.74183 22.4738 9.08097 22.3333 9.43459 22.3333H25.4346C25.7882 22.3333 26.1274 22.4738 26.3774 22.7239C26.6275 22.9739 26.7679 23.313 26.7679 23.6667C26.7679 24.0203 26.6275 24.3594 26.3774 24.6095C26.1274 24.8595 25.7882 25 25.4346 25H9.43459C9.08097 25 8.74183 24.8595 8.49178 24.6095C8.24173 24.3594 8.10126 24.0203 8.10126 23.6667Z" />
      </Mask>
      <Path
        d="M38.7679 3.66667C39.1215 3.66667 39.4607 3.80714 39.7107 4.05719C39.9608 4.30724 40.1013 4.64638 40.1013 5V29C40.1013 29.3536 39.9608 29.6928 39.7107 29.9428C39.4607 30.1929 39.1215 30.3333 38.7679 30.3333H4.10126C3.74764 30.3333 3.4085 30.1929 3.15845 29.9428C2.9084 29.6928 2.76792 29.3536 2.76792 29V5C2.76792 4.64638 2.9084 4.30724 3.15845 4.05719C3.4085 3.80714 3.74764 3.66667 4.10126 3.66667H38.7679ZM4.10126 1C3.04039 1 2.02298 1.42143 1.27283 2.17157C0.522685 2.92172 0.101257 3.93913 0.101257 5V29C0.101257 30.0609 0.522685 31.0783 1.27283 31.8284C2.02298 32.5786 3.04039 33 4.10126 33H38.7679C39.8288 33 40.8462 32.5786 41.5964 31.8284C42.3465 31.0783 42.7679 30.0609 42.7679 29V5C42.7679 3.93913 42.3465 2.92172 41.5964 2.17157C40.8462 1.42143 39.8288 1 38.7679 1H4.10126Z"
        fill={fill ? fill : '#202452'}
      />
      <Path
        d="M8.10126 10.3333C8.10126 9.97971 8.24173 9.64057 8.49178 9.39052C8.74183 9.14048 9.08097 9 9.43459 9H33.4346C33.7882 9 34.1274 9.14048 34.3774 9.39052C34.6275 9.64057 34.7679 9.97971 34.7679 10.3333C34.7679 10.687 34.6275 11.0261 34.3774 11.2761C34.1274 11.5262 33.7882 11.6667 33.4346 11.6667H9.43459C9.08097 11.6667 8.74183 11.5262 8.49178 11.2761C8.24173 11.0261 8.10126 10.687 8.10126 10.3333ZM8.10126 17C8.10126 16.6464 8.24173 16.3072 8.49178 16.0572C8.74183 15.8071 9.08097 15.6667 9.43459 15.6667H33.4346C33.7882 15.6667 34.1274 15.8071 34.3774 16.0572C34.6275 16.3072 34.7679 16.6464 34.7679 17C34.7679 17.3536 34.6275 17.6928 34.3774 17.9428C34.1274 18.1929 33.7882 18.3333 33.4346 18.3333H9.43459C9.08097 18.3333 8.74183 18.1929 8.49178 17.9428C8.24173 17.6928 8.10126 17.3536 8.10126 17ZM8.10126 23.6667C8.10126 23.313 8.24173 22.9739 8.49178 22.7239C8.74183 22.4738 9.08097 22.3333 9.43459 22.3333H25.4346C25.7882 22.3333 26.1274 22.4738 26.3774 22.7239C26.6275 22.9739 26.7679 23.313 26.7679 23.6667C26.7679 24.0203 26.6275 24.3594 26.3774 24.6095C26.1274 24.8595 25.7882 25 25.4346 25H9.43459C9.08097 25 8.74183 24.8595 8.49178 24.6095C8.24173 24.3594 8.10126 24.0203 8.10126 23.6667Z"
        fill={fill ? fill : '#202452'}
      />
      <Path
        d="M2.76792 29H2.66792H2.76792ZM4.10126 3.66667V3.76667V3.66667ZM0.101257 5H0.00125732H0.101257ZM0.101257 29H0.00125732H0.101257ZM38.7679 33V33.1V33ZM42.7679 29H42.8679H42.7679ZM42.7679 5H42.8679H42.7679ZM38.7679 1V0.9V1ZM38.7679 3.76667C39.095 3.76667 39.4087 3.89661 39.64 4.1279L39.7814 3.98648C39.5126 3.71768 39.1481 3.56667 38.7679 3.56667V3.76667ZM39.64 4.1279C39.8713 4.3592 40.0013 4.6729 40.0013 5H40.2013C40.2013 4.61986 40.0502 4.25528 39.7814 3.98648L39.64 4.1279ZM40.0013 5V29H40.2013V5H40.0013ZM40.0013 29C40.0013 29.3271 39.8713 29.6408 39.64 29.8721L39.7814 30.0135C40.0503 29.7447 40.2013 29.3801 40.2013 29H40.0013ZM39.64 29.8721C39.4087 30.1034 39.095 30.2333 38.7679 30.2333V30.4333C39.1481 30.4333 39.5126 30.2823 39.7814 30.0135L39.64 29.8721ZM38.7679 30.2333H4.10126V30.4333H38.7679V30.2333ZM4.10126 30.2333C3.77416 30.2333 3.46045 30.1034 3.22916 29.8721L3.08774 30.0135C3.35654 30.2823 3.72111 30.4333 4.10126 30.4333V30.2333ZM3.22916 29.8721C2.99786 29.6408 2.86792 29.3271 2.86792 29H2.66792C2.66792 29.3801 2.81894 29.7447 3.08774 30.0135L3.22916 29.8721ZM2.86792 29V5H2.66792V29H2.86792ZM2.86792 5C2.86792 4.6729 2.99786 4.3592 3.22916 4.1279L3.08774 3.98648C2.81894 4.25528 2.66792 4.61986 2.66792 5H2.86792ZM3.22916 4.1279C3.46045 3.89661 3.77416 3.76667 4.10126 3.76667V3.56667C3.72111 3.56667 3.35654 3.71768 3.08774 3.98648L3.22916 4.1279ZM4.10126 3.76667H38.7679V3.56667H4.10126V3.76667ZM4.10126 0.9C3.01387 0.9 1.97102 1.33196 1.20212 2.10086L1.34354 2.24228C2.07493 1.51089 3.06691 1.1 4.10126 1.1V0.9ZM1.20212 2.10086C0.43322 2.86976 0.00125732 3.91261 0.00125732 5H0.201257C0.201257 3.96566 0.612149 2.97368 1.34354 2.24228L1.20212 2.10086ZM0.00125732 5V29H0.201257V5H0.00125732ZM0.00125732 29C0.00125732 30.0874 0.43322 31.1302 1.20212 31.8991L1.34354 31.7577C0.612149 31.0263 0.201257 30.0343 0.201257 29H0.00125732ZM1.20212 31.8991C1.97102 32.668 3.01387 33.1 4.10126 33.1V32.9C3.06691 32.9 2.07493 32.4891 1.34354 31.7577L1.20212 31.8991ZM4.10126 33.1H38.7679V32.9H4.10126V33.1ZM38.7679 33.1C39.8553 33.1 40.8982 32.668 41.6671 31.8991L41.5256 31.7577C40.7943 32.4891 39.8023 32.9 38.7679 32.9V33.1ZM41.6671 31.8991C42.436 31.1302 42.8679 30.0874 42.8679 29H42.6679C42.6679 30.0343 42.257 31.0263 41.5256 31.7577L41.6671 31.8991ZM42.8679 29V5H42.6679V29H42.8679ZM42.8679 5C42.8679 3.91261 42.436 2.86976 41.6671 2.10086L41.5256 2.24228C42.257 2.97368 42.6679 3.96566 42.6679 5H42.8679ZM41.6671 2.10086C40.8982 1.33196 39.8553 0.9 38.7679 0.9V1.1C39.8023 1.1 40.7943 1.51089 41.5256 2.24228L41.6671 2.10086ZM38.7679 0.9H4.10126V1.1H38.7679V0.9ZM8.20126 10.3333C8.20126 10.0062 8.3312 9.69253 8.56249 9.46124L8.42107 9.31981C8.15227 9.58862 8.00126 9.95319 8.00126 10.3333H8.20126ZM8.56249 9.46124C8.79379 9.22994 9.10749 9.1 9.43459 9.1V8.9C9.05445 8.9 8.68987 9.05101 8.42107 9.31981L8.56249 9.46124ZM9.43459 9.1H33.4346V8.9H9.43459V9.1ZM33.4346 9.1C33.7617 9.1 34.0754 9.22994 34.3067 9.46124L34.4481 9.31981C34.1793 9.05101 33.8147 8.9 33.4346 8.9V9.1ZM34.3067 9.46124C34.538 9.69253 34.6679 10.0062 34.6679 10.3333H34.8679C34.8679 9.95319 34.7169 9.58862 34.4481 9.31981L34.3067 9.46124ZM34.6679 10.3333C34.6679 10.6604 34.538 10.9741 34.3067 11.2054L34.4481 11.3469C34.7169 11.0781 34.8679 10.7135 34.8679 10.3333H34.6679ZM34.3067 11.2054C34.0754 11.4367 33.7617 11.5667 33.4346 11.5667V11.7667C33.8147 11.7667 34.1793 11.6157 34.4481 11.3469L34.3067 11.2054ZM33.4346 11.5667H9.43459V11.7667H33.4346V11.5667ZM9.43459 11.5667C9.10749 11.5667 8.79379 11.4367 8.56249 11.2054L8.42107 11.3469C8.68987 11.6157 9.05445 11.7667 9.43459 11.7667V11.5667ZM8.56249 11.2054C8.3312 10.9741 8.20126 10.6604 8.20126 10.3333H8.00126C8.00126 10.7135 8.15227 11.0781 8.42107 11.3469L8.56249 11.2054ZM8.20126 17C8.20126 16.6729 8.3312 16.3592 8.56249 16.1279L8.42107 15.9865C8.15227 16.2553 8.00126 16.6199 8.00126 17H8.20126ZM8.56249 16.1279C8.79379 15.8966 9.10749 15.7667 9.43459 15.7667V15.5667C9.05445 15.5667 8.68987 15.7177 8.42107 15.9865L8.56249 16.1279ZM9.43459 15.7667H33.4346V15.5667H9.43459V15.7667ZM33.4346 15.7667C33.7617 15.7667 34.0754 15.8966 34.3067 16.1279L34.4481 15.9865C34.1793 15.7177 33.8147 15.5667 33.4346 15.5667V15.7667ZM34.3067 16.1279C34.538 16.3592 34.6679 16.6729 34.6679 17H34.8679C34.8679 16.6199 34.7169 16.2553 34.4481 15.9865L34.3067 16.1279ZM34.6679 17C34.6679 17.3271 34.538 17.6408 34.3067 17.8721L34.4481 18.0135C34.7169 17.7447 34.8679 17.3801 34.8679 17H34.6679ZM34.3067 17.8721C34.0754 18.1034 33.7617 18.2333 33.4346 18.2333V18.4333C33.8147 18.4333 34.1793 18.2823 34.4481 18.0135L34.3067 17.8721ZM33.4346 18.2333H9.43459V18.4333H33.4346V18.2333ZM9.43459 18.2333C9.10749 18.2333 8.79379 18.1034 8.56249 17.8721L8.42107 18.0135C8.68987 18.2823 9.05445 18.4333 9.43459 18.4333V18.2333ZM8.56249 17.8721C8.3312 17.6408 8.20126 17.3271 8.20126 17H8.00126C8.00126 17.3801 8.15227 17.7447 8.42107 18.0135L8.56249 17.8721ZM8.20126 23.6667C8.20126 23.3396 8.3312 23.0259 8.56249 22.7946L8.42107 22.6531C8.15227 22.9219 8.00126 23.2865 8.00126 23.6667H8.20126ZM8.56249 22.7946C8.79379 22.5633 9.10749 22.4333 9.43459 22.4333V22.2333C9.05445 22.2333 8.68987 22.3843 8.42107 22.6531L8.56249 22.7946ZM9.43459 22.4333H25.4346V22.2333H9.43459V22.4333ZM25.4346 22.4333C25.7617 22.4333 26.0754 22.5633 26.3067 22.7946L26.4481 22.6531C26.1793 22.3843 25.8147 22.2333 25.4346 22.2333V22.4333ZM26.3067 22.7946C26.538 23.0259 26.6679 23.3396 26.6679 23.6667H26.8679C26.8679 23.2865 26.7169 22.9219 26.4481 22.6531L26.3067 22.7946ZM26.6679 23.6667C26.6679 23.9938 26.538 24.3075 26.3067 24.5388L26.4481 24.6802C26.7169 24.4114 26.8679 24.0468 26.8679 23.6667H26.6679ZM26.3067 24.5388C26.0754 24.7701 25.7617 24.9 25.4346 24.9V25.1C25.8147 25.1 26.1793 24.949 26.4481 24.6802L26.3067 24.5388ZM25.4346 24.9H9.43459V25.1H25.4346V24.9ZM9.43459 24.9C9.10749 24.9 8.79379 24.7701 8.56249 24.5388L8.42107 24.6802C8.68987 24.949 9.05445 25.1 9.43459 25.1V24.9ZM8.56249 24.5388C8.3312 24.3075 8.20126 23.9938 8.20126 23.6667H8.00126C8.00126 24.0468 8.15227 24.4114 8.42107 24.6802L8.56249 24.5388Z"
        fill={fill ? fill : '#202452'}
        mask="url(#path-1-outside-1_1_520)"
      />
    </Svg>
  );
};
