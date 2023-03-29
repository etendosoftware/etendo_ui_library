import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './CardDropdown.styles'
import CardDropdownOptions from './component/CardDropdownOptions'

const CardDropdown = () => {
  const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
  const [positionModal, setpositionModal] = useState<any>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [heightDropdown, setHeightDropdown] = useState<number>(0);

  const windowHeight = Dimensions.get('window').height;
  const refComponente = useRef<TouchableOpacity>(null);

  const onLayout = (event:any) => {
    const { height } = event.nativeEvent.layout;
    setHeightDropdown(height);
  };

  const handleOnPressDropdown = () => {
    setVisibleOptions(true)
  }
  const handleOnCloseDropdown = () => {
    setVisibleOptions(false)
  }
  const handleOnPressOption = (item:any) => {
    setVisibleOptions(false)
  }

  useEffect(()=> {
    getTopLeft();
  },[heightDropdown])

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
              top: pageY - heightDropdown + height,
              left: pageX,
              width,
              height,
            });
          } else {
            setpositionModal({top: pageY , left: pageX, width, height});
          }
        },
      );
    }
  }
  return (
    <TouchableOpacity ref={refComponente} style={styles.cardContainer} activeOpacity={0.8}>
        <View style={styles.cardImageContainer}>    
            <Image style={styles.cardImage} source={require('../../../assets/images/icons/box.png')} />
        </View>
        <TouchableOpacity style={styles.cardDropdownContainer} activeOpacity={0.7} onPress={()=>{handleOnPressDropdown()}}>
            <Text style={styles.cardTitle}>Physical inventory</Text>
            <Image style={styles.cardImageDropDown} source={require('../../../assets/images/icons/down.png')} />
        </TouchableOpacity>
        <CardDropdownOptions onLayout={onLayout} visible={visibleOptions} positionModal={positionModal} onPressOption={handleOnPressOption} onClose={handleOnCloseDropdown}/>
    </TouchableOpacity>
  )
}  

export default CardDropdown