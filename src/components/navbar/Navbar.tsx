import { View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './Navbar.styles';
import {
  NavbarComponents,
  NavbarProps,
  OptionProfileItem,
} from './Navbar.types';
import { Welcome, Profile, EtendoLogo } from './index';
import MenuBurger from './components/MenuBurger/MenuBurger';

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
  const [renderedComponents, setRenderedComponents] = useState<
    NavbarComponents[] | undefined
  >(navbarComponents);

  const [removedComponents, setRemovedComponents] = useState<
    OptionProfileItem[] | undefined
  >([]);

  const [widthContainer, setWidthContainer] = useState<number>(0);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const hasCalculated = useRef(false);
  const profileWidth = isTablet ? 84 : 72;
  const widthLeft = isTablet ? 463 : 124;

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
      totalWidth + widthLeft + profileWidth - (isTablet ? 32 : 24) >
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

  useEffect(() => {
    setIsTablet(widthContainer > 1080);
  }, [widthContainer]);

  return (
    <View
      style={[styles.container, { height: isTablet ? 80 : 72 }]}
      onLayout={event => {
        setWidthContainer(event.nativeEvent.layout.width);
      }}>
      <View
        style={[
          styles.leftContainer,
          { paddingLeft: isTablet ? 32 : 24, width: isTablet ? 463 : 124 },
        ]}>
        {isTablet ? (
          <>
            <EtendoLogo onPress={onPressLogo} pressable />
            <Welcome name={name} title={title} />
          </>
        ) : (
          <MenuBurger onPress={onPressMenuBurger} />
        )}
      </View>
      <View style={[styles.rightContainer, { width: isTablet ? 84 : 72 }]}>
        <>
          {widthContainer !== 0 &&
            isTablet &&
            renderedComponents?.map((item, index) => (
              <View
                key={index}
                onLayout={event => {
                  calculateRenderedComponents(
                    index,
                    event.nativeEvent.layout.width + (isTablet ? 32 : 24),
                  );
                }}
                style={[
                  styles.itemMapContainer,
                  !hasCalculated.current && { opacity: 0 },
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
