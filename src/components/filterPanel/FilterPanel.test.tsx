import React from 'react';
import renderer from 'react-test-renderer';
import FilterPanel from './FilterPanel';
import FilterButton from './FilterButton';

const mockFilters = [
  {
    key: 'priority',
    title: 'Filter by Priority',
    selectionMode: 'single' as const,
    options: [
      { id: 'critical', label: 'Critical', value: 'critical' },
      { id: 'major', label: 'Major', value: 'major' },
      { id: 'minor', label: 'Minor', value: 'minor' },
    ],
  },
  {
    key: 'status',
    title: 'Filter by Status',
    selectionMode: 'multi' as const,
    options: [
      { id: 'pending', label: 'Pending', value: 'pending' },
      { id: 'in_progress', label: 'In Progress', value: 'in_progress' },
      { id: 'completed', label: 'Completed', value: 'completed' },
    ],
  },
];

describe('FilterPanel Component', () => {
  it('renders correctly with filters', () => {
    const tree = renderer
      .create(
        <FilterPanel
          filters={mockFilters}
          selectedFilters={{}}
          onChange={() => {}}
          onClear={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with selected filters', () => {
    const tree = renderer
      .create(
        <FilterPanel
          filters={mockFilters}
          selectedFilters={{
            priority: ['critical'],
            status: ['pending', 'completed'],
          }}
          onChange={() => {}}
          onClear={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom title', () => {
    const tree = renderer
      .create(
        <FilterPanel
          filters={mockFilters}
          selectedFilters={{}}
          onChange={() => {}}
          onClear={() => {}}
          title="Custom Filters"
          clearLabel="Reset All"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('FilterButton Component', () => {
  it('renders correctly without active filters', () => {
    const tree = renderer
      .create(
        <FilterButton
          onPress={() => {}}
          hasActiveFilters={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with active filters', () => {
    const tree = renderer
      .create(
        <FilterButton
          onPress={() => {}}
          hasActiveFilters={true}
          activeFilterCount={3}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when disabled', () => {
    const tree = renderer
      .create(
        <FilterButton
          onPress={() => {}}
          hasActiveFilters={false}
          disabled={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
