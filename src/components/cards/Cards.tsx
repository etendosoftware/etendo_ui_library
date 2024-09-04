/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from 'react-native';
import {styles} from './Cards.style';
import SkeletonCard from './components/card/components/skeletonCard/SkeletonCard';
import SwitchStateCards from './components/card/components/switchStateCards/SwitchStateCards';
import {Button} from '../button';
import {PlusIcon, TrashIcon} from '../../assets/images/icons';
import {CardsProps} from './Cards.types';
import {Modal} from '../modal';
import CARDS from './Cards.constants';
const {
  TITLE,
  SUBTITLE,
  LABEL_ACTION_BUTTON,
  LABEL_CLOSE_BUTTON,
  SELECTED_LABEL,
  CANCEL_SELECTED_LABEL,
} = CARDS;

const Cards = ({
  data,
  metadata,
  title,
  onPressCard,
  cardsHeight,
  textEmptyCards,
  commentEmptyCards,
  onAddNewData,
  backgroundColor,
  pageSize,
  onDeleteData,
  onFetchData,
  titleModal,
  subtitleModal,
  labelActionButtonModal,
  labelCloseButtonModal,
  selectionLabel = SELECTED_LABEL,
  cancelSelectionLabel = CANCEL_SELECTED_LABEL,
  isSelectionMode = false,
  isResetFetching = true,
  maxTitles,
  maxRows
}: CardsProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [dataList, setDataList] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitial, setIsInitial] = useState<boolean>(isResetFetching);
  const [isLoadMoreData, setIsLoadMoreData] = useState<boolean>(true);
  const [updating, setUpdating] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (isInitial) {
      setDataList([]);
      setIsLoadMoreData(true);
      handleLoadMore(0, [], true);
    }
    setIsInitial(true);
  }, [isResetFetching]);

  useEffect(() => {
    if (data) {
      setDataList(data);
    }
  }, [data]);

  useEffect(() => {
    if (updating) {
      setTimeout(() => {
        setUpdating(false);
      }, 100);
    }
  }, [updating]);

  useEffect(() => {
    if (isLoading && dataList.length && !updating) {
      scrollViewRef.current?.scrollToEnd({animated: true});
    }
    console.log(isLoading)
  }, [isLoading]);

  const handleLoadMore = async (
    currentPage: number,
    prevData: any[],
    isLoadingMore: boolean,
  ) => {
    if (!isLoading && onFetchData && isLoadingMore && !data) {
      await fetchMordeData(currentPage, prevData);
    }
  };

  const handleItemsSelected = (item: any) => {
    if (isSelectionMode) {
      setSelectedItem(item);
      setSelectionMode(true);
      const selectedItemsSet = new Set(selectedItems);
      if (selectedItemsSet.size > 0) {
        selectedItemsSet.clear();
      } else {
        selectedItemsSet.add(item);
      }

      if (selectedItemsSet.size === 0) {
        handleCancelSelectionMode();
      }

      setSelectedItems(Array.from(selectedItemsSet));
    }
  };

  const isAtEndOfScroll = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height;
  };

  const onScroll = async (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isAtEndOfScroll(event.nativeEvent) && !isLoading && !updating) {
      await handleLoadMore(currentPage, dataList, isLoadMoreData);
    }
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  const handleCancelSelectionMode = (isCancelAction: boolean = true) => {
    setSelectionMode(false);
    setSelectedItems([]);
    setSelectedItem(null);
    if (!isCancelAction) {
      setDataList(dataList.filter(item => item !== selectedItem));
    }
  };

  const handleDeleteSelectedItems = (itemsToSend: any) => {
    onDeleteData && onDeleteData(itemsToSend);
    handleCancelSelectionMode(false);
    setShowModal(false);
  };

  const fetchMordeData = async (currentPage: number, prevData: any[]) => {
    if (onFetchData) {
      setIsLoading(true);
      await onFetchData(currentPage, pageSize)
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
          setUpdating(true);
        });
    }
  };

  const handleTitleText = (): React.ReactElement | undefined => {
    let displayTitle: string | undefined = title;

    let itemCount: string = `(${dataList?.length.toString()})`;
    if (!title) {
      itemCount = '';
      displayTitle = '';
    }
    if (!title && !isSelectionMode) {
      return;
    }

    if (isSelectionMode && selectionMode) {
      itemCount = `(${selectedItems?.length.toString()})`;
      displayTitle = selectionLabel;
    }

    const textStyle = {
      ...styles.title,
      marginHorizontal: selectionMode ? 8 : 0,
    };

    return <Text style={textStyle}>{`${displayTitle} ${itemCount}`}</Text>;
  };

  return (
    <View
      onLayout={onLayout}
      style={[
        {maxHeight: cardsHeight, height: cardsHeight},
        styles.container,
        {backgroundColor},
      ]}>
      <View style={styles.selectionModeContainer}>
        {isSelectionMode && selectionMode && (
          <Button
            onPress={() => setShowModal(true)}
            typeStyle={'primary'}
            height={40}
            width={40}
            iconLeft={<TrashIcon style={styles.icon} />}
          />
        )}
        {handleTitleText()}
        {isSelectionMode && selectionMode ? (
          <Button
            onPress={() => handleCancelSelectionMode()}
            typeStyle={'white'}
            text={cancelSelectionLabel}
            height={40}
            paddingVertical={5}
          />
        ) : (
          onAddNewData && (
            <Button
              onPress={onAddNewData}
              typeStyle={'primary'}
              height={40}
              width={40}
              iconLeft={<PlusIcon style={styles.icon} />}
            />
          )
        )}
      </View>
      <ScrollView
        nestedScrollEnabled
        ref={scrollViewRef}
        style={styles.containerFlex}
        scrollEventThrottle={16}
        onScroll={onScroll}>
        <SwitchStateCards
          data={dataList}
          isLoading={isLoading}
          metadata={metadata}
          onPressCard={onPressCard}
          commentEmptyCards={commentEmptyCards}
          textEmptyCards={textEmptyCards}
          tableHeight={containerHeight}
          isTitle={!!title && !!onAddNewData}
          onHoldCard={setSelectionMode}
          isSelectionMode={isSelectionMode && selectionMode}
          handleItemsSelected={handleItemsSelected}
          maxTitles={maxTitles}
          maxRows={maxRows}
        />
        {!!dataList.length && isLoading && <SkeletonCard />}
      </ScrollView>
      {selectedItem && (
        <Modal
          showModal={setShowModal}
          visible={showModal}
          handleAction={() => handleDeleteSelectedItems(selectedItem)}
          title={titleModal ?? TITLE}
          subtitle={subtitleModal ?? SUBTITLE}
          labelActionButton={labelActionButtonModal ?? LABEL_ACTION_BUTTON}
          labelCloseButton={labelCloseButtonModal ?? LABEL_CLOSE_BUTTON}
          imageHeader={<TrashIcon />}
        />
      )}
    </View>
  );
};
export default Cards;
