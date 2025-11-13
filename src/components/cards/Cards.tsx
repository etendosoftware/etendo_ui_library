import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from 'react-native';
import { styles } from './Cards.style';
import SwitchStateCards from './components/card/components/switchStateCards/SwitchStateCards';
import { Button } from '../button';
import { PlusIcon, SlashIcon } from '../../assets/images/icons';
import { CardsProps } from './Cards.types';
import { DEFAULT_MAX_ROWS, DEFAULT_MAX_TITLES } from './Cards.constants';
import SkeletonCard from './components/card/components/skeletonCard/SkeletonCard';

const Cards = ({
  data: staticData,
  metadata,
  title,
  onPressCard,
  textEmptyCards,
  commentEmptyCards,
  onPressButton,
  pageSize = 10,
  onFetchData,
  onSelectCard,
  onClearSelection,
  onChange,
  onSetValue,
  styleContainer,
  maxTitles = DEFAULT_MAX_TITLES,
  maxRows = DEFAULT_MAX_ROWS,
  isLoading: isLoadingStatic = false,
  isResetFetching = false,
  iconButton,
  scrollToIndex,
}: CardsProps) => {
  const [dataList, setDataList] = useState<unknown[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadMoreData, setIsLoadMoreData] = useState<boolean>(true);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const prevResetFetching = useRef<boolean>(isResetFetching);
  const isFirstRender = useRef<boolean>(true);
  const fetchIdRef = useRef<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const prevScrollToIndex = useRef<number | undefined>(scrollToIndex);

  const cardPositions = useRef<Map<number, number>>(new Map());
  const pendingScrollIndex = useRef<number | undefined>(undefined);
  const [selectedCardIndices, setSelectedCardIndices] = useState<Set<number>>(
    new Set(),
  );

  const hasExternalData = Array.isArray(staticData) && staticData.length > 0;

  useEffect(() => {
    if (Array.isArray(staticData)) {
      setDataList(staticData);
      cardPositions.current.clear();
      setSelectedCardIndices(new Set());
    }
  }, [staticData]);

  const onCardLayout = useCallback((index: number, y: number) => {
    cardPositions.current.set(index, y);

    if (pendingScrollIndex.current === index && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y,
        animated: true,
      });
      pendingScrollIndex.current = undefined;
    }
  }, []);

  useEffect(() => {
    if (
      scrollToIndex !== undefined &&
      scrollToIndex !== prevScrollToIndex.current &&
      scrollToIndex >= 0 &&
      scrollToIndex < dataList.length
    ) {
      const targetY = cardPositions.current.get(scrollToIndex);

      if (targetY !== undefined && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          y: targetY,
          animated: true,
        });
      } else {
        pendingScrollIndex.current = scrollToIndex;
      }
      if (onSelectCard) {
        setSelectedCardIndices(new Set([scrollToIndex]));
      }
      prevScrollToIndex.current = scrollToIndex;
    }
  }, [scrollToIndex, dataList.length, onSelectCard]);

  const fetchMoreData = useCallback(
    async (page: number, isReset: boolean = false) => {
      if (!onFetchData) {
        return;
      }

      const fetchId = ++fetchIdRef.current;
      setIsLoading(true);

      try {
        const res = await onFetchData(page, pageSize);

        if (fetchId !== fetchIdRef.current) {
          return;
        }

        if (!res || res.length === 0) {
          setIsLoadMoreData(false);
          return;
        }
        if (isReset) {
          setDataList(res);
          setCurrentPage(1);
          cardPositions.current.clear();
        } else {
          setDataList(prev => [...prev, ...res]);
          setCurrentPage(prev => prev + 1);
        }
        setIsLoadMoreData(true);
      } catch (e) {
        console.error('Error fetching data:', e);
        if (fetchId === fetchIdRef.current) {
          setIsLoadMoreData(false);
        }
      } finally {
        if (fetchId === fetchIdRef.current) {
          setIsLoading(false);
        }
      }
    },
    [onFetchData, pageSize],
  );

  const handleScroll = useCallback(
    async (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { layoutMeasurement, contentOffset, contentSize } =
        event.nativeEvent;
      const isBottom =
        layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

      if (
        !hasExternalData &&
        isBottom &&
        !isLoading &&
        isLoadMoreData &&
        onFetchData
      ) {
        await fetchMoreData(currentPage, false);
      }
    },
    [
      hasExternalData,
      isLoading,
      isLoadMoreData,
      onFetchData,
      fetchMoreData,
      currentPage,
    ],
  );

  useEffect(() => {
    if (
      !hasExternalData &&
      ((isFirstRender.current && isResetFetching) ||
        (!isFirstRender.current &&
          prevResetFetching.current !== isResetFetching))
    ) {
      setDataList([]);
      setCurrentPage(0);
      setIsLoadMoreData(true);
      fetchIdRef.current++;
      cardPositions.current.clear();
      setSelectedCardIndices(new Set());
      fetchMoreData(0, true);
    }
    prevResetFetching.current = isResetFetching;
    isFirstRender.current = false;
  }, [fetchMoreData, hasExternalData, isResetFetching]);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };
  const handleSelectCard = useCallback(
    (id: string, index: number) => {
      if (onSelectCard) {
        setSelectedCardIndices(prev => {
          const newSet = new Set(prev);
          if (newSet.has(index)) {
            newSet.delete(index);
          } else {
            newSet.add(index);
          }
          return newSet;
        });
        onSelectCard(id, index);
      }
    },
    [onSelectCard],
  );

  const handleOnClick = useCallback(
    (primary: string, index: number) => {
      if (onPressCard) {
        onPressCard(primary, index);
      }
    },
    [onPressCard],
  );

  const handleSetValue = useCallback(
    (index: number, key: string, value: any) => {
      setDataList(prevData => {
        // Validate index inside the setter to use current data
        if (index < 0 || index >= prevData.length) {
          console.warn(
            `Cards: Invalid index ${index}. Current length: ${prevData.length}`,
          );
          return prevData;
        }

        const newData = [...prevData];
        const item = newData[index] as Record<string, any>;
        newData[index] = { ...item, [key]: value };
        return newData;
      });
    },
    [],
  );

  // Expose setValue to parent component only once
  useEffect(() => {
    if (onSetValue) {
      onSetValue(handleSetValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSetValue]);

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={styles.titleContainer}>
        <View style={styles.titleLeftContainer}>
          {onSelectCard && selectedCardIndices.size > 0 && (
            <Button
              onPress={() => {
                setSelectedCardIndices(new Set());
                if (onClearSelection) {
                  onClearSelection();
                }
              }}
              typeStyle={'primary'}
              height={40}
              width={40}
              iconLeft={<SlashIcon style={styles.iconCancel} />}
            />
          )}
          {title && (
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {title} ({dataList?.length ?? 0})
            </Text>
          )}
        </View>
        {onPressButton && (
          <Button
            onPress={onPressButton}
            typeStyle={'primary'}
            height={40}
            width={40}
            iconLeft={iconButton ?? <PlusIcon style={styles.icon} />}
          />
        )}
      </View>
      <ScrollView
        ref={scrollViewRef}
        onLayout={onLayout}
        nestedScrollEnabled
        style={styles.containerFlex}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <SwitchStateCards
          data={dataList}
          cardsHeight={containerHeight}
          isLoading={isLoading || isLoadingStatic}
          metadata={metadata}
          onPressCard={handleOnClick}
          commentEmptyCards={commentEmptyCards}
          textEmptyCards={textEmptyCards}
          maxTitles={maxTitles}
          maxRows={maxRows}
          onCardLayout={onCardLayout}
          onSelectCard={handleSelectCard}
          onChange={onChange}
          selectedIndices={selectedCardIndices}
        />
        {Boolean(dataList?.length) && isLoading && <SkeletonCard />}
      </ScrollView>
    </View>
  );
};

export default Cards;
