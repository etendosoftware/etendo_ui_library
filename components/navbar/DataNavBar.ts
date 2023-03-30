import {Configuration64} from '../../assets/images/icons/base64/configuration-64';
import {
  DrawerDataType,
  OptionNotificationItem,
  OptionProfileItem,
} from './Navbar.types';

export const notificationData: OptionNotificationItem[] = [
  {title: 'option1', time: '04:01', type: 'success'},
  {title: 'option2', time: '04:01', type: 'warning'},
  {title: 'option3', time: '04:01', type: 'error'},
  {title: 'option4', time: '04:01', type: 'new'},
];

export const profileData: OptionProfileItem[] = [
  {
    title: 'Profile and settings',
    image: Configuration64,
    route: '/route',
  },
];

export const drawerData: DrawerDataType = {
  currentPage: {image: '', label: 'Home'},
  content: [
    {
      sectionType: 'sections',
      titleSection: 'WAREHOUSE',
      dataSection: [
        {
          image: '',
          label: 'Physical inventory',
          subMenu: [
            {label: 'Sub menu', route: '/menu1'},
            {label: 'Sub menu', route: '/menu2'},
            {label: 'Sub menu', route: '/menu3'},
          ],
        },
        {image: '', label: 'Product', route: '/product'},
        {image: '', label: 'Sales order', route: '/salesOrder'},
      ],
    },
    {
      sectionType: 'sections',
      titleSection: 'CUSTOMIZATION',
      dataSection: [
        {image: '', label: 'Profile and settings', route: '/profile'},
      ],
    },
  ],
};
