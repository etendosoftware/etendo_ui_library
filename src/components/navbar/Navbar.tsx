import { Dimensions, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { marginIncomponents, styles } from './Navbar.styles';
import {
  NavbarProps,
  OptionArrayType,
  OptionProfileItem,
  RightComponent,
} from './Navbar.types';
import { Welcome, Profile, EtendoLogo } from './index';
import MenuBurger from './components/MenuBurger/MenuBurger';
import { styles as styleProfile } from './components/Profile/Profile.styles';

const Navbar = ({
  name,
  email,
  rightComponent,
  optionsProfile,
  profileImage,
  onOptionSelectedProfile,
  onPressMenuBurger,
  onPressLogo,
}: NavbarProps) => {
  const screenWidth = Dimensions.get('window').width;
  const isTablet = screenWidth > 700;
  const width = Dimensions.get('window').width;
  const widthLeft =
    styles.leftContainer.width +
    styles.leftContainer.paddingLeft +
    (isTablet ? 68 : 80);
  const profileWidth =
    styleProfile.container.width + styleProfile.container.marginRight || 0;

  const componentWidths = useRef<number[]>(
    new Array(rightComponent?.length).fill(0),
  );

  const [renderedComponents, setRenderedComponents] = useState<
    | { component: React.ReactElement; inOptions?: OptionProfileItem }[]
    | undefined
  >(rightComponent);

  const [removedComponents, setRemovedComponents] = useState<RightComponent[]>(
    [],
  );

  const [inOptionsArray, setInOptionsArray] = useState<OptionArrayType>([]);

  const calculateRenderedComponents = (index: number, newWidth: number) => {
    componentWidths.current[index] = newWidth;

    let newRenderedComponents: {
      component: React.ReactElement;
      inOptions?: OptionProfileItem;
    }[] = [...(renderedComponents ?? [])];

    let totalWidth = componentWidths.current.reduce(
      (total, width) => total + width,
      0,
    );

    while (
      totalWidth + widthLeft + profileWidth > width &&
      newRenderedComponents.length > 1
    ) {
      const lastComponentIndex = newRenderedComponents.length - 1;

      const removedComponent: RightComponent = {
        component: newRenderedComponents[lastComponentIndex].component,
        inOptions: newRenderedComponents[lastComponentIndex].inOptions,
      };

      newRenderedComponents.splice(lastComponentIndex, 1);
      setRemovedComponents(prevRemovedComponents => [
        ...prevRemovedComponents,
        removedComponent,
      ]);

      totalWidth -= componentWidths.current[lastComponentIndex];
      componentWidths.current.splice(lastComponentIndex, 1);
    }

    setRenderedComponents(newRenderedComponents);
  };

  useEffect(() => {
    const removedInOptions = removedComponents
      .filter(component => component?.inOptions !== undefined)
      .map(component => component?.inOptions);
    setInOptionsArray(removedInOptions);
  }, [removedComponents]);

  return (
    <View style={styles.container}>
      <View style={[styles.leftContainer]}>
        {isTablet ? (
          <>
            <EtendoLogo onPress={onPressLogo} />
            <Welcome name={name} />
          </>
        ) : (
          <MenuBurger onPress={onPressMenuBurger} />
        )}
      </View>
      <View style={styles.rightContainer}>
        <>
          {renderedComponents
            ?.slice(0)
            .reverse()
            .map((item, index) => (
              <View
                key={index}
                onLayout={event => {
                  const { width } = event.nativeEvent.layout;
                  calculateRenderedComponents(
                    index,
                    width + marginIncomponents,
                  );
                }}
                style={styles.itemMapContainer}>
                {item.component}
              </View>
            ))}
        </>
        <View>
          <Profile
            profileOptions={optionsProfile}
            otherOptions={inOptionsArray}
            name={name}
            email={email}
            onOptionSelected={onOptionSelectedProfile}
            profileImage={profileImage}
          />
        </View>
      </View>
    </View>
  );
};

export default Navbar;
