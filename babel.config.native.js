module.exports = function (api) {
  api.cache(true);

  const presets = [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ];
  const ignore = ['**/*.stories.tsx', '**/*.test.tsx', '**/__snapshots__/*'];
  return {
    presets,
    ignore,
  };
};
