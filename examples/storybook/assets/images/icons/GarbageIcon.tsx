import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const GarbageIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 27);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 27 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.7345 7.25844C24.7349 12.5324 24.736 21.1419 24.7343 26.132C24.7331 29.5421 22.2742 31.9973 18.8599 31.9987C15.0703 32.0002 11.1711 32.0007 7.32673 31.9985C3.95137 31.9964 1.48886 29.5266 1.48658 26.1435C1.48495 23.5675 1.48631 20.9914 1.48658 18.4154C1.48677 15.9254 1.48804 10.2969 1.48631 7.2599C0.795725 7.21916 0.248913 6.82812 0.0725841 6.13263C-0.104564 5.50424 0.203899 4.82666 0.81555 4.53384C1.06345 4.41517 1.36673 4.36806 1.68146 4.36561C3.34091 4.35069 5.03654 4.38016 6.73218 4.38016C6.89623 4.38016 7.06028 4.38016 7.29217 4.38016C7.29217 3.3963 7.28944 2.50446 7.29281 1.61263C7.29663 0.588758 7.87663 0.0414916 8.88814 0.0278509C11.704 -0.00943382 14.5199 -0.00943382 17.3358 0.0287603C18.3455 0.042401 18.9688 0.590304 19.0043 1.61509C18.9312 2.50674 18.9288 3.39839 18.9288 4.33532C19.1241 4.34396 19.2926 4.36924 19.4447 4.37106C21.1554 4.38561 22.8663 4.37379 24.577 4.39107C25.5459 4.40926 26.1947 4.9538 26.1884 5.82044C26.1825 6.62615 25.5967 7.20361 24.7345 7.25844ZM15.9748 2.92851C14.0409 2.92851 12.1446 2.92851 10.2307 2.92851C10.2307 3.40375 10.2307 3.85026 10.2307 4.32605C12.1792 4.32605 14.0746 4.32605 15.9748 4.32605C15.9748 3.83607 15.9748 3.37856 15.9748 2.92851ZM21.8265 7.2639C16.0634 7.26508 10.2037 7.26508 4.39224 7.2639C4.38761 11.9743 4.38615 19.7936 4.39352 24.2529C4.39506 25.135 4.35514 26.0137 4.48927 26.9039C4.67943 28.1652 5.81161 29.0783 7.0882 29.0832C11.0989 29.169 15.11 29.101 19.1207 29.0829C20.723 29.076 21.8258 27.8777 21.8271 26.2447C21.8425 21.1684 21.8934 12.6189 21.8265 7.2639ZM16.3474 24.6826C15.7202 24.842 15.0367 24.6303 14.8257 23.9469C14.6263 23.699 14.577 23.3957 14.5744 23.1169C14.5983 21.4651 14.5669 19.8132 14.5669 18.1613C14.5668 16.5246 14.5645 14.8879 14.5677 13.2512C14.5696 12.2811 15.1604 11.6275 16.022 11.6398C16.8822 11.6643 17.5065 12.2894 17.5129 13.262C17.5347 16.5657 17.5438 19.8694 17.5029 23.1732C17.4929 23.9656 17.0589 24.5018 16.3474 24.6826ZM11.6938 23.2698C11.681 23.9593 11.2494 24.4631 10.6158 24.6548C10.0241 24.8384 9.35338 24.6648 9.02527 24.1529C8.86868 23.8369 8.76174 23.5028 8.7601 23.2023C8.80648 19.8531 8.74446 16.5039 8.75128 13.1547C8.7531 12.2662 9.38712 11.6233 10.2148 11.6489C11.0467 11.708 11.6774 12.3336 11.7165 13.1857C11.6591 14.8588 11.6539 16.5411 11.7338 18.2232C11.7301 19.9054 11.6607 21.5877 11.6938 23.2698Z"
        fill={fill}
      />
    </Svg>
  );
};
