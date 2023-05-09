const path = require('path');

module.exports = async ({config}) => {
  config.module.rules.push({
    test: /\.(sass|scss|css)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    type: 'asset/resource',
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
    ],
  });
  return config;
};
