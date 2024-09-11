import React from 'react';
import {View} from 'react-native';
import {TYPE_STYLE_BUTTON, WIDTH_BUTTON} from '../Signature.constants';
import {Button} from '../../button';
import {styles} from '../Signature.style';
import {ISignatureButtonsProps} from '../Signature.types';

const SignatureButtons: React.FC<ISignatureButtonsProps> = ({
  renderSaveButton,
  renderClearButton,
  saveSignature,
  handleClear,
  saveButtonLabel,
  clearButtonLabel,
}) => {
  return (
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
  );
};

export default SignatureButtons;
