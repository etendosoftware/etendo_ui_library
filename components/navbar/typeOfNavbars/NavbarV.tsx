/* Imports */
import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {BLUE, WHITE, YELLOW} from '../../../styles/colors';
import {NavbarVStyleVariant} from '../Navbar.styles';
import {Info} from '../Navbar.types';

export const NavbarV = ({data, onChangeSelected}: any) => {
  const [currentTab, setCurrentTab] = useState('Index');

  return (
    <ScrollView
      style={NavbarVStyleVariant.generic.container}
      showsVerticalScrollIndicator={false}
    >
      {data.map((image: Info) => {
        return (
          <TouchableOpacity onPress={() => onChangeSelected}>
            {TabButton(currentTab, setCurrentTab, image.name, image.routeImage)}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

// For multiple Buttons...
const TabButton = (
  currentTab: any,
  setCurrentTab: any,
  title: string,
  image: any,
) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setCurrentTab(title);
        }}
      >
        <View
          style={{
            /* Primary */
            flex: 1,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: currentTab === title ? YELLOW : 'transparent',
            paddingHorizontal: '100%',
            paddingVertical: '20%',
          }}
        >
          <Image
            source={image}
            style={{
              /* Primary */
              width: width * 0.7,
              height: width * 0.7,
              tintColor: currentTab === title ? BLUE : WHITE,
            }}
          />

          <Text
            style={{
              /* Primary */
              fontSize: width * 0.15,
              justifyContent: 'center',
              //   fontFamily: INTER_SEMIBOLD,
              fontWeight: 'bold',
              marginTop: width * 0.15,
              color: currentTab === title ? BLUE : WHITE,
              alignContent: 'center',
              alignSelf: 'center',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
