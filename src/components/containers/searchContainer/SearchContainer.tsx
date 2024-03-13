import React, { FC, SetStateAction, useState } from 'react';
import { View } from 'react-native';
import { DEFAULT_SEARCH_CONTAINER } from './SearchContainer.default';
import { ISearchContainer } from './SearchContainer.types';

import { styles } from './SearchContainer.styles';
import { Input } from '../../input';
import { GridContainer } from '../';

const SearchContainer: FC<ISearchContainer> = ({
  value,
  buttons,
  style,
  onSubmit,
  placeholder = '',
  height = 50,
  widthSearchInput,
}) => {
  const [valueContainer, setValueContainer] = useState(value ? value : '');
  return (
    <View style={[DEFAULT_SEARCH_CONTAINER, style]}>
      <View
        style={[
          styles.inputContainer,
          widthSearchInput ? { width: widthSearchInput } : null,
        ]}>
        <Input
          value={valueContainer}
          onChangeText={(valueChange: SetStateAction<string>) => {
            setValueContainer(valueChange);
          }}
          onSubmit={() => onSubmit(valueContainer)}
          placeholder={placeholder}
          typeField="textInputSearch"
          height={height}
        />
      </View>
      <View style={styles.spacing} />
      <GridContainer components={buttons} />
    </View>
  );
};

export default SearchContainer;
