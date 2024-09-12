import React, { useRef, useState } from 'react';
import { GestureResponderEvent, View, LayoutChangeEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { encodeBase64 } from '../../helpers/base64_utils';
import { styles } from './Signature.style';
import { ISignaturePadProps } from './Signature.types';
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
  FILL_DEFAULT,
} from './Signature.constants';
import SignatureButtons from './components/SignatureButtons';

const Signature: React.FC<ISignaturePadProps> = ({
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
  const [isDrawing, setIsDrawing] = useState(false);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSvgDimensions({ width, height });
  };

  const isWithinBounds = (x: number, y: number) => {
    return (
      x > 0 && x < svgDimensions.width && y > 0 && y < svgDimensions.height
    );
  };

  const handleTouchStart = (event: GestureResponderEvent) => {
    const { locationX, locationY } = event.nativeEvent;

    if (isWithinBounds(locationX, locationY)) {
      pathRef.current = `M${locationX},${locationY}`;
      setPathData(pathRef.current);
      setIsDrawing(true);
      onStart?.(event);
    }
  };

  const handleTouchMove = (event: GestureResponderEvent) => {
    if (!isDrawing) return;

    const { locationX, locationY } = event.nativeEvent;

    if (isWithinBounds(locationX, locationY)) {
      pathRef.current += ` L${locationX},${locationY}`;
      setPathData(pathRef.current);
      onMove?.(event);
    } else {
      setIsDrawing(false);
      handleTouchEnd();
    }
  };

  const handleTouchEnd = () => {
    if (isDrawing) {
      setPaths([...paths, pathRef.current]);
      pathRef.current = '';
      setPathData('');
      setIsDrawing(false);
      onEnd?.();
    }
  };

  const handleClear = () => {
    setPaths([]);
    setPathData('');
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
      <View style={styles.svgContainer}>
        <Svg
          onLayout={handleLayout}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {paths.map((d: string, index: number) => (
            <Path
              key={index + 'Signature'}
              d={d}
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
      </View>
      <SignatureButtons
        renderSaveButton={renderSaveButton}
        renderClearButton={renderClearButton}
        saveSignature={saveSignature}
        handleClear={handleClear}
        saveButtonLabel={saveButtonLabel}
        clearButtonLabel={clearButtonLabel}
      />
    </View>
  );
};

export default Signature;
