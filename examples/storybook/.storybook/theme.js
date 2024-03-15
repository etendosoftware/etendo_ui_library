import { create } from '@storybook/theming/create';
import EtendoLogo from '../assets/logo/Etendo.png';

export default create({
  base: 'light',
  brandTitle: 'Etendo Storybook',
  brandUrl: '/',
  brandImage: EtendoLogo,
  brandTarget: '_self',
  colorSecondary: '#151c7a',
  appBorderRadius: 0,
});
