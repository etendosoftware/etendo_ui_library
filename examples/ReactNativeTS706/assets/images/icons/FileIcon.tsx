import React from 'react';
import { ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
    style?: ImageStyle;
    fill?: string;
}

export const FileIcon = ({ style, fill = '#121212' }: SvgImageProps) => {
    const width = sizeSvg(style?.width || 32);
    const height = sizeSvg(style?.height || 32);

    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="none"
            style={style}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2H26C26.5304 2 27.0391 2.21071 27.4142 2.58579L41.4142 16.5858C41.7893 16.9609 42 17.4696 42 18V40C42 41.5913 41.3679 43.1174 40.2426 44.2426C39.1174 45.3679 37.5913 46 36 46H12C10.4087 46 8.88258 45.3679 7.75736 44.2426C6.63214 43.1174 6 41.5913 6 40V8C6 6.4087 6.63214 4.88258 7.75736 3.75736ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8V40C10 40.5304 10.2107 41.0391 10.5858 41.4142C10.9609 41.7893 11.4696 42 12 42H36C36.5304 42 37.0391 41.7893 37.4142 41.4142C37.7893 41.0391 38 40.5304 38 40V18.8284L25.1716 6H12Z"
                fill={fill}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26 2C27.1046 2 28 2.89543 28 4V16H40C41.1046 16 42 16.8954 42 18C42 19.1046 41.1046 20 40 20H26C24.8954 20 24 19.1046 24 18V4C24 2.89543 24.8954 2 26 2Z"
                fill={fill}
            />
        </Svg>
    );
};
