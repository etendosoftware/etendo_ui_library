import {
  View,
  TouchableOpacity,
  Dimensions,
  LayoutChangeEvent,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CardVariant, styles} from './CardDropdown.styles';
import {ArrowDown} from '../../../assets/images/icons/ArrowDown';
import CardSkeleton from './component/CardSkeleton';
import {CardDrpopdownProps, PositionModalType} from './CardDropdown.types';
import CardDropdownOptions from './component/CardDropdownOptions';

const CardDropdown = ({
  title,
  image,
  route,
  onPress,
  dataOptions,
  disabled,
  isDropdown,
  styleType = 'primary',
}: CardDrpopdownProps) => {
  const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
  const [heightDropdown, setHeightDropdown] = useState<number>(0);
  const [positionModal, setpositionModal] = useState<PositionModalType>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const getStyle = () => {
    if (disabled) {
      if (styleType === 'primary') {
        return CardVariant['disabledPrimary'];
      }
      if (styleType === 'secondary') {
        return CardVariant['disabledSecondary'];
      }
    }
    return CardVariant[styleType];
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setHeightDropdown(height);
  };

  const handleOnPressDropdown = () => {
    if (isDropdown) {
      setVisibleOptions(true);
    } else {
      if (onPress) {
        onPress(route);
      }
    }
  };

  const handleOnCloseDropdown = () => {
    setVisibleOptions(false);
  };

  const handleOnPressOption = (item?: string) => {
    if (item && onPress) {
      onPress(item);
    }
    setVisibleOptions(false);
  };
  const handleTopLeft = (pageY: number, height: number) => {
    if (windowHeight - heightDropdown - heightExtra > pageY - height) {
      return windowHeight - heightDropdown - heightExtra;
    }
    return pageY + height - heightDropdown;
  };

  useEffect(() => {
    if (visibleOptions) {
      getTopLeft();
    }
  });

  const getTopLeft = () => {
    if (refComponente.current) {
      refComponente.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number,
        ) => {
          let dropdownHeight = pageY + heightDropdown;
          if (dropdownHeight > windowHeight) {
            setpositionModal({
              top: handleTopLeft(pageY, height),
              left: pageX,
              width,
              height,
            });
          } else {
            setpositionModal({top: pageY, left: pageX, width, height});
          }
        },
      );
    }
  };

  const newImage =
    image &&
    React.cloneElement(image, {
      fill: getStyle().colorCardImageFill,
      style: styles.cardImage,
    });

  const windowHeight = Dimensions.get('window').height;
  const refComponente = useRef<TouchableOpacity>(null);
  const heightExtra = 20;

  return title && image ? (
    <TouchableOpacity
      ref={refComponente}
      style={[styles.cardContainer, getStyle().colorCardContainer]}
      activeOpacity={0.8}
      onPress={() => {
        handleOnPressDropdown();
      }}
      disabled={disabled}
    >
      <View
        style={[styles.cardImageContainer, getStyle().colorCardImageContainer]}
      >
        {image && newImage}
      </View>
      <View style={styles.cardDropdownContainer}>
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={1}
          style={[styles.cardTitle, getStyle().colorCardTitle]}
        >
          {title}
        </Text>
        {isDropdown && (
          <View style={styles.cardArrowImage}>
            <ArrowDown
              style={styles.cardArrowImage}
              fill={getStyle().colorCardArrowImageFill}
            />
          </View>
        )}
      </View>
      <CardDropdownOptions
        onLayout={onLayout}
        visible={visibleOptions}
        positionModal={positionModal}
        onPressOption={handleOnPressOption}
        onClose={handleOnCloseDropdown}
        data={dataOptions}
        styleType={styleType}
        title={title}
        image={image}
      />
    </TouchableOpacity>
  ) : (
    <CardSkeleton disabled={disabled} styleType={styleType} />
  );
};

export default CardDropdown;
