import { Dimensions, View } from 'react-native';
import React, { useState } from 'react';
import { marginIncomponents, styles } from './Navbar.styles';
import { NavbarProps, OptionProfileItem, RightComponent } from './Navbar.types';
import { Welcome, Profile, EtendoLogo } from './index';
import MenuBurger from './components/MenuBurger/MenuBurger';
import { isTablet } from '../../helpers/table_utils';

const Navbar = ({
  name,
  title,
  email,
  rightComponent,
  optionsProfile,
  profileImage,
  endOptions,
  onOptionSelectedProfile,
  onPressMenuBurger,
  onPressLogo,
}: NavbarProps) => {
  const width = Dimensions.get('window').width;
  const widthLeft = styles.leftContainer.width;
  const profileWidth = isTablet() ? 84 : 72;

  const [renderedComponents, setRenderedComponents] = useState<
    RightComponent[] | undefined
  >(rightComponent);

  const [removedComponents, setRemovedComponents] = useState<
    OptionProfileItem[] | undefined
  >([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  let componentWidths = new Array(rightComponent?.length).fill(0);

  const calculateRenderedComponents = (index: number, newWidth: number) => {
    componentWidths[index] = newWidth;
    if (rightComponent) {
      if (index === rightComponent?.length - 1) {
        let totalWidth = componentWidths.reduce(
          (total, width) => total + width,
          0,
        );

        while (
          totalWidth + widthLeft + profileWidth - marginIncomponents >
          width
        ) {
          const lastComponentIndex = componentWidths.length - 1;

          if (renderedComponents?.[lastComponentIndex]?.inOptions) {
            setRemovedComponents(prevRemovedComponent => {
              const updatedRemovedComponent = [
                renderedComponents[lastComponentIndex].inOptions,
                ...(prevRemovedComponent ?? []),
              ];
              return updatedRemovedComponent as OptionProfileItem[];
            });
          }

          totalWidth -= componentWidths[lastComponentIndex];
          componentWidths.splice(lastComponentIndex, 1);
        }

        setRenderedComponents(prev => {
          const slicedComponents = prev?.slice(0, componentWidths.length);
          return slicedComponents?.reverse();
        });
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.leftContainer]}>
        {isTablet() ? (
          <>
            <EtendoLogo onPress={onPressLogo} />
            <Welcome name={name} title={title} />
          </>
        ) : (
          <MenuBurger onPress={onPressMenuBurger} />
        )}
      </View>
      <View style={[styles.rightContainer]}>
        <>
          {renderedComponents?.map((item, index) => (
            <View
              key={index}
              onLayout={event => {
                const { width } = event.nativeEvent.layout;
                calculateRenderedComponents(index, width + marginIncomponents);
              }}
              style={[styles.itemMapContainer, isLoading && { opacity: 0 }]}>
              {item.component}
            </View>
          ))}
        </>
        <View>
          <Profile
            profileOptions={optionsProfile}
            otherOptions={removedComponents}
            name={name}
            email={email}
            onOptionSelected={onOptionSelectedProfile}
            profileImage={profileImage}
            endOptions={endOptions}
          />
        </View>
      </View>
    </View>
  );
};

export default Navbar;
