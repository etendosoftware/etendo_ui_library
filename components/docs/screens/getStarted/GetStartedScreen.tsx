import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { styles } from './GetStartedScreen.style';

const GetStartedScreen = () => {
  const copyToClipboardYarn = () => {
    Clipboard.setString('yarn add etendo-ui-library');
  };
  const copyToClipboardNpm = () => {
    Clipboard.setString('npm install etendo-ui-library');
  };
  return (
    <View>
      <Text
        style={styles.title}
      >
        Etendo UI
      </Text>
      <Text style={styles.description}>
        Welcome to Etendo UI We rely heavily on jest and snapshots to ensure our
        components behavior and output are correct.
      </Text>
      <Text
        style={styles.subTitle}
      >
        Installation
      </Text>
      <View style={styles.clipboardContainer}>
        <Text
          style={styles.clipboardTitle}
        >
          Yarn
        </Text>
        <View
          style={styles.clipboardContent}
        >
          <Text
            style={styles.clipboardText}
          >
            $ yarn add etendo-ui-library
          </Text>
          <TouchableOpacity style={styles.clipboardCopyContainer} onPress={copyToClipboardYarn}>
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.clipboardContainer}>
        <Text
style={styles.clipboardTitle}
        >
          NPM
        </Text>
        <View
          style={styles.clipboardContent}
        >
          <Text
    style={styles.clipboardText}
          >
            $ npm install etendo-ui-library
          </Text>
          <TouchableOpacity style={styles.clipboardCopyContainer} onPress={copyToClipboardNpm}>
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStartedScreen;
