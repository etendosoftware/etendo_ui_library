import React from 'react';
import {Platform, View} from 'react-native';

export const ViewEtendo = (props: any) => {
  if (Platform.OS === 'web') {
    return (
      <div style={{...props.style, ...{display: 'flex'}}}>{props.children}</div>
    );
  } else {
    return (
      <View style={{...props.style, ...{display: 'flex'}}}>
        {props.children}
      </View>
    );
  }
};
