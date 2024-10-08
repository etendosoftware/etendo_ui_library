import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const Navigation2Icon = ({
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
        d="M12 1C12.419 1 12.7936 1.26117 12.9384 1.65429L19.9384 20.6543C20.0837 21.0487 19.9669 21.4918 19.646 21.7633C19.3252 22.0349 18.8688 22.0768 18.5039 21.8682L12 18.1518L5.49619 21.8682C5.13126 22.0768 4.67489 22.0349 4.35406 21.7633C4.03322 21.4918 3.91641 21.0487 4.06171 20.6543L11.0617 1.65429C11.2065 1.26117 11.5811 1 12 1ZM6.88743 18.7697L11.5039 16.1318C11.8113 15.9561 12.1888 15.9561 12.4962 16.1318L17.1127 18.7697L12 4.89264L6.88743 18.7697Z"
        fill={fill}
      />
    </Svg>
  );
};
