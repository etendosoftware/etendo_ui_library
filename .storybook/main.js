const path = require('path');
module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-actions',
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
  framework: '@storybook/react',
  staticDir: path.join(__dirname, 'assets'),
  webpackFinal: async (config, {configType}) => {
    // Exclude react-native-linear-gradient from being bundled in Storybook
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native-linear-gradient': path.resolve(
        __dirname,
        '../node_modules/react-native-web-linear-gradient',
      ),
    };

    return config;
  },
};
