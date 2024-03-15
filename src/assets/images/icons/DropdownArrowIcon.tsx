import React from 'react';
import { ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { PRIMARY_100 } from '../../../styles/colors';

export interface SvgImageProps {
    style?: any;
    fill?: string;
}

export const DropdownArrowIcon = ({ style, fill = PRIMARY_100 }: SvgImageProps) => {
    const width = sizeSvg(style?.width, 24);
    const height = sizeSvg(style?.height, 24);

    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            style={style}
        >
            <Path
                d="M6 9L12 15L18 9"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
