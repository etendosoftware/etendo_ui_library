import React from 'react';
import { ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
    style?: ImageStyle;
    fill?: string;
}

export const DeleteIcon = ({ style, fill = '#202452' }: SvgImageProps) => {
    const width = sizeSvg(style?.width, 32);
    const height = sizeSvg(style?.height, 32);
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            style={style}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4711 3.52859C12.7314 3.78894 12.7314 4.21105 12.4711 4.4714L4.47065 12.4714C4.21029 12.7317 3.78816 12.7317 3.52779 12.4714C3.26743 12.2111 3.26743 11.7889 3.52779 11.5286L11.5282 3.52859C11.7886 3.26824 12.2107 3.26824 12.4711 3.52859Z"
                fill={fill}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.52779 3.52859C3.78816 3.26824 4.21029 3.26824 4.47065 3.52859L12.4711 11.5286C12.7314 11.7889 12.7314 12.2111 12.4711 12.4714C12.2107 12.7317 11.7886 12.7317 11.5282 12.4714L3.52779 4.4714C3.26743 4.21105 3.26743 3.78894 3.52779 3.52859Z"
                fill={fill}
            />
        </Svg>
    );
};
