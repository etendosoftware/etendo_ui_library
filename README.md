# Etendo UI Installation Guide

## How to Install Etendo UI

To get started with Etendo UI, follow these steps to install the library and its required dependencies.

### How To Install Components

#### 🚀 Step 1: Install Etendo UI library using Yarn

Install the Etendo UI library by running the following command:

```bash
yarn add etendo-ui-library
```

#### 📦 Step 2: Installation for Mobile or Web

- **For a Mobile installation**, install these dependencies using Yarn:

  ```bash
  yarn add react-native-web react-native-svg react-native-svg-transformer react-native-svg-web react-dom
  ```

- **For a Web installation**, use the following command:

  ```bash
  yarn add react-native react-native-web react-native-svg react-native-svg-transformer react-native-svg-web
  ```

### After Installation

Once you have completed these steps, you are ready to start using Etendo UI components in your project!

> **Note:** Make sure to adjust the versions of the dependencies based on your project's requirements.

If you encounter any issues during the installation process or have any questions, please refer to the Etendo UI documentation or reach out to our support team.

## Using the Playground to Test Components

To use the Playground for testing Etendo UI components, follow these steps:

1. **General Setup**:

   - Run `yarn install` in the `etendo_ui_library` directory.
   - Additionally, execute `yarn watch` in the root directory. This is crucial as it copies the components into the **nextjs** and **React Native** folders for a seamless integration.

     **⚠️ Warning:** When making changes to the Etendo UI library, always modify the components in the `src/components` directory. Avoid making changes in the `examples` folder components, as they are only copies and your changes won't be reflected in the library.

2. **For Mobile Testing**:

   - Navigate to `examples/ReactNative`.
   - Run `yarn install` to install necessary dependencies.
   - To test on iOS, execute `cd ios && pod install && cd .. && yarn run ios`.
   - For Android, use `yarn run android`.

3. **For Web Testing**:
   - Change directory to `examples/nextjs/apps/web`.
   - Ensure that you have Node.js version **18.17.0 or later** installed. It is worth mentioning that this is only required for this web playground, to develop the **Etendo UI** Node.js **16.10.0 or higher** is required.
   - Run `yarn install` to install dependencies.
   - Start the development server with `yarn dev`.

Happy coding with Etendo UI! 🚀🎉
