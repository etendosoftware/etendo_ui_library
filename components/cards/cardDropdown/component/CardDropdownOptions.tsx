import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from '../CardDropdown.styles';
import CardSkeletonComponent from './CardSkeletonComponent';
const CardDropdownOptions = ({
  data,
  visible,
  positionModal,
  onClose,
  onPressOption,
  onLayout,
}: any) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View
        onLayout={onLayout}
        style={[
          styles.cardOptionContainer,
          {
            width: positionModal.width,
            top: positionModal.top,
            left: positionModal.left,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.cardOptionHeader}
          activeOpacity={0.7}
          onPress={onClose}
        >
          <View style={styles.cardHeaderLeftPart}>
            <Image
              style={styles.cardOptionHeaderImage}
              source={require('../../../../assets/images/icons/boxYellow.png')}
            />
            <Text style={styles.cardOptionHeaderTitle}>Physical inventory</Text>
          </View>
          <Image
            style={styles.cardOptionHeaderUp}
            source={require('../../../../assets/images/icons/up.png')}
          />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data?.length ? (
            [1, 2, 3, 4, 5].map((item: any, index: number) => {
              return (
                <TouchableOpacity
                  style={styles.cardItemContainer}
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
                    <Text style={styles.cardItemTitle}>Convert</Text>
                    <Text style={styles.cardItemDescription}>
                      Leartn about metrics.
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <>
              <View style={styles.cardOptionSkeletonContainer}>
                <CardSkeletonComponent
                  color={'rgba(0,0,0,0.12)'}
                  height={46}
                  width={46}
                  style={{borderRadius: 50}}
                />
                <View style={styles.cardOptionSkeletonRightContainer}>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={60}
                    style={{borderRadius: 50}}
                  />
                  <View style={styles.cardOptionSeparation}></View>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={156}
                    style={{borderRadius: 50}}
                  />
                </View>
              </View>
              <View style={styles.cardOptionSkeletonContainer}>
                <CardSkeletonComponent
                  color={'rgba(0,0,0,0.12)'}
                  height={46}
                  width={46}
                  style={{borderRadius: 50}}
                />
                <View style={styles.cardOptionSkeletonRightContainer}>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={60}
                    style={{borderRadius: 50}}
                  />
                  <View style={styles.cardOptionSeparation}></View>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={156}
                    style={{borderRadius: 50}}
                  />
                </View>
              </View>
              <View style={styles.cardOptionSkeletonContainer}>
                <CardSkeletonComponent
                  color={'rgba(0,0,0,0.12)'}
                  height={46}
                  width={46}
                  style={{borderRadius: 50}}
                />
                <View style={styles.cardOptionSkeletonRightContainer}>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={60}
                    style={{borderRadius: 50}}
                  />
                  <View style={styles.cardOptionSeparation}></View>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={156}
                    style={{borderRadius: 50}}
                  />
                  <View style={styles.cardOptionSeparation}></View>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={156}
                    style={{borderRadius: 50}}
                  />
                </View>
              </View>
              <View style={styles.cardOptionSkeletonContainer}>
                <CardSkeletonComponent
                  color={'rgba(0,0,0,0.12)'}
                  height={46}
                  width={46}
                  style={{borderRadius: 50}}
                />
                <View style={styles.cardOptionSkeletonRightContainer}>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={60}
                    style={{borderRadius: 50}}
                  />
                  <View style={styles.cardOptionSeparation}></View>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={156}
                    style={{borderRadius: 50}}
                  />
                  <View style={styles.cardOptionSeparation}></View>
                  <CardSkeletonComponent
                    color={'rgba(0,0,0,0.12)'}
                    height={20}
                    width={156}
                    style={{borderRadius: 50}}
                  />
                </View>
              </View>
            </>
          )}
        </ScrollView>
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
