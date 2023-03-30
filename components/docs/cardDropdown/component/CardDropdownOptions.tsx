import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {CardVariant, styles} from '../CardDropdown.styles';
import CardDropdownSkeleton from './CardDropdownSkeleton';

const CardDropdownOptions = ({
  data,
  visible,
  positionModal,
  loading,
  onClose,
  onPressOption,
  onLayout,
}: any) => {

  const getContainerOptionStyle = () => {
    if(data?.length == 1){
      return styles.cardOneItemContainer
    } 
    return [styles.cardItemContainer,CardVariant['primary'].colorCardItemContainer]
  }

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View
        onLayout={onLayout}
        style={[
          styles.cardOptionContainer,
          CardVariant['primary'].colorCardOptionContainer,
          {
            width: positionModal.width,
            top: positionModal.top,
            left: positionModal.left,
          },
        ]}
      >
        {loading ? (
          <CardDropdownSkeleton onClose={onClose} />
        ) : (
          <>
            <TouchableOpacity
              style={[styles.cardOptionHeader, CardVariant['primary'].colorCardOptionHeader]}
              activeOpacity={0.7}
              onPress={onClose}
            >
              <View style={styles.cardHeaderLeftPart}>
                <Image
                  style={styles.cardOptionHeaderImage}
                  source={require('../../../../assets/images/icons/boxYellow.png')}
                />
                <Text style={[styles.cardOptionHeaderTitle, CardVariant['primary'].colorCardOptionHeaderTitle]}>
                  Physical inventory
                </Text>
              </View>
              <Image
                style={styles.cardOptionHeaderUp}
                source={require('../../../../assets/images/icons/up.png')}
              />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
              {data.map((item: any, index: number) => {
                return (
                  <TouchableOpacity
                    style={getContainerOptionStyle()}
                    key={index}
                    onPress={() => {
                      onPressOption(item);
                    }}
                  >
                    <View style={styles.cardItemImageContainer}>
                      <Image
                        style={styles.cardImageCircle}
                        source={require('../../../../assets/images/icons/circle.png')}
                      />
                      <Image
                        style={styles.cardItemImageCenter}
                        source={require('../../../../assets/images/icons/box.png')}
                      />
                    </View>
                    <View>
                      <Text style={[styles.cardItemTitle,CardVariant['primary'].colorCardItemTitle]}>Convert</Text>
                      <Text style={[styles.cardItemDescription,CardVariant['primary'].colorCardItemDescription]}>
                        Leartn about metrics.
                      </Text>
                    </View>
                  </TouchableOpacity>
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
