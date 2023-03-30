const {getDefaultConfig} = require('metro-config');

module.exports = async () => {
  const {
    resolver: {sourceExts, assetExts},
    transformer,
  } = await getDefaultConfig();

  return {
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
      sourceExts: [...sourceExts, 'svg'],
    },
  };
};
