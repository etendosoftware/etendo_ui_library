module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^react-native$': 'react-native-web',
          'react-native-svg$': 'react-native-svg-web',
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
