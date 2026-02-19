import { StyleSheet } from 'react-native';
import {
  NEUTRAL_0,
  NEUTRAL_5,
  NEUTRAL_10,
  NEUTRAL_100,
  NEUTRAL_600,
  PRIMARY_100,
  DESTRUCTIVE_100,
  TERTIARY_50,
  TERTIARY_70,
} from '../../styles/colors';

export const styles = StyleSheet.create({
  // Panel container
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  panelContainer: {
    position: 'absolute',
    backgroundColor: NEUTRAL_0,
    borderRadius: 8,
    elevation: 8,
    zIndex: 1001,
    maxHeight: 550,
    minWidth: 280,
    borderWidth: 1,
    borderColor: NEUTRAL_10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    height: 'auto',
    minHeight: 0,
  },
  panelContent: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  panelContentContainer: {
    paddingBottom: 0,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: PRIMARY_100,
  },

  // Section
  section: {
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  sectionHeaderPressed: {
    backgroundColor: NEUTRAL_5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: NEUTRAL_100,
  },
  sectionTitleExpanded: {
    color: PRIMARY_100,
    fontWeight: '600',
  },
  sectionChevron: {
    marginLeft: 8,
  },
  sectionBadge: {
    backgroundColor: TERTIARY_70,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  sectionBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: PRIMARY_100,
  },
  sectionContent: {
    paddingBottom: 12,
  },

  // Search
  searchInputContainer: {
    paddingBottom:8,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 36,
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 14,
  },

  // Option
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  optionPressed: {
    backgroundColor: NEUTRAL_5,
  },
  optionSelected: {
    backgroundColor: TERTIARY_50,
  },
  optionIndicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: NEUTRAL_600,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionIndicatorMulti: {
    borderRadius: 4,
  },
  optionIndicatorSelected: {
    borderColor: PRIMARY_100,
    backgroundColor: PRIMARY_100,
  },
  optionIndicatorInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: NEUTRAL_0,
  },
  optionIndicatorCheck: {
    width: 10,
    height: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: NEUTRAL_0,
    transform: [{ rotate: '-45deg' }],
    marginTop: -2,
  },
  optionLabel: {
    fontSize: 14,
    color: NEUTRAL_100,
    flex: 1,
  },
  optionLabelSelected: {
    color: PRIMARY_100,
    fontWeight: '500',
  },

  // Footer / Action Bar
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: NEUTRAL_10,
    backgroundColor: NEUTRAL_0,
    zIndex: 10, // Ensure it's above content
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: DESTRUCTIVE_100,
    marginLeft: 6,
  },
  applyButton: {
    backgroundColor: PRIMARY_100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  applyButtonText: {
    color: NEUTRAL_0,
    fontSize: 14,
    fontWeight: '600',
  },

  // Filter Button
  filterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAD614',
    borderRadius: 8,
    padding: 10,
  },
  filterButtonDisabled: {
    opacity: 0.5,
  },
  filterButtonActive: {
    position: 'relative',
  },
  filterButtonBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: DESTRUCTIVE_100,
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  filterButtonBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: NEUTRAL_0,
  },
  noResultsContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultsText: {
    color: NEUTRAL_600,
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
