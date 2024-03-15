import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const Volumen2Icon = ({
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
        d="M11.4332 4.09869C11.7797 4.26521 12 4.61559 12 4.99999V19C12 19.3844 11.7797 19.7348 11.4332 19.9013C11.0867 20.0678 10.6755 20.021 10.3753 19.7809L5.64922 16H2C1.44772 16 1 15.5523 1 15V8.99999C1 8.44771 1.44772 7.99999 2 7.99999H5.64922L10.3753 4.21912C10.6755 3.97899 11.0867 3.93217 11.4332 4.09869ZM10 7.08062L6.62469 9.78086C6.44738 9.92271 6.22707 9.99999 6 9.99999H3V14H6C6.22707 14 6.44738 14.0773 6.62469 14.2191L10 16.9194V7.08062Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.363 4.22278C18.7536 3.83231 19.3867 3.83241 19.7772 4.22299C21.8394 6.2858 22.9979 9.08319 22.9979 12C22.9979 14.9168 21.8394 17.7142 19.7772 19.777C19.3867 20.1676 18.7536 20.1677 18.363 19.7772C17.9724 19.3867 17.9723 18.7536 18.3628 18.363C20.05 16.6752 20.9979 14.3865 20.9979 12C20.9979 9.61352 20.05 7.32474 18.3628 5.63699C17.9723 5.24641 17.9724 4.61324 18.363 4.22278ZM14.833 7.75278C15.2236 7.36231 15.8567 7.36241 16.2472 7.75299C17.372 8.87816 18.0039 10.404 18.0039 11.995C18.0039 13.586 17.372 15.1118 16.2472 16.237C15.8567 16.6276 15.2236 16.6277 14.833 16.2372C14.4424 15.8467 14.4423 15.2136 14.8328 14.823C15.5827 14.0729 16.0039 13.0556 16.0039 11.995C16.0039 10.9343 15.5827 9.9171 14.8328 9.16699C14.4423 8.77641 14.4424 8.14324 14.833 7.75278Z"
        fill={fill}
      />
    </Svg>
  );
};
