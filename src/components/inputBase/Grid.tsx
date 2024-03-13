import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  gap: number;
  components: ReactNode[];
};

export const Grid = ({ gap, components }: Props) => {
  const Styles = StyleSheet.create({
    Container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -(gap / 2),
      marginVertical: -(gap / 2),
    },
    Child: {
      marginHorizontal: gap / 2,
      marginVertical: gap / 2,
    },
  });

  return (
    <View style={Styles.Container}>
      {components.map((item, index) => (
        <View key={index} style={Styles.Child}>
          {item}
        </View>
      ))}
    </View>
  );
};
