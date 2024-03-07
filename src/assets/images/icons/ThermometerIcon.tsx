import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ThermometerIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7589)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.02513 1.02513C9.6815 0.368749 10.5717 0 11.5 0C12.4283 0 13.3185 0.368749 13.9749 1.02513C14.6313 1.6815 15 2.57174 15 3.5V14.259C15.762 14.8876 16.3434 15.7123 16.6785 16.6487C17.076 17.7597 17.1057 18.969 16.7632 20.0982C16.4207 21.2273 15.7241 22.2164 14.7764 22.9193C13.8286 23.6222 12.68 24.0017 11.5 24.0017C10.32 24.0017 9.17138 23.6222 8.22363 22.9193C7.27589 22.2164 6.57933 21.2273 6.23681 20.0982C5.8943 18.969 5.924 17.7597 6.32153 16.6487C6.65661 15.7123 7.23804 14.8876 8 14.259V3.5C8 2.57174 8.36875 1.6815 9.02513 1.02513ZM11.5 2C11.1022 2 10.7206 2.15804 10.4393 2.43934C10.158 2.72064 10 3.10218 10 3.5V14.76C10 15.094 9.83326 15.4059 9.55556 15.5915C8.93122 16.0086 8.45758 16.6155 8.20461 17.3225C7.95164 18.0295 7.93274 18.7991 8.1507 19.5176C8.36866 20.2362 8.81193 20.8656 9.41504 21.3129C10.0181 21.7602 10.7491 22.0017 11.5 22.0017C12.2509 22.0017 12.9819 21.7602 13.585 21.3129C14.1881 20.8656 14.6313 20.2362 14.8493 19.5176C15.0673 18.7991 15.0484 18.0295 14.7954 17.3225C14.5424 16.6155 14.0688 16.0086 13.4444 15.5915C13.1667 15.4059 13 15.094 13 14.76V3.5C13 3.10218 12.842 2.72064 12.5607 2.43934C12.2794 2.15804 11.8978 2 11.5 2Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7589">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
