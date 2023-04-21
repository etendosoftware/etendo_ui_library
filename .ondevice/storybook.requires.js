/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from '@storybook/react-native';

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import {argsEnhancers} from '@storybook/addon-actions/dist/modern/preset/addArgs';

import {decorators, parameters} from './preview';

if (decorators) {
  decorators.forEach(decorator => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

// temporary fix for https://github.com/storybookjs/react-native/issues/327 whilst the issue is investigated
try {
  argsEnhancers.forEach(enhancer => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require('../components/button/Button.stories.tsx'),
    require('../components/cards/cardDropdown/CardDropdown.stories.tsx'),
    require('../components/docs/Docs.stories.tsx'),
    require('../components/input/Input.stories.tsx'),
    require('../components/navbar/Navbar.stories.tsx'),
    require('../components/pagination/Pagination.stories.tsx'),
    require('../components/states/States.stories.tsx'),
    require('../components/tab/Tab.stories.tsx'),
    require('../components/table/Table.stories.tsx'),
  ];
};

configure(getStories, module, false);
