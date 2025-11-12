import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { SearchIcon } from '../../../../../../../assets/images/icons';
import { Button } from '../../../../../../../components/button';
import { styles } from '../SwitchRowCard.style';
import { SwitchRowCardProps } from '../SwitchRowCard.type';

interface ActionButtonProps {
  actionButton?: {
    icon?: React.ReactNode | string;
    onPress: (cardData: any, fieldKey: string) => void;
  };
  row?: NonNullable<SwitchRowCardProps['row']>;
  item?: any;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  actionButton,
  row,
  item,
  disabled = false,
}) => {
  const handleActionButtonPress = useCallback(() => {
    if (actionButton?.onPress && row?.key && item) {
      actionButton.onPress(item, row.key);
    }
  }, [actionButton, item, row?.key]);

  const getActionButtonIcon = (): React.ReactElement | undefined => {
    if (actionButton?.icon) {
      if (typeof actionButton.icon === 'string') {
        return <Text style={styles.textValue}>{actionButton.icon}</Text>;
      }
      if (React.isValidElement(actionButton.icon)) {
        return actionButton.icon;
      }
    }

    // Default icon (magnifying glass)
    return <SearchIcon />;
  };

  if (!actionButton) {
    return null;
  }

  return (
    <Button
      onPress={handleActionButtonPress}
      disabled={disabled}
      typeStyle="primary"
      width={32}
      height={32}
      paddingHorizontal={0}
      paddingVertical={0}
      iconLeft={getActionButtonIcon()}
    />
  );
};

export default ActionButton;
