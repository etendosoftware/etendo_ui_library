import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

// Importar desde etendo-ui-library cuando esté integrado
// import { FilterPanel, FilterButton } from 'etendo-ui-library';

// Para testing local, importar directamente:
import { FilterPanel, FilterButton, FilterSection, SelectedFilters } from './src/components/filterPanel';

const { width: windowWidth } = Dimensions.get('window');

// Definición de filtros de ejemplo
const filterSections: FilterSection[] = [
  {
    key: 'priority',
    title: 'Filter by Priority',
    selectionMode: 'single',
    searchEnabled: true, // Habilitar búsqueda local
    options: [
      { id: 'critical', label: 'Critical', value: 'critical' },
      { id: 'major', label: 'Major', value: 'major' },
      { id: 'minor', label: 'Minor', value: 'minor' },
      { id: 'trivial', label: 'Trivial', value: 'trivial' },
      { id: 'undefined', label: 'Undefined', value: 'undefined' },
    ],
  },
  {
    key: 'status',
    title: 'Filter by Status',
    selectionMode: 'multi',
    options: [
      { id: 'pending', label: 'Pending', value: 'pending' },
      { id: 'in_progress', label: 'In Progress', value: 'in_progress' },
      { id: 'completed', label: 'Completed', value: 'completed' },
    ],
  },
  {
    key: 'assignee',
    title: 'Dynamic Assignee (API)',
    selectionMode: 'multi',
    searchEnabled: true,
    searchPlaceholder: 'Search assignee...',
    options: [], // Inicia vacío
    onFetchData: async (text: string) => {
      // Simular petición a API
      await new Promise(resolve => setTimeout(resolve, 800));
      const allAssignees = [
        { id: 'user1', label: 'John Doe', value: 'user1' },
        { id: 'user2', label: 'Jane Smith', value: 'user2' },
        { id: 'user3', label: 'Bob Johnson', value: 'user3' },
        { id: 'user4', label: 'Alice Brown', value: 'user4' },
      ];
      return allAssignees.filter(a => a.label.toLowerCase().includes(text.toLowerCase()));
    },
  },
];

// Datos ficticios de tareas
const mockTasks = [
  { id: '1', title: 'CRM-1234', priority: 'critical', status: 'pending' },
  { id: '2', title: 'CRM-1235', priority: 'major', status: 'in_progress' },
  { id: '3', title: 'CRM-1236', priority: 'minor', status: 'completed' },
  { id: '4', title: 'CRM-1237', priority: 'trivial', status: 'pending' },
  { id: '5', title: 'CRM-1238', priority: 'critical', status: 'in_progress' },
];

