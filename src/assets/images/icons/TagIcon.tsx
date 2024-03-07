import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TagIcon = ({
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
        d="M1 2C1 1.44772 1.44772 1 2 1H12C12.2652 1 12.5196 1.10536 12.7071 1.29289L21.2992 9.885C21.858 10.4471 22.1716 11.2074 22.1716 12C22.1716 12.7926 21.858 13.5529 21.2992 14.115L21.2971 14.1171L14.1275 21.2867C13.849 21.5655 13.5178 21.787 13.1538 21.9379C12.7896 22.0889 12.3992 22.1666 12.005 22.1666C11.6108 22.1666 11.2204 22.0889 10.8562 21.9379C10.4921 21.787 10.1613 21.5658 9.88271 21.2869L1.29331 12.7075C1.10552 12.5199 1 12.2654 1 12V2ZM3 3V11.5854L11.2967 19.8725L11.2975 19.8733C11.3904 19.9663 11.5007 20.04 11.6221 20.0903C11.7435 20.1407 11.8736 20.1666 12.005 20.1666C12.1364 20.1666 12.2665 20.1407 12.3879 20.0903C12.5093 20.04 12.6196 19.9663 12.7125 19.8733L19.8808 12.705L19.8817 12.7041C20.0674 12.5168 20.1716 12.2638 20.1716 12C20.1716 11.7362 20.0674 11.4832 19.8817 11.2959L19.8808 11.295L11.5858 3H3Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 7C6 6.44772 6.44772 6 7 6H7.01C7.56228 6 8.01 6.44772 8.01 7C8.01 7.55228 7.56228 8 7.01 8H7C6.44772 8 6 7.55228 6 7Z"
        fill={fill}
      />
    </Svg>
  );
};
