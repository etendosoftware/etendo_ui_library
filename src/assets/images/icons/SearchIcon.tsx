import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}
export const SearchIcon = ({
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
        d="M31.331 28.5263C28.2903 25.4823 25.8083 23.0035 23.5196 20.7197C23.4846 20.6851 23.4475 20.6528 23.4083 20.6231C25.4566 17.7252 26.242 14.6715 25.8074 11.3034C25.3534 7.76067 23.682 4.85878 20.8483 2.68053C18.3859 0.789356 15.3262 -0.15456 12.2263 0.0206581C9.14005 0.187475 6.21787 1.46311 3.9973 3.6129C1.75836 5.78194 0.365568 8.67779 0.068809 11.7809C-0.218183 14.871 0.621805 17.9607 2.43386 20.4801C4.27994 23.0507 6.73839 24.7343 9.74344 25.4864C13.6232 26.4561 17.2861 25.7552 20.6371 23.4007L20.6631 23.4267L25.1959 27.9586L26.4093 29.1679L27.0744 29.8356C27.5804 30.3432 28.1027 30.8686 28.6249 31.3787C29.0081 31.7687 29.5295 31.9919 30.0762 32H30.1477C30.4094 31.9898 30.6663 31.926 30.9024 31.8125C31.1384 31.6991 31.3488 31.5385 31.5203 31.3405C32.2569 30.5032 32.1757 29.3751 31.331 28.5263ZM22.0097 12.9326C22.0292 17.8966 17.9886 21.9591 13.0043 21.9875H12.9515C8.00295 21.9867 3.96075 17.964 3.9307 12.9951C3.92361 11.8134 4.15143 10.642 4.60094 9.54902C5.05045 8.45606 5.71268 7.46333 6.54915 6.6285C7.38564 5.77565 8.38321 5.09747 9.48395 4.63333C10.5847 4.16919 11.7667 3.92834 12.9613 3.92478H12.997C15.3823 3.93861 17.6661 4.89175 19.3535 6.57767C21.041 8.26359 21.9962 10.5465 22.0121 12.9318L22.0097 12.9326Z"
        fill={fill}
      />
    </Svg>
  );
};
