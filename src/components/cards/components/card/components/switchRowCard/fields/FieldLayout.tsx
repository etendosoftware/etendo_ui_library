import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../SwitchRowCard.style';

interface FieldLayoutProps {
  label: string;
  color: any;
  useInlineLayout: boolean;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

const FieldLayout: React.FC<FieldLayoutProps> = ({
  label,
  color,
  useInlineLayout,
  children,
  actionButton,
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
        <View style={styles.inlineInputContainer}>
          <View style={styles.editableInput}>{children}</View>
          {actionButton && (
            <View style={styles.actionButtonContainer}>{actionButton}</View>
          )}
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
      <View style={[{ display: 'flex', flexDirection: 'row', gap: 12 }]}>
        <View style={[styles.editableInputColumn, { flex: 1 }]}>
          {children}
        </View>
        {actionButton && (
          <View style={styles.actionButtonContainer}>{actionButton}</View>
        )}
      </View>
    </View>
  );
};

export default FieldLayout;
