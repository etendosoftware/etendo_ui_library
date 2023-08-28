import { View } from 'react-native';
import React, { useRef, useState } from 'react';
import { marginIncomponents, styles } from './Navbar.styles';
import {
  NavbarComponents,
  NavbarProps,
  OptionProfileItem,
} from './Navbar.types';
import { Welcome, Profile, EtendoLogo } from './index';
import MenuBurger from './components/MenuBurger/MenuBurger';
import { isTablet } from '../../helpers/table_utils';

const Navbar = ({
  name,
  title,
  email,
  navbarComponents,
  profileOptions,
  profileImage,
  endOptions,
  onOptionSelectedProfile,
  onPressMenuBurger,
  onPressLogo,
}: NavbarProps) => {
  const widthLeft = styles.leftContainer.width;
  const profileWidth = isTablet() ? 84 : 72;

  const [renderedComponents, setRenderedComponents] = useState<
    NavbarComponents[] | undefined
  >(navbarComponents);

  const [removedComponents, setRemovedComponents] = useState<
    OptionProfileItem[] | undefined
  >([]);

  const [widthContainer, setWidthContainer] = useState<number>(0);
  const hasCalculated = useRef(false);

  let componentWidths: number[] = [];
  for (let i = 0; i < (navbarComponents?.length || 0); i++) {
    componentWidths[i] = 0;
  }

  const calculateRenderedComponents = (index: number, newWidth: number) => {
    componentWidths[index] = newWidth;
    if (navbarComponents) {
      if (!hasCalculated.current && index === navbarComponents?.length - 1) {
        removeAditionalComponents();
        hasCalculated.current = true;
      }
    }
  };

  const removeAditionalComponents = () => {
    let totalWidth = 0;
    for (const element of componentWidths) {
      totalWidth += element;
    }

    while (
      totalWidth + widthLeft + profileWidth - marginIncomponents >
      widthContainer
    ) {
      const lastComponentIndex = componentWidths.length - 1;

      if (renderedComponents?.[lastComponentIndex]?.inOptions) {
        setRemovedComponents(prevRemovedComponent => {
          const updatedRemovedComponent = [
            renderedComponents[lastComponentIndex].inOptions,
            ...(prevRemovedComponent ?? []),
          ];
          return updatedRemovedComponent;
        });
      }

      totalWidth -= componentWidths[lastComponentIndex];
      componentWidths.splice(lastComponentIndex, 1);
    }

    setRenderedComponents(prev => {
      const slicedComponents = prev?.slice(0, componentWidths.length);
      return slicedComponents?.reverse();
    });
  };

  return (
    <View
      style={styles.container}
      onLayout={event => {
        setWidthContainer(event.nativeEvent.layout.width);
      }}>
      <View style={[styles.leftContainer]}>
        {isTablet() ? (
          <>
            <EtendoLogo onPress={onPressLogo} pressable />
            <Welcome name={name} title={title} />
          </>
        ) : (
          <MenuBurger onPress={onPressMenuBurger} />
        )}
      </View>
      <View style={[styles.rightContainer]}>
        <>
          {widthContainer !== 0 &&
            renderedComponents?.map((item, index) => (
              <View
                key={index}
                onLayout={event => {
                  calculateRenderedComponents(
                    index,
                    event.nativeEvent.layout.width + marginIncomponents,
                  );
                }}
                style={[
                  styles.itemMapContainer,
                  hasCalculated.current && { opacity: 0 },
                ]}>
                {item.component}
              </View>
            ))}
        </>
        <View>
          <Profile
            profileOptions={profileOptions}
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
