import React from 'react';
import Svg, { Line, Path } from 'react-native-svg';
import { isDeviceTablet } from '../../../helpers/table_utils';

const EmptyTableState = () => {
  const originalWidth = 268.5;
  const originalHeight = 92.8;
  const aspectRatio = originalWidth / originalHeight;
  return (
    <Svg
      viewBox="0 0 268.5 92.8"
      style={{
        width: '100%',
        aspectRatio,
        height: isDeviceTablet ? '35%' : '25%',
      }}>
      {/* Background Path */}
      <Path
        d="M8.5,0.5h229.4c4.4,0,8,3.6,8,8v32.6c0,4.4-3.6,8-8,8H8.5c-4.4,0-8-3.6-8-8V8.5C0.5,4.1,4.1,0.5,8.5,0.5z"
        fill="#F9F9F9"
        stroke="#D3D3D3"
        strokeMiterlimit="10"
      />

      {/* Blue Rectangles */}
      <Path
        d="M16.1,19.5h91.2c2.9,0,5.3,2.4,5.3,5.3l0,0c0,2.9-2.4,5.3-5.3,5.3H16.1c-2.9,0-5.3-2.4-5.3-5.3l0,0 C10.8,21.9,13.2,19.5,16.1,19.5z"
        fill="#C9D5E2"
      />
      <Path
        d="M137,19.5h33.7c2.9,0,5.3,2.4,5.3,5.3l0,0c0,2.9-2.4,5.3-5.3,5.3H137c-2.9,0-5.3-2.4-5.3-5.3l0,0 C131.7,21.9,134.1,19.5,137,19.5z"
        fillOpacity="0.5"
        fill="#C9D5E2"
      />
      <Path
        d="M196.8,19.5h33.7c2.9,0,5.3,2.4,5.3,5.3l0,0c0,2.9-2.4,5.3-5.3,5.3h-33.7c-2.9,0-5.3-2.4-5.3-5.3l0,0 C191.6,21.9,193.9,19.5,196.8,19.5z"
        fillOpacity="0.5"
        fill="#C9D5E2"
      />

      {/* Vertical Lines */}
      <Line
        x1="123.1"
        y1="0.5"
        x2="123.1"
        y2="49.1"
        stroke="#D3D3D3"
        strokeMiterlimit="10"
      />
      <Line
        x1="185.5"
        y1="0.5"
        x2="185.5"
        y2="49.1"
        stroke="#D3D3D3"
        strokeMiterlimit="10"
      />

      {/* Gray Rectangle */}
      <Path
        d="M28.6,44.2H250c6.6,0,12,5.4,12,12v24.6c0,6.6-5.4,12-12,12H28.6c-6.6,0-12-5.4-12-12V56.2 C16.6,49.6,22,44.2,28.6,44.2z"
        fillOpacity="0.4"
        fill="#E8E9EA"
      />

      {/* Foreground Path */}
      <Path
        d="M30.6,38.2H260c4.4,0,8,3.6,8,8v32.6c0,4.4-3.6,8-8,8H30.6c-4.4,0-8-3.6-8-8V46.2 C22.6,41.8,26.2,38.2,30.6,38.2z"
        fill="#F9F9F9"
        stroke="#D3D3D3"
        strokeMiterlimit="10"
      />

      {/* Blue Rectangles */}
      <Path
        d="M38.2,57.2h91.2c2.9,0,5.3,2.4,5.3,5.3l0,0c0,2.9-2.4,5.3-5.3,5.3H38.2c-2.9,0-5.3-2.4-5.3-5.3l0,0 C32.9,59.6,35.3,57.2,38.2,57.2z"
        fill="#C9D5E2"
      />
      <Path
        d="M159.1,57.2h33.7c2.9,0,5.3,2.4,5.3,5.3l0,0c0,2.9-2.4,5.3-5.3,5.3h-33.7c-2.9,0-5.3-2.4-5.3-5.3l0,0 C153.8,59.6,156.2,57.2,159.1,57.2z"
        fillOpacity="0.5"
        fill="#C9D5E2"
      />
      <Path
        d="M218.9,57.2h33.7c2.9,0,5.3,2.4,5.3,5.3l0,0c0,2.9-2.4,5.3-5.3,5.3h-33.7c-2.9,0-5.3-2.4-5.3-5.3l0,0 C213.7,59.6,216,57.2,218.9,57.2z"
        fillOpacity="0.5"
        fill="#C9D5E2"
      />

      {/* Vertical Lines */}
      <Line
        x1="145.2"
        y1="38.2"
        x2="145.2"
        y2="86.8"
        stroke="#D3D3D3"
        strokeMiterlimit="10"
      />
      <Line
        x1="207.6"
        y1="38.2"
        x2="207.6"
        y2="86.8"
        stroke="#D3D3D3"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};
export default EmptyTableState;
