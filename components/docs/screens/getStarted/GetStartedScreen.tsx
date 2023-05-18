import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import {styles} from './GetStartedScreen.style';
import addMarginContainer from '../../../../helpers/addMargin';

const GetStartedScreen = () => {
  // Copies the yarn command to the clipboard
  const copyToClipboardYarn = () => {
    Clipboard.setString('yarn add etendo-ui-library');
  };
  // Copies the npm command to the clipboard
  const copyToClipboardNpm = () => {
    Clipboard.setString('npm install etendo-ui-library');
  };
  return (
    <View style={addMarginContainer()}>
      <Text style={styles.title}>Etendo UI</Text>
      <Text style={styles.description}>
        Etendo UI Library is a versatile and easy-to-use collection of user
        interface components, specifically designed for React Native projects
        and compiled for web using react-native-web. This library aims to
        simplify the development process and enhance user experience by
        providing a consistent and visually appealing set of UI components.
        These components are built with performance and customization in mind,
        ensuring your project stands out with a Etendo unique appearance.
      </Text>
      <Text style={styles.subTitle}>Installation</Text>
      <View style={styles.clipboardContainer}>
        <Text style={styles.clipboardTitle}>NPM</Text>
        <View style={styles.clipboardContent}>
          <Text style={styles.clipboardText}>
            $ npm install etendo-ui-library
          </Text>
          <TouchableOpacity
            style={styles.clipboardCopyContainer}
            onPress={copyToClipboardNpm}
          >
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.descriptionInstall}>Or</Text>
      <View style={styles.clipboardContainer}>
        <Text style={styles.clipboardTitle}>Yarn</Text>
        <View style={styles.clipboardContent}>
          <Text style={styles.clipboardText}>$ yarn add etendo-ui-library</Text>
          <TouchableOpacity
            style={styles.clipboardCopyContainer}
            onPress={copyToClipboardYarn}
          >
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionInstall}>
          When creating a new React Native project the following must be added
          in the metro.config.js file:
        </Text>
        <View style={styles.clipboardContent}>
          <Text style={styles.clipboardText}>
            {`const {getDefaultConfig} = require('metro-config');

              module.exports = (async () => {
                const {
                  resolver: {sourceExts, assetExts},
                } = await getDefaultConfig();
                return {
                  transformer: {
                    getTransformOptions: async () => ({
                      transform: {
                        experimentalImportSupport: false,
                        inlineRequires: true,
                      },
                    }),
                    babelTransformerPath: require.resolve('react-native-svg-transformer'),
                  },
                  resolver: {
                    assetExts: assetExts.filter(ext => ext !== 'svg'),
                    sourceExts: [...sourceExts, 'svg'],
                  },
                };
              })();`}
          </Text>
          <TouchableOpacity
            style={styles.clipboardCopyContainer}
            onPress={copyToClipboardYarn}
          >
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionInstall}>
          And the version of react native should be: <b>"0.68.1"</b> <br />{' '}
          <br />
          Using the next command:
        </Text>
        <View style={styles.clipboardContent}>
          <Text style={styles.clipboardText}>
            {' '}
            npx react-native init appName --version 0.68.1
          </Text>
          <TouchableOpacity
            style={styles.clipboardCopyContainer}
            onPress={copyToClipboardYarn}
          >
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionInstall}>
          and install the next dependencies whit the follow commands:
        </Text>
        <View style={styles.clipboardContent}>
          <Text style={styles.clipboardText}>yarn add react-native-svg</Text>
          <TouchableOpacity
            style={styles.clipboardCopyContainer}
            onPress={copyToClipboardNpm}
          >
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionInstall}>And</Text>
        <View style={styles.clipboardContent}>
          <Text style={styles.clipboardText}>
            yarn add react-native-svg-tranformer
          </Text>
          <TouchableOpacity
            style={styles.clipboardCopyContainer}
            onPress={copyToClipboardNpm}
          >
            <Text style={styles.clipboardCopyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStartedScreen;
