import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const OctagonIcon = ({
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
        d="M7.15289 1.29289C7.34043 1.10536 7.59478 1 7.86 1H16.14C16.4052 1 16.6596 1.10536 16.8471 1.29289L22.7071 7.15289C22.8946 7.34043 23 7.59478 23 7.86V16.14C23 16.4052 22.8946 16.6596 22.7071 16.8471L16.8471 22.7071C16.6596 22.8946 16.4052 23 16.14 23H7.86C7.59478 23 7.34043 22.8946 7.15289 22.7071L1.29289 16.8471C1.10536 16.6596 1 16.4052 1 16.14V7.86C1 7.59478 1.10536 7.34043 1.29289 7.15289L7.15289 1.29289ZM8.27421 3L3 8.27421V15.7258L8.27421 21H15.7258L21 15.7258V8.27421L15.7258 3H8.27421Z"
        fill={fill}
      />
    </Svg>
  );
};
