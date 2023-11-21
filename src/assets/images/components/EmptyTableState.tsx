import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, Pattern, Image as SvgImage } from 'react-native-svg';
import { isDeviceTablet } from '../../../helpers/table_utils';

const EmptyTableState = () => {
  return (
    <View>
      <Svg width={330} height={150} viewBox="0 0 330 150" fill="none">
        <Defs>
          <Pattern width="1" height="1">
            <SvgImage
              href={{ uri: './empty-state-tabla.svg' }}
              width={isDeviceTablet ? '50%' : '70%'}
              height={isDeviceTablet ? '100%' : '50%'}
              preserveAspectRatio="xMidYMid slice"
            />
          </Pattern>
        </Defs>
      </Svg>
    </View>
  );
};

export default EmptyTableState;
