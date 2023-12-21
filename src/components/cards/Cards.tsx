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
import { MoreIcon } from '../../assets/images/icons';
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
}: CardsProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <View
      onLayout={onLayout}
      style={[
        { maxHeight: cardsHeight },
        styles.container,
        { backgroundColor },
      ]}>
      {(title || onAddNewData) && (
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
                iconLeft={<MoreIcon style={styles.plus} />}
              />
            )}
          </View>
        </View>
      )}
      <ScrollView
        ref={scrollViewRef}
        style={styles.containerFlex}
        onScroll={onScroll}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
        onContentSizeChange={(_contentWidth, contentHeightChange) =>
          setContentHeight(contentHeightChange)
        }>
        <SwitchStateCards
          data={data}
          isLoading={isLoading}
          metadata={metadata}
          onPressCard={onPressCard}
          commentEmptyCards={commentEmptyCards}
          textEmptyCards={textEmptyCards}
          tableHeight={containerHeight}
          isTitle={!!title && !!onAddNewData}
        />
        {!!data.length && isLoading && isLoadingMoreData && <SkeletonCard />}
      </ScrollView>
    </View>
  );
};

export default Cards;
