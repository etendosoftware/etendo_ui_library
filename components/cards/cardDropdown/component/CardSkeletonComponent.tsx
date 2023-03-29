import { View, StyleSheet, Animated, Platform } from 'react-native';
import React, { useEffect, useRef } from 'react';
import  LinearGradient from 'react-native-linear-gradient';
const CardSkeletonComponent = ({ width, height, color, style }: any) => {
  const translateX = useRef(new Animated.Value(-width)).current;
  const isWeb = Platform.OS === 'web'
  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: false, 
        duration: 1200,
      })
    ).start();
  }, [width]);

  return (
    <View style={StyleSheet.flatten([{ width, height, backgroundColor: color, overflow: 'hidden' }, style])}>
      <Animated.View style={{ width: '100%', height: '100%', transform: [{ translateX: translateX }] }}>
        <LinearGradient style={{ width: '100%', height: '100%' }} colors={['transparent', 'rgba(255, 255, 255, 0.5)', 'transparent']} start={{ x: 1, y: 1 }} />
      </Animated.View>
    </View>
  );
};

export default CardSkeletonComponent;