import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../SwitchRowCard.style';

interface FieldLayoutProps {
  label: string;
  color: any;
  useInlineLayout: boolean;
  children: React.ReactNode;
}

const FieldLayout: React.FC<FieldLayoutProps> = ({
  label,
  color,
  useInlineLayout,
  children,
}) => {
  if (useInlineLayout) {
    return (
      <View style={styles.row}>
        <View style={[styles.contentMiddleRow, styles.paddingRight]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {label}
          </Text>
        </View>
        <View
          style={[
            styles.contentMiddleRow,
            styles.paddingLeft,
            styles.editableInput,
          ]}>
          {children}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.columnEditable}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {label}
      </Text>
      <View style={styles.editableInputColumn}>{children}</View>
    </View>
  );
};

export default FieldLayout;
