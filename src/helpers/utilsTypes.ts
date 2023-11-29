import { ImageSourcePropType } from 'react-native';

export type ImageType = {
  imgRoute?: ImageSourcePropType;
  imgWidth?: string | number;
  imgHeight?: string | number;
  imgMarginRight?: string | number;
};

export type DeviceType = 'tablet' | 'mobile' | 'web';
