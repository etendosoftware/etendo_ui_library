import React from 'react';
import { ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
    style?: ImageStyle;
    fill?: string;
}

export const CopyIcon = ({
    style,
    fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
    const width = sizeSvg(style?.width, 16);
    const height = sizeSvg(style?.height, 16);

    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            style={style}>
            <Path
                d="M6.1335 12.8001C5.6935 12.8001 5.3167 12.6435 5.0031 12.3305C4.6895 12.0174 4.53296 11.6406 4.5335 11.2001V1.60006C4.5335 1.16006 4.6903 0.783262 5.0039 0.469662C5.3175 0.156062 5.69403 -0.00047094 6.1335 6.23934e-05H13.3335C13.7735 6.23934e-05 14.1503 0.156862 14.4639 0.470462C14.7775 0.784062 14.934 1.1606 14.9335 1.60006V11.2001C14.9335 11.6401 14.7767 12.0169 14.4631 12.3305C14.1495 12.6441 13.773 12.8006 13.3335 12.8001H6.1335ZM6.1335 11.2001H13.3335V1.60006H6.1335V11.2001ZM2.9335 16.0001C2.4935 16.0001 2.1167 15.8435 1.8031 15.5305C1.4895 15.2174 1.33296 14.8406 1.3335 14.4001V4.00006C1.3335 3.77339 1.4103 3.58326 1.5639 3.42966C1.7175 3.27606 1.90736 3.19953 2.1335 3.20006C2.36016 3.20006 2.5503 3.27686 2.7039 3.43046C2.8575 3.58406 2.93403 3.77393 2.9335 4.00006V14.4001H10.9335C11.1602 14.4001 11.3503 14.4769 11.5039 14.6305C11.6575 14.7841 11.734 14.9739 11.7335 15.2001C11.7335 15.4267 11.6567 15.6169 11.5031 15.7705C11.3495 15.9241 11.1596 16.0006 10.9335 16.0001H2.9335Z"
                fill={fill}
            />
        </Svg>
    );
};
