import React, { ReactElement } from 'react';
import SkeletonCard from '../skeletonCard/SkeletonCard';
import TableEmpty from '../../../../../table/components/TableEmpty';
import Card from '../../Card';
import { styles } from '../skeletonCard/SkeletonCard.style';
import { styles as stylesTAble } from '../../../../Cards.style';
import { SwitchStateCardsProps } from './SwitchStateCards.types';

const SKELETON_CARD_HEIGHT: number = 142;
const SKELETON_CARD_MARGIN_BOTTOM: number = styles.container.marginBottom;
const TABLE_TITLE: number = stylesTAble.titleContainer.height;
const TABLE_TITLE_PADDING: number = stylesTAble.container.paddingTop * 2;

const SwitchStateCards = ({
  data,
  isLoading,
  metadata,
  onPressCard,
  textEmptyCards,
  commentEmptyCards,
  tableHeight = 0,
  isTitle,
  onHoldCard,
  handleItemsSelected,
  isSelectionMode,
  maxRows,
  maxTitles,
}: SwitchStateCardsProps): ReactElement | null  => {
  if (
    isLoading &&
    !data.length &&
    typeof tableHeight === 'number' &&
    tableHeight
  ) {
    const numberOfSkeletons =
      Math.floor(
        tableHeight - (isTitle ? TABLE_TITLE : 0) - TABLE_TITLE_PADDING,
      ) /
      (SKELETON_CARD_HEIGHT + SKELETON_CARD_MARGIN_BOTTOM);

    return <>{Array.from(
      { length: numberOfSkeletons },
      (_: any, index: number) => <SkeletonCard key={'SkeletonCard' + index} />,
    )}</>;
  }

  if (!data.length) {
    return (
      <TableEmpty
        textEmptyTable={textEmptyCards}
        commentEmptyTable={commentEmptyCards}
      />
    );
  }
  const renderCard = (item: any, index: number) => (
    <Card
      key={'Card' + index}
      item={item}
      index={index}
      metadata={metadata}
      onPress={onPressCard}
      onHoldCard={onHoldCard}
      handleItemsSelected={handleItemsSelected}
      isSelectionMode={isSelectionMode}
      maxRows={maxRows}
      maxTitles={maxTitles}
    />
  );
  return <>{data.map(renderCard)}</>
};

export default SwitchStateCards;
