import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
    style?: ImageStyle;
    fill?: string;
}

export const CheckCircleIcon = ({
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
            style={style}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.999 1C5.92389 1 0.999023 5.92487 0.999023 12C0.999023 18.0751 5.92389 23 11.999 23C18.0742 23 22.999 18.0751 22.999 12C22.999 5.92487 18.0742 1 11.999 1ZM17.4334 9.70711C17.8239 9.31658 17.8239 8.68342 17.4334 8.29289C17.0429 7.90237 16.4097 7.90237 16.0192 8.29289L10.7263 13.5858L8.70613 11.5656C8.31561 11.1751 7.68244 11.1751 7.29192 11.5656C6.90139 11.9561 6.90139 12.5893 7.29192 12.9798L10.0192 15.7071C10.4097 16.0976 11.0429 16.0976 11.4334 15.7071L17.4334 9.70711Z"
                fill={fill}
            />
        </Svg>
    );
};
