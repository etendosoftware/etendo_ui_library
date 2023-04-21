import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {CardVariant, styles} from '../CardDropdown.styles';
import CardDropdownSkeleton from './CardDropdownSkeleton';
import {ArrowDown} from '../../../../assets/images/icons/ArrowDown';
import {
  CardDropdownData,
  CardDropdownOptionsProps,
} from '../CardDropdown.types';
import { NEUTRAL_0, PRIMARY_60, QUATERNARY_10, SECONDARY_100 } from '../../../../styles/colors';

const CardDropdownOptions = ({
  data,
  visible,
  positionModal,
  onClose,
  onPressOption,
  onLayout,
  styleType,
  title,
  image,
}: CardDropdownOptionsProps) => {
  const [indexHover, setIndexHover] = useState<number>(-1);
  const newImage = image ? (
    React.cloneElement(image, {
      fill: SECONDARY_100,
      style: styles.cardOptionHeaderImagenSize,
    })
  ) : (
    <></>
  );

  const getContainerOptionStyle = (indexCurrent: number) => {
    let styleFinal = [];
    if (data?.length === 1) {
      styleFinal.push(styles.cardOneItemContainer);
    } else if (data?.length && data.length - 1 === indexCurrent) {
      styleFinal.push(styles.cardLastItemContainer);
    } else {
      styleFinal.push(styles.cardItemContainer);
    }
    if (indexCurrent === indexHover) {
      if (styleType === 'primary') {
        styleFinal.push({backgroundColor: QUATERNARY_10});
      }
      if (styleType === 'secondary') {
        styleFinal.push({backgroundColor: PRIMARY_60});
      }
    }
    styleFinal.push([CardVariant[styleType].colorCardItemContainer]);
    return styleFinal;
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View
        onLayout={onLayout}
        style={[
          styles.cardOptionContainer,
          CardVariant[styleType].colorCardOptionContainer,
          {
            width: positionModal.width,
            top: positionModal.top,
            left: positionModal.left,
          },
        ]}
      >
        {!data?.length ? (
          <CardDropdownSkeleton onClose={onClose} styleType={styleType} />
        ) : (
          <>
            <TouchableOpacity
              style={[
                styles.cardOptionHeader,
                CardVariant[styleType].colorCardOptionHeader,
              ]}
              activeOpacity={0.7}
              onPress={onClose}
            >
              <View style={styles.cardHeaderLeftPart}>
                <View style={styles.cardOptionHeaderImg}>
                  {image && newImage}
                </View>
                <Text
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                  style={[
                    styles.cardOptionHeaderTitle,
                    CardVariant[styleType].colorCardOptionHeaderTitle,
                  ]}
                >
                  {title}
                </Text>
                <View style={styles.cardOptionArrowContainer}>
                  <ArrowDown style={styles.cardOptionArrowImage} fill={NEUTRAL_0} />
                </View>
              </View>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
              {data.map((item: CardDropdownData, index: number) => {
                let newImageMap: HTMLElement = <></>;
                if (item?.image) {
                  newImageMap = React.cloneElement(item.image, {
                    fill: CardVariant[styleType].colorCardImageOptionFill,
                    style: styles.cardOptionImagenSize,
                  });
                }
                return (
                  <Pressable
                    onHoverIn={() => {
                      setIndexHover(index);
                    }}
                    onHoverOut={() => {
                      setIndexHover(-1);
                    }}
                    style={getContainerOptionStyle(index)}
                    key={index}
                    onPress={() => {
                      onPressOption(item?.route);
                    }}
                  >
                    <View
                      style={[
                        styles.cardItemImageContainer,
                        CardVariant[styleType].colorCardItemImageContainer,
                      ]}
                    >
                      {newImageMap}
                    </View>
                    <View style={styles.cardItemTextContainer}>
                      <Text
                        style={[
                          styles.cardItemTitle,
                          CardVariant[styleType].colorCardItemTitle,
                        ]}
                      >
                        {item?.title}
                      </Text>
                      <Text
                        style={[
                          styles.cardItemDescription,
                          CardVariant[styleType].colorCardItemDescription,
                        ]}
                      >
                        {item?.description}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
      <TouchableOpacity
        style={styles.overlay}
        onPress={onClose}
        activeOpacity={1}
      />
    </Modal>
  );
};

export default CardDropdownOptions;
