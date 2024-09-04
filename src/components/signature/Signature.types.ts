import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface SignaturePadProps {
  containerStyle?: StyleProp<ViewStyle>;
  strokeColor?: string;
  strokeWidth?: number;
  saveButtonLabel?: string;
  clearButtonLabel?: string;
  saveFormat?: 'svg' | 'base64';
  saveHeightSvg?: number;
  saveWidthSvg?: number;
  onSave?: (base64Svg: string) => void;
  onClear?: () => void;
  onStart?: (event: GestureResponderEvent) => void;
  onMove?: (event: GestureResponderEvent) => void;
  onEnd?: () => void;
  renderSaveButton?: (onPress: () => void) => React.ReactNode;
  renderClearButton?: (onPress: () => void) => React.ReactNode;
}
