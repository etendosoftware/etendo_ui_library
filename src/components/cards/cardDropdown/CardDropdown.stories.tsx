import React from 'react';
import {Story, Meta} from '@storybook/react';
import {View, ScrollView, Text} from 'react-native';
import addMarginContainer from '../../../helpers/addMargin';
import CardDropdown from './CardDropdown';
import {DeliveryBox} from '../../../assets/images/icons/DeliveryBox';
import {UsersIcon} from '../../../assets/images/icons/UsersIcon';
import {Binoculars} from '../../../assets/images/icons/Binoculars';
import {DocumentIcon} from '../../../assets/images/icons/DocumentIcon';
import {CardDrpopdownProps} from './CardDropdown.types';
import {styles} from './CardDropdown.styles';
import {styles as stylesTitle} from '../../docs/screens/changelog/ChangeLogScreen.style';
import {cardDataDropdown} from './CardDropdown.data';

const meta: Meta = {
  title: 'Etendo/CardDropdown',
  component: CardDropdown,
  argTypes: {},
};

const TemplateDefault: Story<CardDrpopdownProps> = args => (
  <View style={[addMarginContainer()]}>
    <CardDropdown {...args} />
  </View>
);

const TemplateVariants: Story<CardDrpopdownProps> = args => (
  <ScrollView horizontal={true} style={[addMarginContainer()]}>
    <ScrollView>
      <Text style={stylesTitle.title}>Dropdown</Text>
      <View style={styles.cardDropdownStoriesRow}>
        <View style={styles.cardDropdownStoriesContainer}>
          <CardDropdown
            title={'Physical inventory'}
            image={<DeliveryBox />}
            route="/home"
            onPress={route => {}}
            dataOptions={cardDataDropdown}
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
            dataOptions={cardDataDropdown}
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
            dataOptions={cardDataDropdown}
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
            dataOptions={cardDataDropdown}
            styleType={'secondary'}
            disabled={true}
            isDropdown={true}
          />
        </View>
      </View>
      <Text style={stylesTitle.title}>Card</Text>
      <View style={styles.cardDropdownStoriesRow}>
        <View style={styles.cardDropdownStoriesContainer}>
          <CardDropdown
            title={'Physical inventory'}
            image={<DeliveryBox />}
            route="/home"
            onPress={route => {}}
            dataOptions={cardDataDropdown}
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
            dataOptions={cardDataDropdown}
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
            dataOptions={cardDataDropdown}
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
            dataOptions={cardDataDropdown}
            styleType={'secondary'}
            disabled={true}
            isDropdown={false}
          />
        </View>
      </View>
      <Text style={stylesTitle.title}>Placeholder</Text>
      <View style={styles.cardDropdownStoriesRow}>
        <View style={styles.cardDropdownStoriesContainer}>
          <CardDropdown
            title={'Physical inventory'}
            image={<DeliveryBox />}
            route="/home"
            onPress={route => {}}
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
            styleType={'secondary'}
            disabled={false}
            isDropdown={true}
          />
        </View>
        <View style={styles.cardDropdownStoriesContainer}>
          <CardDropdown
            route="/home"
            onPress={route => {}}
            styleType={'primary'}
            isDropdown={false}
          />
        </View>
        <View style={styles.cardDropdownStoriesContainer}>
          <CardDropdown
            route="/home"
            onPress={route => {}}
            dataOptions={cardDataDropdown}
            styleType={'secondary'}
            isDropdown={false}
          />
        </View>
      </View>
    </ScrollView>
  </ScrollView>
);

export default meta;
export const CardDropdownDefault = TemplateDefault.bind({});
export const CardDropdownVariants = TemplateVariants.bind({});

CardDropdownDefault.args = {
  title: 'Physical inventory',
  image: <DeliveryBox />,
  route: '/home',
  onPress: route => {},
  dataOptions: [
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
  ],
  styleType: 'primary',
  disabled: false,
  isDropdown: true,
};
