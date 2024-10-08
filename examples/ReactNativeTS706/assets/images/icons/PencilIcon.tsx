import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const PencilIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={style}>
      <G clip-path="url(#clip0_233_138)">
        <Path
          d="M24.0025 4.17435C23.9846 5.11347 23.5827 6.06761 22.7873 6.86304C18.863 10.7848 14.9397 14.7068 11.0174 18.6292C10.0942 19.5514 9.16825 20.4708 8.25167 21.3996C8.03905 21.6162 7.77659 21.7774 7.48724 21.8691C5.42745 22.5484 3.37016 23.2334 1.31538 23.9239C1.02613 24.0178 0.751911 24.0338 0.478629 23.8826C0.0550883 23.645 -0.101745 23.1989 0.0663563 22.6909C0.482697 21.4325 0.901228 20.1747 1.32195 18.9175C1.59711 18.0883 1.86382 17.2562 2.15682 16.4335C2.23771 16.207 2.36574 16.0002 2.53247 15.8269C7.38894 10.9598 12.2495 6.09672 17.1141 1.23774C17.9208 0.431042 18.8834 -0.00376511 20.0253 -0.00376511C22.2238 0.000930464 24.0006 1.78994 24.0025 4.17435ZM16.9591 4.10862C12.8026 8.26576 8.64328 12.426 4.48113 16.5894C5.45218 17.5614 6.43919 18.5484 7.41117 19.5223L19.8854 7.03959L16.9591 4.10862ZM21.2866 5.70511C21.9552 5.12192 22.2811 4.39692 22.066 3.50382C21.8641 2.66519 21.3147 2.12427 20.4695 1.93457C19.584 1.73641 18.8684 2.06041 18.303 2.72249L21.2866 5.70511ZM3.48755 18.3738L2.41414 21.5846L5.62403 20.514L3.48755 18.3738Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_233_138">
          <Rect
            width="24.0019"
            height="24"
            fill="white"
            transform="translate(-0.000305176)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
