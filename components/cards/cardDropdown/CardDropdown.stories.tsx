import React from 'react';
import {Story, Meta} from '@storybook/react';
import {View} from 'react-native';
import addMarginContainer from '../../../helpers/addMargin';
import CardDropdown from './CardDropdown';
import {DeliveryBox} from '../../../assets/images/icons/DeliveryBox';
import {UsersIcon} from '../../../assets/images/icons/UsersIcon';
import {Binoculars} from '../../../assets/images/icons/Binoculars';
import {DocumentIcon} from '../../../assets/images/icons/DocumentIcon';
import {CardDrpopdownProps} from './CardDropdown.types';
import CardDropdownSkeleton from './component/CardDropdownSkeleton';
import CardSkeleton from './component/CardSkeleton';
import {styles} from './CardDropdown.styles';

const meta: Meta = {
  title: 'Etendo/CardDropdown',
  component: CardDropdown,
  argTypes: {},
};

const Template0: Story<CardDrpopdownProps> = args => (
  <View style={[addMarginContainer()]}>
    <CardDropdown {...args} />
  </View>
);

const Template1: Story<CardDrpopdownProps> = args => (
  <View style={[addMarginContainer()]}>
    <View style={styles.cardDropdownStoriesRow}>
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'primary'}
          disabled={false}
          isDropdown={true}
        />
      </View>
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'secondary'}
          disabled={false}
          isDropdown={true}
        />
      </View>
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'primary'}
          disabled={true}
          isDropdown={true}
        />
      </View>
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'secondary'}
          disabled={true}
          isDropdown={true}
        />
      </View>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'primary'}
          disabled={false}
          isDropdown={false}
        />
      </View>
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'secondary'}
          disabled={false}
          isDropdown={false}
        />
      </View>
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'primary'}
          disabled={true}
          isDropdown={false}
        />
      </View>
      <View style={styles.cardDropdownStoriesContainer}>
        <CardDropdown
          title={'Physical inventory'}
          image={<DeliveryBox />}
          route="/home"
          onPress={route => {}}
          dataOptions={[
            {
              title: 'Convert',
              description: 'Learn about your.',
              image: <UsersIcon />,
              route: '/convert',
            },
            {
              title: 'Team dashboard',
              description: 'Monitor your metrics.',
              image: <Binoculars />,
              route: '/dashboard',
            },
            {
              title: 'Limitless segmentation',
              description: 'Surface hidden trends.',
              image: <DocumentIcon />,
              route: '/limitless',
            },
            {
              title: 'Group analytics',
              description: 'Measure B2B account health.',
              image: <DeliveryBox />,
              route: '/analytics',
            },
          ]}
          styleType={'secondary'}
          disabled={true}
          isDropdown={false}
        />
      </View>
    </View>
  </View>
);
const Template2: Story<CardDrpopdownProps> = args => (
  <View style={styles.cardDropdownStoriesRow}>
    <View style={styles.cardDropdownStoriesSkeletonContainer}>
      <CardSkeleton styleType={'primary'} />
    </View>
    <View style={styles.cardDropdownStoriesSkeletonOptionContainer}>
      <CardDropdownSkeleton onClose={() => {}} styleType={'primary'} />
    </View>
    <View style={styles.cardDropdownStoriesSkeletonContainerBlue}>
      <CardSkeleton styleType={'secondary'} />
    </View>
    <View style={styles.cardDropdownStoriesSkeletonOptionContainerBlue}>
      <CardDropdownSkeleton onClose={() => {}} styleType={'secondary'} />
    </View>
  </View>
);

export default meta;
export const CardDropdownDefault = Template0.bind({});
export const CardDropdownVariants = Template1.bind({});
export const CardDropdownPlaceholder = Template2.bind({});

CardDropdownDefault.args = {
  title: 'Physical inventory',
  image: <DeliveryBox />,
  route: '/home',
  onPress: route => {},
  dataOptions: [],
  styleType: 'primary',
  disabled: false,
  isDropdown: true,
};
