import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { NEUTRAL_800 } from '../../../styles/colors';

export interface SvgImageProps {
    style?: any;
    fill?: string;
}

export const WorldIcon = ({
    style,
    fill = NEUTRAL_800,
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
            <Path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <Path
                d="M2 12H22"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <Path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </Svg>
    );
};