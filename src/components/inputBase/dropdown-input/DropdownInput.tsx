import React, { useRef, useEffect, useCallback, useState } from 'react';
import {
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TextInput,
} from 'react-native';
import InputBase from '../InputBase';
import { IDropdownInput } from './DropdownInput.types';
import { Button } from '../../button';
import { ChevronDownIcon, ChevronUpIcon } from '../../../assets/images/icons';
import { isWebPlatform } from '../../../helpers/functions_utils';
import InputOptions from './components/DropdownInputOptions/DropdownInputOptions';
import {
  BUFFER,
  DISPLAY_MODE,
  MAX_VISIBLE_OPTION,
  NO_RESULT_TEXT,
  PAGE_SIZE,
  SEARCH_PLACEHOLDER,
} from './DropdownInput.constants';

const DropdownInput = ({
  staticData,
  displayKey,
  onSelect,
  value,
  maxVisibleOptions = MAX_VISIBLE_OPTION,
  onFetchData,
  pageSize = PAGE_SIZE,
  searchPlaceholder = SEARCH_PLACEHOLDER,
  noResultsText = NO_RESULT_TEXT,
  displayMode = DISPLAY_MODE,
  ...inputBaseProps
}: IDropdownInput) => {
  const ref = useRef<View>(null);
  const refInput = useRef<TextInput>(null);
  const [isVisibleDropdown, setIsVisibleDropdown] = useState<boolean>(false);
  const [dataList, setDataList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadMoreData, setIsLoadMoreData] = useState<boolean>(true);
  const [heightOptions, setHeightOptions] = useState<number>(0);
  const [isModalUp, setIsModalUp] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');

  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({ top: 0, left: 0, width: 0 });

  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

  const adjustDropdownPosition = useCallback(() => {
    if (isVisibleDropdown && ref.current) {
      ref.current.measure((x, y, width, height, pageX, pageY) => {
        const spaceBelow = windowHeight - (pageY + height);
        if (heightOptions + 16 > spaceBelow) {
          setModalPosition({
            top: pageY - heightOptions - 16,
            left: pageX,
            width: width,
          });
          setIsModalUp(true);
        } else {
          setModalPosition({ top: pageY + height, left: pageX, width: width });
          setIsModalUp(false);
        }
      });
    }
  }, [isVisibleDropdown, heightOptions, windowHeight]);

  useEffect(() => {
    setHeightOptions(
      maxVisibleOptions && dataList && dataList?.length <= maxVisibleOptions
        ? 48 + 48 + 16
        : maxVisibleOptions && maxVisibleOptions * 48 + 48 + 16,
    );
  }, [dataList, isVisibleDropdown, isLoading]);

  useEffect(() => {
    if (!!staticData) {
      setDataList(staticData);
    }
  }, [staticData]);

  useEffect(() => {
    setDataList([])
    if (isVisibleDropdown) {
      fetchMordeData(0, dataList, isLoadMoreData, '');
    }
  }, [isVisibleDropdown]);

  useEffect(() => {
    adjustDropdownPosition();

    const handleScroll = () => {
      if (isVisibleDropdown) {
        adjustDropdownPosition();
      }
    };

    if (isWebPlatform()) {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isVisibleDropdown, adjustDropdownPosition]);

  const onSelectOption = (item: any) => {
    onSelect?.(item);
    setIsVisibleDropdown(false);

    if (refInput.current) {
      refInput.current.setNativeProps({
        selection: { start: 0, end: 0 },
      });
    }
  };
  const onScroll = async (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isAtEndOfScroll(event.nativeEvent) && !isLoading) {
      fetchMordeData(currentPage, dataList, isLoadMoreData, filterText);
    }
  };
  const fetchMordeData = async (
    currentPage: number,
    prevData: any[],
    isLoadMoreData?: boolean,
    filterText?: string,
  ) => {
    if (!isLoading && onFetchData && isLoadMoreData && !staticData) {
      setIsLoading(true);
      await onFetchData(currentPage, pageSize, filterText)
        .then((res: any) => {
          if (res.length === 0) {
            setIsLoadMoreData(false);
            return;
          }
          setDataList([...prevData, ...res]);
        })
        .finally(() => {
          setCurrentPage(currentPage + 1);
          setIsLoading(false);
        });
    }
  };

  const isAtEndOfScroll = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - BUFFER
    );
  };
  const handleOnFilterTextChange = (value: string) => {
    setDataList([]);
    setCurrentPage(0);
    setIsLoadMoreData(true);
    setFilterText(value);
    fetchMordeData(0, [], true, value);
  };

  return (
    <>
      <View
        onLayout={() => {
          adjustDropdownPosition();
        }}>
        <InputBase
          refInput={refInput}
          refInputContainer={ref}
          {...inputBaseProps}
          rightButtons={[
            <Button
              onPress={() => {
                setIsVisibleDropdown(prev => !prev);
              }}
              typeStyle={'primary'}
              iconLeft={
                isVisibleDropdown ? <ChevronUpIcon /> : <ChevronDownIcon />
              }
            />,
          ]}
          value={value?.toString()}
          onPress={() => {
            setIsVisibleDropdown(prev => !prev);
          }}
        />
      </View>
      {isVisibleDropdown && !!modalPosition.width && (
        <InputOptions
          isVisibleDropdown
          onClose={() => {
            setIsVisibleDropdown(false);
          }}
          value={value}
          onSelectOption={onSelectOption}
          modalPosition={modalPosition}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          data={dataList}
          displayKey={displayKey}
          maxVisibleOptions={maxVisibleOptions}
          onScroll={onScroll}
          isLoading={isLoading}
          isStaticData={staticData !== undefined}
          searchPlaceholder={searchPlaceholder}
          onFilterTextChange={handleOnFilterTextChange}
          noResultsText={noResultsText}
          isModalUp={isModalUp}
          displayMode={displayMode}
        />
      )}
    </>
  );
};

export default DropdownInput;
