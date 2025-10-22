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
}

const EditableBooleanField: React.FC<EditableBooleanFieldProps> = ({
  label,
  value,
  onPress,
  useInlineLayout,
  color,
}) => {
  const CheckboxIcon = value ? CheckSquareicon : SquareIcon;

  if (useInlineLayout) {
    return (
      <Pressable style={styles.row} onPress={onPress}>
        <View style={[styles.contentMiddleRow, styles.paddingRight]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {label}
          </Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
          {DOTS}
        </Text>
        <View style={[styles.contentMiddleRow, styles.paddingLeft]}>
          <CheckboxIcon style={styles.check} fill={PRIMARY_100} />
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable style={styles.columnEditable} onPress={onPress}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {label}
      </Text>
      <View style={styles.editableInputColumn}>
        <CheckboxIcon style={styles.check} fill={PRIMARY_100} />
      </View>
    </Pressable>
  );
};

export default EditableBooleanField;
