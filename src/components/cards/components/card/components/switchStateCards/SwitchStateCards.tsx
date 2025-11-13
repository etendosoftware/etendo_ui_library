import React, { ReactElement } from 'react';
import SkeletonCard from '../skeletonCard/SkeletonCard';
import TableEmpty from '../../../../../table/components/TableEmpty';
import Card from '../../Card';
import { styles } from '../skeletonCard/SkeletonCard.style';
import { SwitchStateCardsProps } from './SwitchStateCards.types';

const SKELETON_CARD_HEIGHT: number = 142;
const SKELETON_CARD_MARGIN_BOTTOM: number = styles.container.marginBottom;

const SwitchStateCards = ({
  data,
  isLoading,
  metadata,
  onPressCard,
  selectedIndices = new Set(),
  textEmptyCards,
  commentEmptyCards,
  cardsHeight = 0,
  maxRows,
  maxTitles,
  onCardLayout,
  onSelectCard,
  onChange,
}: SwitchStateCardsProps): ReactElement | null => {
  if (isLoading && !data?.length) {
    const numberOfSkeletons =
      Math.floor(cardsHeight) /
      (SKELETON_CARD_HEIGHT + SKELETON_CARD_MARGIN_BOTTOM);
    return (
      <>
        {Array.from({ length: numberOfSkeletons }, (_: any, index: number) => (
          <SkeletonCard key={'SkeletonCard' + index} />
        ))}
      </>
    );
  }

  if (!data?.length) {
    return (
      <TableEmpty
        textEmptyTable={textEmptyCards}
        commentEmptyTable={commentEmptyCards}
      />
    );
  }

  return (
    <>
      {data.map((item: any, index: number) => (
        <Card
          key={'Card' + index}
          item={item}
          index={index}
          metadata={metadata}
          onPress={onPressCard}
          isSelected={selectedIndices.has(index)}
          maxRows={maxRows}
          maxTitles={maxTitles}
          onCardLayout={onCardLayout}
          onLongPress={onSelectCard}
          onChange={onChange}
        />
      ))}
    </>
  );
};

export default SwitchStateCards;
