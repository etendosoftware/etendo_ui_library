// Imports
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BLUE, GREY_BLUE_50, WHITE, YELLOW} from '../../styles/colors';

const SecondaryTab = ({
  tabInformation,
  selectedTab,
  setSelectedTab,
  height,
  renderItem,
}: any) => {
  // if it is web
  if (renderItem) {
    return renderItem;
  }

  // if it is mobile
  return (
    <View style={styles.container}>
      {tabInformation.map((tabItem: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            {
              flex: 1 / tabInformation.length,
              backgroundColor: index === selectedTab ? BLUE : GREY_BLUE_50,
              height: height,
              borderBottomWidth: 3,
              borderBottomColor: BLUE,
              borderTopWidth: 4,
              borderTopColor: index === selectedTab ? YELLOW : 'transparent',
            },
          ]}
          onPress={() => setSelectedTab(index)}
        >
          <Text style={{color: index === selectedTab ? WHITE : BLUE}}>
            {tabItem.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondaryTab;