const FilterPanelDemo: React.FC = () => {
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [panelPosition, setPanelPosition] = useState({ top: 0, right: 16, width: 280 });
  const filterButtonRef = useRef<View>(null);

  // Calcular número de filtros activos
  const activeFilterCount = Object.values(selectedFilters).reduce(
    (count, values) => count + (values?.length || 0),
    0
  );

  const hasActiveFilters = activeFilterCount > 0;

  // Manejar apertura del panel
  const handleOpenPanel = () => {
    if (filterButtonRef.current) {
      filterButtonRef.current.measure((x, y, width, height, pageX, pageY) => {
        setPanelPosition({
          top: pageY + height + 8,
          right: 16,
          width: Math.min(300, windowWidth - 32),
        });
        setShowFilterPanel(true);
      });
    } else {
      setShowFilterPanel(true);
    }
  };

  // Manejar cambio de filtros
  const handleFilterChange = (filterKey: string, selectedValues: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: selectedValues,
    }));
  };

  // Limpiar todos los filtros
  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  // --- LOGICA ETENDO CRITERIA ---
  // Función para convertir el estado de filtros al formato Criteria de Etendo
  const convertToEtendoCriteria = (filters: SelectedFilters) => {
    const criteria = Object.entries(filters)
      .filter(([_, values]) => values && values.length > 0)
      .map(([key, values]) => {
        if (values.length === 1) {
          return {
            fieldName: key,
            operator: 'equals',
            value: values[0],
          };
        }
        return {
          operator: 'or',
          criteria: values.map(val => ({
            fieldName: key,
            operator: 'equals',
            value: val,
          })),
        };
      });

    return {
      _constructor: 'AdvancedCriteria',
      operator: 'and',
      criteria: criteria,
    };
  };

  const handleApplyFilters = () => {
    const etendoCriteria = convertToEtendoCriteria(selectedFilters);
    console.log('Etendo Criteria Generated:', JSON.stringify(etendoCriteria, null, 2));
    alert('Applied! Check console for Etendo Criteria JSON.');
    setShowFilterPanel(false);
  };

  // Filtrar tareas según filtros seleccionados
  const filteredTasks = mockTasks.filter(task => {
    const priorityFilter = selectedFilters.priority || [];
    const statusFilter = selectedFilters.status || [];

    if (priorityFilter.length > 0 && !priorityFilter.includes(task.priority)) {
      return false;
    }
    if (statusFilter.length > 0 && !statusFilter.includes(task.status)) {
      return false;
    }
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CRM Tasks</Text>
        <View ref={filterButtonRef} collapsable={false}>
          <FilterButton
            onPress={handleOpenPanel}
            hasActiveFilters={hasActiveFilters}
            activeFilterCount={activeFilterCount}
          />
        </View>
      </View>

      {/* Search bar placeholder */}
      <View style={styles.searchBar}>
        <Text style={styles.searchPlaceholder}>🔍 Search...</Text>
      </View>

      {/* Status tabs */}
      <View style={styles.tabs}>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabTextActive}>Pending</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>In Progress</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Completed</Text>
        </View>
      </View>

      {/* Active filters display */}
      {hasActiveFilters && (
        <View style={styles.activeFiltersBar}>
          <Text style={styles.activeFiltersText}>
            Active filters: {activeFilterCount}
          </Text>
          <Text style={styles.clearAllText} onPress={handleClearFilters}>
            Clear all
          </Text>
        </View>
      )}

      {/* Tasks list */}
      <ScrollView style={styles.taskList}>
        <Text style={styles.taskCount}>Tasks ({filteredTasks.length})</Text>
        {filteredTasks.map(task => (
          <View key={task.id} style={styles.taskCard}>
            <Text style={styles.taskLabel}>Document No</Text>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View style={styles.taskMeta}>
              <Text style={[styles.taskBadge, (styles as any)[`priority_${task.priority}`]]}>
                {task.priority}
              </Text>
              <Text style={styles.taskStatus}>{task.status}</Text>
            </View>
          </View>
        ))}
        {filteredTasks.length === 0 && (
          <Text style={styles.noResults}>No tasks match the selected filters</Text>
        )}
      </ScrollView>

      {/* Filter Panel */}
      {showFilterPanel && (
        <FilterPanel
          filters={filterSections}
          selectedFilters={selectedFilters}
          onChange={handleFilterChange}
          onClear={handleClearFilters}
          onApply={handleApplyFilters}
          onClose={() => setShowFilterPanel(false)}
          title="Filters"
          clearLabel="Clear Filters"
          applyMode="explicit"
          position={panelPosition}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#202452',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  searchPlaceholder: {
    color: '#999999',
    fontSize: 14,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 12,
    gap: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  tabActive: {
    backgroundColor: '#FFEB7A',
  },
  tabText: {
    color: '#606380',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#202452',
    fontWeight: '600',
    fontSize: 14,
  },
  activeFiltersBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    padding: 8,
    backgroundColor: '#E2E7FF',
    borderRadius: 6,
  },
  activeFiltersText: {
    fontSize: 12,
    color: '#202452',
  },
  clearAllText: {
    fontSize: 12,
    color: '#F36A62',
    fontWeight: '500',
  },
  taskList: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  taskCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202452',
    marginBottom: 12,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FAD614',
  },
  taskLabel: {
    fontSize: 12,
    color: '#808695',
    marginBottom: 4,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202452',
    marginBottom: 8,
  },
  taskMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  taskBadge: {
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    textTransform: 'capitalize',
  },
  priority_critical: {
    backgroundColor: '#FEF0EF',
    color: '#F36A62',
  },
  priority_major: {
    backgroundColor: '#FFF6EC',
    color: '#FBA643',
  },
  priority_minor: {
    backgroundColor: '#E5F7ED',
    color: '#00B34C',
  },
  priority_trivial: {
    backgroundColor: '#F2F5F9',
    color: '#808695',
  },
  priority_undefined: {
    backgroundColor: '#EEEEEE',
    color: '#616161',
  },
  taskStatus: {
    fontSize: 11,
    color: '#808695',
    textTransform: 'capitalize',
  },
  noResults: {
    textAlign: 'center',
    color: '#808695',
    marginTop: 32,
    fontSize: 14,
  },
});

export default FilterPanelDemo;
