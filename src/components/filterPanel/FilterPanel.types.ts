import { DimensionValue, ViewStyle } from 'react-native';

/**
 * Represents a single option within a filter section.
 */
export interface FilterOption {
  /** Unique identifier for the option */
  id: string;
  /** Display label for the option */
  label: string;
  /** Value associated with this option */
  value: any;
}

/**
 * Represents a filter section (accordion panel).
 */
export interface FilterSection {
  /** Unique key identifier for this filter section */
  key: string;
  /** Display title for the section (e.g., "Priority", "Status") */
  title: string;
  /** List of selectable options within this section */
  options: FilterOption[];
  /** Selection mode: 'single' for radio-like, 'multi' for checkbox-like */
  selectionMode: 'single' | 'multi';
  /** Optional maximum number of selections for multi-select mode */
  maxSelection?: number;
  /** Whether to enable search within this section's options */
  searchEnabled?: boolean;
  /** Optional placeholder for the search input */
  searchPlaceholder?: string;
  /** Optional message to display when no options match search criteria. Header "No results found" */
  noResultsMessage?: string;
  /** Callback to fetch options dynamically (e.g., from an API) */
  onFetchData?: (searchText: string) => Promise<FilterOption[]>;
}

/**
 * Represents the current state of selected filters.
 * Maps filter section keys to arrays of selected option IDs.
 */
export type SelectedFilters = Record<string, string[]>;

/**
 * Props for the main FilterPanel component.
 */
export interface FilterPanelProps {
  /** Array of filter section definitions */
  filters: FilterSection[];
  /** Current selected filters state (controlled) */
  selectedFilters: SelectedFilters;
  /** Callback triggered when filter selection changes */
  onChange: (filterKey: string, selectedValues: string[]) => void;
  /** Callback to clear all filters */
  onClear: () => void;
  /** Callback when panel is closed */
  onClose?: () => void;
  /** Panel header title. Default: "Filters" */
  title?: string;
  /** Clear action label. Default: "Clear Filters" */
  clearLabel?: string;
  /** Apply action label. Default: "Apply" */
  applyLabel?: string;
  /** Default message when no results are found in filter sections */
  noResultsMessage?: string;
  /** Whether to apply changes immediately or wait for explicit "Apply" press */
  applyMode?: 'auto' | 'explicit';
  /** Callback triggered when explicit "Apply" is pressed */
  onApply?: () => void;
  /** Custom container style */
  style?: ViewStyle;
  /** Position for the panel */
  position?: {
    top: number;
    left?: number;
    right?: number;
    width: number;
  };
}

/**
 * Props for the FilterButton (trigger) component.
 */
export interface FilterButtonProps {
  /** Callback when button is pressed */
  onPress: () => void;
  /** Whether any filters are currently active */
  hasActiveFilters: boolean;
  /** Number of active filters (for badge display) */
  activeFilterCount?: number;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Custom button size */
  size?: number;
}

/**
 * Props for FilterSection sub-component.
 */
export interface FilterSectionProps {
  /** Section configuration */
  section: FilterSection;
  /** Currently selected option IDs for this section */
  selectedValues: string[];
  /** Whether this section is currently expanded */
  isExpanded: boolean;
  /** Callback when section header is pressed */
  onToggle: () => void;
  /** Optional message to display when no options match search criteria */
  noResultsMessage?: string;
  /** Callback when option is selected */
  onSelect: (optionId: string) => void;
}

/**
 * Props for FilterOption sub-component.
 */
export interface FilterOptionProps {
  /** Option configuration */
  option: FilterOption;
  /** Whether this option is selected */
  isSelected: boolean;
  /** Selection mode inherited from parent section */
  selectionMode: 'single' | 'multi';
  /** Callback when option is pressed */
  onPress: () => void;
}
