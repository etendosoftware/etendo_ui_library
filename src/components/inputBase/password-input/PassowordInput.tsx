import React, { useState } from 'react';
import { Button } from '../../button';
import InputBase from '../InputBase';
import { IPasswordInput } from './PasswordInput.types';
import { EyeIcon, EyeOffIcon } from '../../../assets/images/icons';
import { styles } from './PasswordInput.style';

const PassowordInput = ({ ...inputBaseProps }: IPasswordInput) => {
  const handleOnPress = () => {
    setIsVisiblePassword(prev => !prev)
  };
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)
  
  return (
    <InputBase
      secureTextEntry={!isVisiblePassword}
      {...inputBaseProps}
      rightButtons={[
        <Button
          typeStyle={'white'}
          paddingHorizontal={5}
          paddingVertical={5}
          onPress={handleOnPress}
          iconLeft={isVisiblePassword? <EyeIcon style={styles.icon}/>: <EyeOffIcon style={styles.icon}/>}
        />,
      ]}
    />
  );
};

export default PassowordInput;
