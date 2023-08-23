import { NEUTRAL_0, TERTIARY_30 } from '../styles/colors';
import { Dimensions, PixelRatio, Platform, ViewStyle } from 'react-native';
// getting screen width and height
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const isWeb = Platform.OS === 'web';

export const removeHeaderBorder = (header?: string) => {
  return (
    !header && {
      borderTopWidth: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    }
  );
};
export const paintOddRows = (index: number) => {
  return index % 2 !== 0
    ? { backgroundColor: TERTIARY_30 }
    : { backgroundColor: NEUTRAL_0 };
};

// function that allows to know if the screen of the device is a cell phone or a tablet
export const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (
    pixelDensity < 1.75 &&
    (adjustedWidth >= 1000 || adjustedHeight >= 1000)
  ) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
};

export const isDeviceTablet = isTablet();

export const disableOutline = (): ViewStyle | undefined => {
  if (isWeb) {
    return { outline: 'none' } as ViewStyle;
  }
};
