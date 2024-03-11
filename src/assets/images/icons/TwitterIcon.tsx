import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, Defs, ClipPath, Rect, G } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TwitterIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7425)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5256 2.35018C15.5744 1.94987 16.7208 1.88133 17.8099 2.15382C18.6759 2.37051 19.4724 2.79454 20.1327 3.38509C20.9449 3.08657 21.7152 2.68256 22.4237 2.18282C22.7643 1.94256 23.2183 1.93878 23.5628 2.17334C23.9074 2.4079 24.0703 2.8316 23.9717 3.2366C23.6292 4.64313 22.9426 5.93955 21.977 7.01096C21.9918 7.17236 21.9996 7.33442 22.0001 7.49668L22.0001 7.49998C22.0001 13.5999 19.0632 18.075 14.845 20.3202C10.651 22.5525 5.29097 22.5278 0.51446 19.8741C0.109649 19.6492 -0.0877967 19.1758 0.0372519 18.73C0.162301 18.2841 0.577127 17.9824 1.03985 18.0008C2.72666 18.0679 4.39647 17.7325 5.91484 17.033C4.41169 16.1054 3.32952 15.0042 2.57716 13.8163C1.57353 12.2316 1.19466 10.5529 1.12613 9.04539C1.05781 7.54227 1.29658 6.18888 1.54758 5.21835C1.67368 4.73076 1.80452 4.33349 1.90538 4.05452C1.95587 3.91487 1.99901 3.8044 2.03054 3.72657C2.04631 3.68764 2.0592 3.65683 2.06866 3.63458L2.08023 3.60765L2.08319 3.6009C2.09023 3.58472 2.09773 3.56867 2.10568 3.55277L3.0001 3.99998L3.81846 3.42527C4.734 4.72895 5.95775 5.78597 7.38071 6.5022C8.51256 7.0719 9.7425 7.4119 10.9998 7.5064C10.9924 6.39674 11.3221 5.31064 11.9457 4.39204C12.5762 3.46324 13.4768 2.75048 14.5256 2.35018ZM3.40475 6.04359C3.22106 6.84496 3.07437 7.86122 3.12407 8.95458C3.18055 10.1971 3.48918 11.5184 4.2668 12.7462C5.04039 13.9676 6.31614 15.1572 8.40624 16.0862C8.73804 16.2336 8.96384 16.5494 8.99614 16.911C9.02844 17.2727 8.86216 17.6234 8.56173 17.8274C7.4508 18.5815 6.2343 19.1488 4.9602 19.5157C8.13037 20.3233 11.3071 19.9376 13.9053 18.5547C17.4366 16.6751 19.9996 12.9008 20.0001 7.50165C19.9993 7.28555 19.9785 7.06999 19.9379 6.85774C19.8752 6.52987 19.9803 6.19236 20.2179 5.95798C20.4407 5.73829 20.647 5.50415 20.8358 5.25749C20.6093 5.34104 20.3801 5.41777 20.1484 5.48752C19.7718 5.60093 19.3637 5.48302 19.1055 5.18622C18.6377 4.64831 18.016 4.26705 17.3244 4.094C16.6328 3.92096 15.9048 3.96449 15.2388 4.2187C14.5727 4.47291 14.0009 4.92553 13.6005 5.51536C13.2001 6.10519 12.9905 6.80375 13 7.51658L13.0002 7.52998H13.0001V8.52998C13.0001 9.07217 12.568 9.51559 12.026 9.52965C10.1038 9.57949 8.19909 9.15317 6.48152 8.28866C5.33595 7.71206 4.29735 6.95247 3.40475 6.04359Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7425">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
