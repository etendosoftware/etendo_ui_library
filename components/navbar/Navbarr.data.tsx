import {
  DrawerDataType,
  OptionNotificationItem,
  OptionProfileItem,
} from './Navbar.types';
import {DeliveryBox} from '../../assets/images/icons/DeliveryBox';
import {ShoppingBagIcon} from '../../assets/images/icons/ShoppingBagIcon';
import {MoneyIcon} from '../../assets/images/icons/MoneyIcon';
import {ConfigurationIcon} from '../../assets/images/icons/ConfigurationIcon';

export const notificationData: OptionNotificationItem[] = [
  {
    title: 'Your password has been succesfully changed.',
    time: '04:01',
    type: 'success',
  },
  {
    title: 'Lorem ipsum 30 dolor sit amet, consectetur adipiscing elit nulla.',
    time: '04:01',
    type: 'warning',
  },
  {title: 'Consectur adipiscing elit ut.', time: '04:01', type: 'error'},
  {
    title: 'Your password has been succesfully changed.',
    time: '04:01',
    type: 'new',
  },
];

export const profileData: OptionProfileItem[] = [
  {
    title: 'Settings',
    route: '/Setting',
    image: <ConfigurationIcon />,
  },
];

export const drawerData: DrawerDataType = {
  content: [
    {
      sectionType: 'sections',
      titleSection: 'WAREHOUSE',
      dataSection: [
        {
          image: <DeliveryBox />,
          label: 'Physical inventory',
          subMenu: [
            {label: 'Sub menu', route: '/menu1'},
            {label: 'Sub menu', route: '/menu2'},
            {label: 'Sub menu', route: '/menu3'},
          ],
        },
        {image: <ShoppingBagIcon />, label: 'Product', route: '/product'},
        {image: <MoneyIcon />, label: 'Sales order', route: '/salesOrder'},
      ],
    },
    {
      sectionType: 'sections',
      titleSection: 'CUSTOMIZATION',
      dataSection: [
        {
          image: <ConfigurationIcon />,
          label: 'Profile and settings',
          route: '/profile',
        },
        {
          image: <ConfigurationIcon />,
          label: 'Profile and settings',
          route: '/profile',
        },
      ],
    },
    {
      sectionType: 'sections',
      titleSection: 'CUSTOMIZATION',
      dataSection: [
        {
          image: <ConfigurationIcon />,
          label: 'Profile and settings',
          route: '/profile',
        },
      ],
    },
    {
      sectionType: 'sections',
      titleSection: 'WAREHOUSE',
      dataSection: [
        {
          image: <DeliveryBox />,
          label: 'Physical inventory',
          subMenu: [
            {label: 'Sub menu', route: '/menu1'},
            {label: 'Sub menu', route: '/menu2'},
            {label: 'Sub menu', route: '/menu3'},
          ],
        },
        {image: <ShoppingBagIcon />, label: 'Product', route: '/product'},
        {image: <MoneyIcon />, label: 'Sales order', route: '/salesOrder'},
      ],
    },
  ],
};
