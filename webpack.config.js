// webpack.config.js
const path = require('path');

module.exports = {
  // otras configuraciones de Webpack
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    },
  },
};
