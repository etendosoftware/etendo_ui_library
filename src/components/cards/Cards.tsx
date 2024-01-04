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
}: CardsProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [dataList, setDataList] = useState<any[]>(
    data.map(item => ({ ...item, selected: false })),
  );

  // todo: delete this useeffect
  useEffect(() => {
    console.log('selectionMode', selectionMode ? '✅✅' : '❌❌');
  }, [selectionMode]);

  const handleItemsSelected = (item: any) => {
    console.log('item handleItemsSelected', item);
    const list = new Set(selectedItems);
    list.has(item) ? list.delete(item) : list.add(item);
    if (list.size === 0) {
      setSelectionMode(false);
    }
    setSelectedItems(Array.from(list));
  };

  useEffect(() => {
    console.log('🐬selectedItems🐬', selectedItems);
  }, [selectedItems]);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (isLoading && data.length) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [isLoading]);

  useEffect(() => {
    if (containerHeight > contentHeight && data.length) {
      handleLoadMore();
    }
  }, [containerHeight, contentHeight, data]);

  const handleLoadMore = async () => {
    if (!isLoading && onLoadMoreData && isLoadingMoreData) {
      onLoadMoreData(currentPage, pageSize);
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

  const handleCancelSelectionMode = () => {
    setSelectionMode(false);
    setSelectedItems([]);
  };

  return (
    <View
      onLayout={onLayout}
      style={[
        { maxHeight: cardsHeight },
        styles.container,
        { backgroundColor },
      ]}>
      {(title || onAddNewData) && !selectionMode && (
        <View style={styles.titleContainer}>
          {title && (
            <View style={styles.titleTextContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.title}> ({data.length})</Text>
            </View>
          )}
          <View style={styles.buttonContainer}>
            {onAddNewData && (
              <Button
                onPress={onAddNewData}
                typeStyle={'primary'}
                height={40}
                width={40}
                iconLeft={<MoreIcon style={styles.icon} />}
              />
            )}
          </View>
        </View>
      )}
      {selectionMode && (
        <View style={styles.selectionModeContainer}>
          <View style={styles.titleTextSelectionModeContainer}>
            <Button
              onPress={onDeleteData} // Improve this
              typeStyle={'primary'}
              height={40}
              width={40}
              iconLeft={<TrashIcon style={styles.icon} />}
            />
            <Text style={[styles.title, { marginHorizontal: 8 }]}>
              Selected ({selectedItems.length})
            </Text>
          </View>
          <Button
            onPress={() => handleCancelSelectionMode()}
            typeStyle={'white'}
            text="Cancel"
            height={40}
          />
        </View>
      )}

      <ScrollView
        ref={scrollViewRef}
        style={styles.containerFlex}
        onScroll={onScroll}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
        onContentSizeChange={(contentWidth, contentHeight) =>
          setContentHeight(contentHeight)
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
    </View>
  );
};

export default Cards;
