#

# `etendo-ui-library`

![Etendo Logo](https://etendo.software/wp-content/uploads/2021/04/etendo-logo-footer-min-1.png 'Etendo Logo')

### This library provides you with a set of React and React Native UI components to fast-track your application development process.

#

# Installation

The etendo-ui-library can be installed using either npm or yarn.

## Npm:

```
npm install etendo-ui-library
```

## Yarn:

```
yarn add etendo-ui-library
```

#

# Android Project Setup

### To create a new Android project:

```
npx react-native init appName --version 0.68.1
```

After initializing the Android project, modify your metro.config.js file to include the following configuration:

```javascript
const {getDefaultConfig} = require('metro-config');

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
})();
```

### Finally, install the following dependencies:

```
yarn add react-native-svg && yarn add react-native-svg-transformer
```

## Usage

To use a component from the etendo-ui-library, import it and use it in your JSX code. Below is an example of how to use the Input component.

```javascript
//import
import Input from 'etendo-ui-library/components/input/Input';

export default function Home() {
  return (
    //usage
    <Input
      titleLabel="ReadOnly"
      helperText="Start Date"
      placeholder="Write a text"
      disabled={false}
      value="27/04/2022"
      typeField="readOnly"
      isError={true}
      keyboardType="text"
    />
  );
}
```

Remember to replace the attribute values with your desired ones.

And that's it! You are now ready to use the etendo-ui-library in your React Native or React Web application. Please refer to the detailed documentation on Storybook and NPM for more examples and use cases.

#

# Web Project Setup (React Web)

To create a new Next.js project:

`npx create-next-app`

After initializing the Next.js project, modify your next.config.js file to include the following configuration:

```javascript
const path = require('path');
const withTM = require('next-transpile-modules')(['etendo-ui-library']);

module.exports = withTM({
  webpack: (config, {defaultLoaders}) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      'react-native-svg$': 'react-native-svg-web',
    };

    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'etendo-ui-library/dist/webpack/css-loader.js',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        'postcss-loader',
      ],
    });
    return config;
  },
});
```

### Next, install the following dependencies using the commands below:

```bash
yarn add react-native-web

yarn add next-transpile-modules

yarn add -D ts-loader

yarn add babel-loader --dev

yarn add react-native-svg-transformer

yarn add react-native-svg

yarn add --dev babel-plugin-module-resolver
```

Usage
To use a component from the etendo-ui-library, import it and use it in your JSX code. Below is an example of how to use the Input component.

```javascript
//import
import Input from 'etendo-ui-library/components/input/Input';

//usage
<Input
  titleLabel="ReadOnly"
  helperText="Start Date"
  placeholder="Write a text"
  disabled={false}
  value="password"
  typeField="textInputPassword"
  isError={true}
  keyboardType="text"
/>;
```

**Remember to replace the attribute values with your desired ones!!**

That's it! You are now ready to use the etendo-ui-library in your React Web application. Please refer to the detailed documentation on Storybook and NPM for more examples and use cases.
