import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const PhoneOutgoingIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M23.81 1.62C23.71 1.38 23.51 1.18 23.27 1.08C23.15 1.03 23.02 1 22.89 1H16.89C16.34 1 15.89 1.45 15.89 2C15.89 2.55 16.34 3 16.89 3H20.48L15.19 8.29C14.8 8.68 14.8 9.31 15.19 9.7C15.39 9.9 15.64 9.99 15.9 9.99C16.16 9.99 16.41 9.89 16.61 9.7L21.9 4.41V8C21.9 8.55 22.35 9 22.9 9C23.45 9 23.9 8.55 23.9 8V2C23.9 1.87 23.87 1.74 23.82 1.62H23.81Z"
        fill={fill}
      />
      <Path
        d="M20.3 14.9C19.42 14.78 18.54 14.57 17.71 14.25C17.17 14.05 16.59 14.01 16.03 14.12C15.47 14.24 14.96 14.52 14.54 14.93L13.82 15.65C11.98 14.47 10.41 12.91 9.23003 11.06L9.95003 10.34C10.35 9.93 10.63 9.42 10.75 8.86C10.87 8.3 10.83 7.72 10.63 7.18C10.32 6.35 10.1 5.47 9.98003 4.58C9.88003 3.86 9.52003 3.2 8.97003 2.72C8.42003 2.24 7.70003 1.97 6.99003 1.99H3.99003C3.57003 1.99 3.16003 2.08 2.78003 2.25C2.39003 2.42 2.06003 2.66 1.78003 2.97C1.50003 3.28 1.29003 3.64 1.15003 4.04C1.02003 4.44 0.970027 4.86 1.01003 5.29C1.35003 8.52 2.47003 11.67 4.23003 14.39C5.83003 16.91 8.01003 19.1 10.53 20.69C13.25 22.45 16.38 23.57 19.62 23.92C19.71 23.92 19.8 23.93 19.89 23.93C20.22 23.93 20.54 23.88 20.85 23.77C21.25 23.64 21.61 23.42 21.92 23.14C22.23 22.85 22.47 22.51 22.64 22.13C22.81 21.74 22.89 21.34 22.89 20.92V17.93C22.9 17.2 22.65 16.49 22.18 15.93C21.7 15.37 21.04 15 20.3 14.9ZM20.89 17.92V20.92C20.89 21.06 20.86 21.2 20.81 21.33C20.75 21.46 20.67 21.57 20.57 21.67C20.47 21.76 20.35 21.84 20.22 21.88C20.09 21.92 19.94 21.94 19.83 21.93C16.92 21.61 14.09 20.61 11.63 19.01C9.35003 17.56 7.38003 15.59 5.93003 13.31C4.33003 10.84 3.33003 8 3.02003 5.09C3.01003 4.95 3.02003 4.81 3.07003 4.68C3.11003 4.55 3.19003 4.43 3.28003 4.32C3.37003 4.22 3.49003 4.14 3.61003 4.08C3.74003 4.02 3.87003 4 4.01003 4H7.03003C7.27003 4 7.50003 4.09 7.68003 4.24C7.86003 4.4 7.98003 4.62 8.02003 4.85C8.16003 5.89 8.41003 6.9 8.78003 7.88C8.85003 8.06 8.86003 8.25 8.82003 8.44C8.78003 8.63 8.69003 8.8 8.56003 8.93L7.29003 10.2C6.97003 10.52 6.91003 11.01 7.13003 11.4C8.64003 14.06 10.85 16.26 13.51 17.78C13.9 18 14.39 17.94 14.71 17.62L15.97 16.35C16.11 16.21 16.28 16.12 16.47 16.08C16.66 16.04 16.85 16.05 17.03 16.12C18.01 16.48 19.03 16.74 20.05 16.87C20.29 16.9 20.51 17.03 20.67 17.21C20.83 17.4 20.91 17.64 20.91 17.88V17.9L20.89 17.92Z"
        fill={fill}
      />
    </Svg>
  );
};
