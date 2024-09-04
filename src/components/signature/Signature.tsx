import React, { useRef, useState } from 'react';
import { GestureResponderEvent, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { encodeBase64 } from '../../helpers/base64_utils';
import { Button } from '../button';
import { styles } from './Signature.style';
import { SignaturePadProps } from './Signature.types';
import {
  CLEAR_BUTTON_LABEL_DEFAULT,
  SAVE_BUTTON_LABEL_DEFAULT,
  SAVE_FORMAT_DEFAULT,
  STROKE_COLOR_DEFAULT,
  STROKE_WIDTH_DEFAULT,
  SVG_BASE64_PREFIX,
  SVG_FOOTER,
  SAVE_HEIGHT_SVG_DEFAULT,
  SAVE_WIDTH_SVG_DEFAULT,
  SVG_XMLNS,
  WIDTH_BUTTON,
  TYPE_STYLE_BUTTON,
  FILL_DEFAULT,
} from './Signature.constants';

const SignaturePad: React.FC<SignaturePadProps> = ({
  containerStyle,
  strokeColor = STROKE_COLOR_DEFAULT,
  strokeWidth = STROKE_WIDTH_DEFAULT,
  saveButtonLabel = SAVE_BUTTON_LABEL_DEFAULT,
  clearButtonLabel = CLEAR_BUTTON_LABEL_DEFAULT,
  saveFormat = SAVE_FORMAT_DEFAULT,
  saveHeightSvg = SAVE_HEIGHT_SVG_DEFAULT,
  saveWidthSvg = SAVE_WIDTH_SVG_DEFAULT,
  onSave,
  onClear,
  onStart,
  onMove,
  onEnd,
  renderSaveButton,
  renderClearButton,
}) => {
  const [pathData, setPathData] = useState<string>('');
  const [paths, setPaths] = useState<string[]>([]);
  const pathRef = useRef<string>('');

  const handleTouchStart = (event: GestureResponderEvent) => {
    onStart?.(event);
    const { locationX, locationY } = event.nativeEvent;
    pathRef.current = `M${locationX},${locationY}`;
    setPathData(pathRef.current);
  };

  const handleTouchMove = (event: GestureResponderEvent) => {
    onMove?.(event);
    const { locationX, locationY } = event.nativeEvent;
    pathRef.current += ` L${locationX},${locationY}`;
    setPathData(pathRef.current);
  };

  const handleTouchEnd = () => {
    onEnd?.();
    setPaths([...paths, pathRef.current]);
    pathRef.current = '';
    setPathData('');
  };

  const handleClear = () => {
    setPaths([]);
    onClear?.();
  };

  const generateSvgString = () => {
    const svgHeader = `<svg xmlns="${SVG_XMLNS}" width="${saveWidthSvg}" height="${saveHeightSvg}">`;

    const pathElements = paths
      .map(
        (p: string) =>
          `<path d="${p}" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill=${FILL_DEFAULT}/>`,
      )
      .join('');
    return `${svgHeader}${pathElements}${SVG_FOOTER}`;
  };

  const saveSignature = async () => {
    const svgString = generateSvgString();

    switch (saveFormat) {
      case 'svg': {
        onSave?.(svgString);
        break;
      }
      case 'base64': {
        const base64Svg = `${SVG_BASE64_PREFIX},${encodeBase64(svgString)}`;
        onSave?.(base64Svg);
        break;
      }
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Svg
        style={styles.svg}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {paths.map((p: string, index: number) => (
          <Path
            key={index + 'Signature'}
            d={p}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={FILL_DEFAULT}
          />
        ))}
        <Path
          d={pathData}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill={FILL_DEFAULT}
        />
      </Svg>
      <View style={styles.buttons}>
        {renderSaveButton ? (
          renderSaveButton(saveSignature)
        ) : (
          <View style={[styles.buttonContainer, styles.buttonSpace]}>
            <Button
              text={saveButtonLabel}
              onPress={saveSignature}
              typeStyle={TYPE_STYLE_BUTTON}
              width={WIDTH_BUTTON}
            />
          </View>
        )}
        {renderClearButton ? (
          renderClearButton(handleClear)
        ) : (
          <View style={styles.buttonContainer}>
            <Button
              text={clearButtonLabel}
              onPress={handleClear}
              typeStyle={TYPE_STYLE_BUTTON}
              width={WIDTH_BUTTON}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SignaturePad;
