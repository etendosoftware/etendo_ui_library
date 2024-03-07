import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BatteryChargingIcon = ({
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
        d="M3 7C2.73478 7 2.48043 7.10536 2.29289 7.29289C2.10536 7.48043 2 7.73478 2 8V16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H5C5.55228 17 6 17.4477 6 18C6 18.5523 5.55228 19 5 19H3C2.20435 19 1.44129 18.6839 0.87868 18.1213C0.316071 17.5587 0 16.7956 0 16V8C0 7.20435 0.316071 6.44129 0.87868 5.87868C1.44129 5.31607 2.20435 5 3 5H6.19C6.74228 5 7.19 5.44771 7.19 6C7.19 6.55228 6.74228 7 6.19 7H3ZM14 6C14 5.44771 14.4477 5 15 5H17C17.7957 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V16C20 16.7956 19.6839 17.5587 19.1213 18.1213C18.5587 18.6839 17.7957 19 17 19H13.81C13.2577 19 12.81 18.5523 12.81 18C12.81 17.4477 13.2577 17 13.81 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V8C18 7.73478 17.8946 7.48043 17.7071 7.29289C17.5196 7.10536 17.2652 7 17 7H15C14.4477 7 14 6.55228 14 6Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 10C23.5523 10 24 10.4477 24 11V13C24 13.5523 23.5523 14 23 14C22.4477 14 22 13.5523 22 13V11C22 10.4477 22.4477 10 23 10Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5547 5.16795C12.0142 5.4743 12.1384 6.09517 11.8321 6.5547L8.86852 11H13C13.3688 11 13.7077 11.203 13.8817 11.5281C14.0557 11.8533 14.0366 12.2478 13.8321 12.5547L9.83205 18.5547C9.5257 19.0142 8.90483 19.1384 8.4453 18.832C7.98577 18.5257 7.8616 17.9048 8.16795 17.4453L11.1315 13H7C6.6312 13 6.29234 12.797 6.11833 12.4719C5.94431 12.1467 5.96338 11.7522 6.16795 11.4453L10.1679 5.4453C10.4743 4.98577 11.0952 4.8616 11.5547 5.16795Z"
        fill={fill}
      />
    </Svg>
  );
};
