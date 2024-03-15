import React, { ReactElement } from 'react';
import InputBase from '../InputBase';
import {
  CheckCircleFillIcon,
  XCircleFillIcon,
} from '../../../assets/images/icons';
import { ITextInput } from './TextInput.types';
import { DANGER_600, SUCCESS_600 } from '../../../styles/colors';
import { View } from 'react-native';
import { styles } from './TextInput.style';
import { ButtonProps } from '../../button/Button.types';
import { SvgImageProps } from '../InputBase.types';

const TextInput = ({
  validation = 'none',
  rightButtons,
  ...inputBaseProps
}: ITextInput) => {
  const getValidation = (): ReactElement<ButtonProps | SvgImageProps>[] | undefined => {
    let icons: ReactElement<ButtonProps | SvgImageProps>[] = [];

    if (validation === 'success') {
      icons.push(
        <View style={styles.iconContainer}>
          <CheckCircleFillIcon
            fill={SUCCESS_600}
            style={styles.icon}
          />
        </View>,
      );
    } else if (validation === 'error') {
      icons.push(
        <View style={styles.iconContainer}>
          <XCircleFillIcon
            fill={DANGER_600}
            style={styles.icon}
          />
        </View>,
      );
    }

    if (rightButtons?.length) {
      icons.push(...rightButtons);
    }
    return icons?.length ? icons : undefined;
  };

  return <InputBase rightButtons={getValidation()} {...inputBaseProps} />;
};

export default TextInput;
