import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const PocketIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.33699 5.93278C6.72758 6.32324 6.72768 6.9564 6.33722 7.34699C5.21866 8.46592 4.457 9.89138 4.14853 11.4432C3.84006 12.9949 3.99864 14.6033 4.60421 16.065C5.20979 17.5266 6.23517 18.7759 7.55071 19.6549C8.86625 20.5338 10.4129 21.0029 11.995 21.0029C13.5771 21.0029 15.1238 20.5338 16.4393 19.6549C17.7548 18.7759 18.7802 17.5266 19.3858 16.065C19.9914 14.6033 20.1499 12.9949 19.8415 11.4432C19.533 9.89138 18.7713 8.46592 17.6528 7.34699C17.2623 6.9564 17.2624 6.32324 17.653 5.93278C18.0436 5.54232 18.6768 5.54242 19.0672 5.93301C20.4654 7.33166 21.4175 9.1135 21.8031 11.0532C22.1887 12.9929 21.9905 15.0034 21.2335 16.8305C20.4765 18.6576 19.1948 20.2192 17.5504 21.3178C15.9059 22.4165 13.9727 23.0029 11.995 23.0029C10.0173 23.0029 8.08406 22.4165 6.43964 21.3178C4.79522 20.2192 3.51349 18.6576 2.75652 16.8305C1.99954 15.0034 1.80132 12.9929 2.18691 11.0532C2.5725 9.1135 3.52458 7.33166 4.92278 5.93301C5.31324 5.54242 5.9464 5.54232 6.33699 5.93278Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 1C12.5523 1 13 1.44772 13 2V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V2C11 1.44772 11.4477 1 12 1Z"
        fill={fill}
      />
    </Svg>
  );
};
