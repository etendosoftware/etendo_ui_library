import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {
  CheckSquareicon,
  SquareIcon,
} from '../../../../../../../assets/images/icons';
import { PRIMARY_100 } from '../../../../../../../styles/colors';
import { styles } from '../SwitchRowCard.style';

const DOTS: string = '··························';

interface EditableBooleanFieldProps {
  label: string;
  value: boolean;
  onPress: () => void;
  useInlineLayout: boolean;
  color: any;
  actionButton?: React.ReactNode;
}

const EditableBooleanField: React.FC<EditableBooleanFieldProps> = ({
  label,
  value,
  onPress,
  useInlineLayout,
  color,
  actionButton,
}) => {
  const CheckboxIcon = value ? CheckSquareicon : SquareIcon;

  if (useInlineLayout) {
    return (
      <View style={styles.row}>
        <Pressable style={[styles.contentMiddleRow, styles.paddingRight]} onPress={onPress}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {label}
          </Text>
        </Pressable>
        <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
          {DOTS}
        </Text>
        <Pressable style={[styles.contentMiddleRow, styles.paddingLeft]} onPress={onPress}>
          <CheckboxIcon style={styles.check} fill={PRIMARY_100} />
        </Pressable>
        {actionButton}
      </View>
    );
  }

  return (
    <View style={styles.columnEditable}>
      <Pressable onPress={onPress}>
        <Text
          style={[styles.textName, color]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {label}
        </Text>
      </Pressable>
      <View style={styles.editableInputColumn}>
        <Pressable onPress={onPress}>
          <CheckboxIcon style={styles.check} fill={PRIMARY_100} />
        </Pressable>
      </View>
      {actionButton}
    </View>
  );
};

export default EditableBooleanField;
