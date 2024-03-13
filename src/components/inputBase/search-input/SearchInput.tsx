import React from 'react';
import InputBase from '../InputBase';
import { SearchIcon } from '../../../assets/images/icons';
import Button from '../../button/Button';
import { ISearchInput } from './SearchInput.types';
import { styles } from './SearchInput.style';

const SearchInput = ({ onSubmit, ...inputBaseProps }: ISearchInput) => {
  const handleOnPress = () => {
    if (onSubmit) {
      onSubmit(inputBaseProps?.value ?? '');
    }
  };
  return (
    <InputBase
      {...inputBaseProps}
      rightButtons={[
        <Button
          typeStyle={'white'}
          paddingHorizontal={0}
          paddingVertical={7}
          onPress={handleOnPress}
          iconLeft={<SearchIcon style={styles.icon} />}
        />
      ]}
    />
  );
};

export default SearchInput;
