import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { FilterPanelProps, SelectedFilters } from './FilterPanel.types';
import { styles } from './FilterPanel.styles';
import FilterSection from './components/FilterSection';
import { XIcon, RotateCcwIcon } from '../../assets/images/icons';
import { NEUTRAL_600, DESTRUCTIVE_100 } from '../../styles/colors';

const DEFAULT_TITLE = 'Filters';
const DEFAULT_CLEAR_LABEL = 'Clear Filters';
const DEFAULT_APPLY_LABEL = 'Apply';

/**
 * FilterPanel - A reusable filter component with accordion-style collapsible sections.
 */
const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  selectedFilters,
  onChange,
  onClear,
  onClose,
  title = DEFAULT_TITLE,
  clearLabel = DEFAULT_CLEAR_LABEL,
  applyLabel = DEFAULT_APPLY_LABEL,
  applyMode = 'auto',
  onApply,
  noResultsMessage,
  style,
  position,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    filters.length > 0 ? filters[0].key : null
  );

  // Local state for selections when in explicit mode
  const [localSelectedFilters, setLocalSelectedFilters] = useState<SelectedFilters>(selectedFilters);

  // Sync with prop if it changes and we are in auto mode
  React.useEffect(() => {
    if (applyMode === 'auto') {
      setLocalSelectedFilters(selectedFilters);
    }
  }, [selectedFilters, applyMode]);

  const handleToggleSection = useCallback((sectionKey: string) => {
    setExpandedSection((prev) => (prev === sectionKey ? null : sectionKey));
  }, []);

  const handleSelectOption = useCallback(
    (sectionKey: string, optionId: string, selectionMode: 'single' | 'multi', maxSelection?: number) => {
      const currentValues = localSelectedFilters[sectionKey] || [];
      let newValues: string[];

      if (selectionMode === 'single') {
        newValues = currentValues.includes(optionId) ? [] : [optionId];
      } else {
        if (currentValues.includes(optionId)) {
          newValues = currentValues.filter((id) => id !== optionId);
        } else {
          if (maxSelection && currentValues.length >= maxSelection) {
            return;
          }
          newValues = [...currentValues, optionId];
        }
      }

      const updatedFilters = { ...localSelectedFilters, [sectionKey]: newValues };
      setLocalSelectedFilters(updatedFilters);

      if (applyMode === 'auto') {
        onChange(sectionKey, newValues);
      }
    },
    [localSelectedFilters, applyMode, onChange]
  );

  const handleClear = useCallback(() => {
    setLocalSelectedFilters({});
    if (applyMode === 'auto') {
      onClear();
    }
  }, [applyMode, onClear]);

  const handleApply = useCallback(() => {
    const isAllClear = Object.values(localSelectedFilters).every(
      (values) => !values || values.length === 0
    );

    if (isAllClear) {
      onClear();
    } else {
      // Notify changes for each section defined in props
      filters.forEach((section) => {
        onChange(section.key, localSelectedFilters[section.key] || []);
      });
    }

    onApply?.();
    onClose?.();
  }, [localSelectedFilters, filters, onChange, onClear, onApply, onClose]);

  const hasAnyFilters = Object.values(localSelectedFilters).some(
    (values) => values && values.length > 0
  );

  const panelContent = (
    <View
      style={[
        styles.panelContainer,
        position && {
          top: position.top,
          left: position.left,
          right: position.right,
          width: position.width,
        },
        style,
      ]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        {onClose && (
          <Pressable
            onPress={onClose}
            accessibilityLabel="Close filters">
            <XIcon fill={NEUTRAL_600} style={{ width: 20, height: 20 }} />
          </Pressable>
        )}
      </View>

      {/* Sections */}
      <ScrollView 
        style={styles.panelContent} 
        contentContainerStyle={styles.panelContentContainer}
        showsVerticalScrollIndicator={true}
      >
        {filters.map((section) => (
          <FilterSection
            key={section.key}
            section={section}
            selectedValues={localSelectedFilters[section.key] || []}
            isExpanded={expandedSection === section.key}
            onToggle={() => handleToggleSection(section.key)}
            noResultsMessage={section.noResultsMessage || noResultsMessage}
            onSelect={(optionId) =>
              handleSelectOption(
                section.key,
                optionId,
                section.selectionMode,
                section.maxSelection
              )
            }
          />
        ))}
      </ScrollView>

      {/* Footer */}
      {(hasAnyFilters || applyMode === 'explicit') && (
        <View style={styles.footer}>
          {hasAnyFilters ? (
            <Pressable
              onPress={handleClear}
              style={styles.clearButton}
              accessibilityLabel={clearLabel}>
              <View style={styles.clearButton}>
                <RotateCcwIcon
                  fill={DESTRUCTIVE_100}
                  style={{ width: 16, height: 16 }}
                />
                <Text style={styles.clearButtonText}>{clearLabel}</Text>
              </View>
            </Pressable>
          ) : <View />}

          {applyMode === 'explicit' && (
            <Pressable
              onPress={handleApply}
              style={styles.applyButton}
              accessibilityLabel={applyLabel}>
              <Text style={styles.applyButtonText}>{applyLabel}</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );

  if (position && onClose) {
    return (
      <Modal transparent visible animationType="fade" onRequestClose={onClose}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              {panelContent}
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return panelContent;
};

export default FilterPanel;
