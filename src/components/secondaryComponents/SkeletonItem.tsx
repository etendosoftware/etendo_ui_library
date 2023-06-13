import { View, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const SkeletonItem = ({ width, height, color, borderRadius, delay }: any) => {
  const opacity = useRef(new Animated.Value(0.5)).current;
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) { // Aplicar el delay solo una vez al inicio
      Animated.timing(opacity, {
        toValue: 0.5,
        useNativeDriver: false,
        duration: delay,
      }).start(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacity, {
              toValue: 1,
              useNativeDriver: false,
              duration: 600,
            }),
            Animated.timing(opacity, {
              toValue: 0.5,
              useNativeDriver: false,
              duration: 600,
            })
          ])
        ).start();
      });
      setHasStarted(true);
    }
  }, [hasStarted]);

  return (
    <Animated.View style={{ width, height, backgroundColor: color, opacity,borderRadius:borderRadius }}>
      <View style={{ width: '100%', height: '100%' }} />
    </Animated.View>
  );
};

export default SkeletonItem;