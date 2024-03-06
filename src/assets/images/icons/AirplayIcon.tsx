import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const AirplayIcon = ({
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
        d="M4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V15C3 15.2652 3.10536 15.5196 3.29289 15.7071C3.48043 15.8946 3.73478 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.20435 18 2.44129 17.6839 1.87868 17.1213C1.31607 16.5587 1 15.7956 1 15V5C1 4.20435 1.31607 3.44129 1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H20C20.7957 2 21.5587 2.31607 22.1213 2.87868C22.6839 3.44129 23 4.20435 23 5V15C23 15.7957 22.6839 16.5587 22.1213 17.1213C21.5587 17.6839 20.7957 18 20 18H19C18.4477 18 18 17.5523 18 17C18 16.4477 18.4477 16 19 16H20C20.2652 16 20.5196 15.8946 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H4Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 14C12.2968 14 12.5782 14.1318 12.7682 14.3598L17.7682 20.3598C18.0166 20.6579 18.0702 21.0728 17.9056 21.4242C17.741 21.7755 17.388 22 17 22H7C6.61198 22 6.25899 21.7755 6.09441 21.4242C5.92983 21.0728 5.98338 20.6579 6.23178 20.3598L11.2318 14.3598C11.4218 14.1318 11.7032 14 12 14ZM9.13504 20H14.865L12 16.562L9.13504 20Z"
        fill={fill}
      />
    </Svg>
  );
};
