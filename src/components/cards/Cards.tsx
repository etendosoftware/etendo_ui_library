/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from 'react-native';
import { styles } from './Cards.style';
import SkeletonCard from './components/card/components/skeletonCard/SkeletonCard';
import SwitchStateCards from './components/card/components/switchStateCards/SwitchStateCards';
import { Button } from '../button';
import { MoreIcon, TrashIcon } from '../../assets/images/icons';
import { CardsProps } from './Cards.types';
import { Modal } from '../modal';
import CARDS from './Cards.constants';
const {
  TITLE,
  SUBTITLE,
  LABEL_ACTION_BUTTON,
  LABEL_CLOSE_BUTTON,
  SELECTED_LABEL,
  CANCEL_SELECTED_LABEL,
} = CARDS;

const SCROLL_EVENT_THROTTLE = 16;
const BUFFER = 50;

const Cards = ({
  data,
  metadata,
  title,
  onPressCard,
  cardsHeight,
  textEmptyCards,
  commentEmptyCards,
  onLoadMoreData,
  onAddNewData,
  backgroundColor,
  currentPage,
  pageSize,
  isLoading,
  isLoadingMoreData,
  onDeleteData,
  titleModal,
  subtitleModal,
  labelActionButtonModal,
  labelCloseButtonModal,
  selectionLabel,
  cancelSelectionLabel,
}: CardsProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [dataList, setDataList] = useState<any[]>(data);
  const [dataOG, setDataOG] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    setDataOG(data);
    setDataList(data);
  }, [data]);

  const handleItemsSelected = (item: any) => {
    setSelectedItem(item);

    const selectedItemsSet = new Set(selectedItems);
    const dataSet = new Set(dataList);
    if (selectedItemsSet.size > 0) {
      selectedItemsSet.clear();
    } else {
      selectedItemsSet.add(item);
      setDataList(
        Array.from(dataSet).map((item2: any) => {
          return { ...item2, isActive: item2._id === item._id };
        }),
      );
    }

    if (selectedItemsSet.size === 0) {
      handleCancelSelectionMode();
    }

    setSelectedItems(Array.from(selectedItemsSet));
  };

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (isLoading && data.length) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (containerHeight > contentHeight && data.length) {
      handleLoadMore();
    }
  }, [containerHeight, contentHeight, data]);

  const handleLoadMore = async () => {
    if (!isLoading && onLoadMoreData && isLoadingMoreData) {
      onLoadMoreData(currentPage!, pageSize!);
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

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isAtEndOfScroll(event.nativeEvent)) {
      handleLoadMore();
    }
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  const handleCancelSelectionMode = (isCancelAction: boolean = true) => {
    setSelectionMode(false);
    setSelectedItems([]);
    setSelectedItem(null);
    if (isCancelAction) {
      setDataList(dataOG);
    } else {
      setDataList(dataOG.filter(item => item !== selectedItem));
    }
  };

  const handleDeleteSelectedItems = (itemsToSend: any) => {
    onDeleteData && onDeleteData(itemsToSend);
    handleCancelSelectionMode(false);
    setShowModal(false);
  };

  return (
    <View
      onLayout={onLayout}
      style={[
        { maxHeight: cardsHeight },
        styles.container,
        { backgroundColor },
      ]}>
      <View style={styles.selectionModeContainer}>
        <View style={styles.titleTextSelectionModeContainer}>
          {selectionMode && (
            <Button
              onPress={() => setShowModal(true)}
              typeStyle={'primary'}
              height={40}
              width={40}
              iconLeft={<TrashIcon style={styles.icon} />}
            />
          )}
          <Text
            style={[styles.title, { marginHorizontal: selectionMode ? 8 : 0 }]}>
            {selectionMode
              ? `${selectionLabel || SELECTED_LABEL} (${selectedItems.length})`
              : `${title} (${dataList.length})`}
          </Text>
        </View>
        {selectionMode ? (
          <Button
            onPress={() => handleCancelSelectionMode()}
            typeStyle={'white'}
            text={cancelSelectionLabel || CANCEL_SELECTED_LABEL}
            height={40}
          />
        ) : onAddNewData ? (
          <Button
            onPress={onAddNewData}
            typeStyle={'primary'}
            height={40}
            width={40}
            iconLeft={<MoreIcon style={styles.icon} />}
          />
        ) : (
          <></>
        )}
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={[
          styles.containerFlex,
          { paddingHorizontal: dataList.length > 0 ? 16 : 0 },
        ]}
        onScroll={onScroll}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
        onContentSizeChange={(_contentWidth, contentHeightChange) =>
          setContentHeight(contentHeightChange)
        }>
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
          isSelectionMode={selectionMode}
          handleItemsSelected={handleItemsSelected}
        />
        {!!data.length && isLoading && isLoadingMoreData && <SkeletonCard />}
      </ScrollView>
      {selectedItem && (
        <Modal
          showModal={setShowModal}
          visible={showModal}
          handleAction={() => handleDeleteSelectedItems(selectedItem)}
          title={titleModal ? titleModal : TITLE}
          subtitle={subtitleModal ? subtitleModal : SUBTITLE}
          labelActionButton={
            labelActionButtonModal
              ? labelActionButtonModal
              : LABEL_ACTION_BUTTON
          }
          labelCloseButton={
            labelCloseButtonModal ? labelCloseButtonModal : LABEL_CLOSE_BUTTON
          }
          imageHeader={<TrashIcon />}
        />
      )}
    </View>
  );
};

export default Cards;
