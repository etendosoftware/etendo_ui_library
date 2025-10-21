import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Cards } from './src/components/cards';
import { CardsMetadata } from './src/components/cards/Cards.types';
import { Button } from './src/components/button';

// Datos de ejemplo
const initialCardsData = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    age: 28,
    salary: 50000,
    birthDate: '15/05/1995',
    hireDate: '10/01/2020',
    active: true,
    verified: false,
    department: 'Ventas',
    description:
      'Vendedor senior con 5 años de experiencia en el sector tecnológico',
    status: 'active',
    color: '#10B981',
    isActive: true,
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria.garcia@example.com',
    age: 35,
    salary: 75000,
    birthDate: '22/08/1988',
    hireDate: '15/06/2018',
    active: true,
    verified: true,
    department: 'Desarrollo',
    description:
      'Desarrolladora full-stack especializada en React Native y Node.js',
    status: 'active',
    color: '#10B981',
    isActive: true,
  },
  {
    id: '3',
    name: 'Carlos López',
    email: 'carlos.lopez@example.com',
    age: 42,
    salary: 95000,
    birthDate: '10/03/1981',
    hireDate: '20/09/2015',
    active: false,
    verified: true,
    department: 'Gerencia',
    description: 'Gerente de proyectos con más de 15 años de experiencia',
    status: 'inactive',
    color: '#6B7280',
    isActive: false,
  },
  {
    id: '4',
    name: 'Ana Martínez',
    email: 'ana.martinez@example.com',
    age: 26,
    salary: 45000,
    birthDate: '03/11/1997',
    hireDate: '01/03/2021',
    active: true,
    verified: false,
    department: 'Marketing',
    description: 'Especialista en marketing digital',
    status: 'pending',
    color: '#F59E0B',
    isActive: true,
  },
  {
    id: '5',
    name: 'Pedro Sánchez',
    email: 'pedro.sanchez@example.com',
    age: 31,
    salary: 62000,
    birthDate: '18/07/1992',
    hireDate: '05/11/2019',
    active: true,
    verified: true,
    department: 'Diseño',
    description: 'Diseñador UX/UI con enfoque en accesibilidad',
    status: 'active',
    color: '#10B981',
    isActive: true,
  },
];

const ExampleApp = () => {
  const [cardsData, setCardsData] = useState(initialCardsData);
  const [editMode, setEditMode] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<
    number | undefined
  >();
  const [isLegendExpanded, setIsLegendExpanded] = useState(true);

  // Metadata SOLO LECTURA - Todos los campos visibles pero no editables
  const metadataReadOnly: CardsMetadata[] = [
    // Títulos
    {
      key: 'name',
      label: 'Nombre Completo',
      type: 'string',
      title: true,
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'department',
      label: 'Departamento',
      type: 'string',
      title: true,
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'status',
      label: 'Estado',
      type: 'status',
      title: true,
      visible: true,
      isEditing: false, // Solo lectura
      statusMetadata: {
        active: {
          label: 'Activo',
          backgroundColor: '#10B981',
          textColor: '#FFFFFF',
        },
        inactive: {
          label: 'Inactivo',
          backgroundColor: '#6B7280',
          textColor: '#FFFFFF',
        },
        pending: {
          label: 'Pendiente',
          backgroundColor: '#F59E0B',
          textColor: '#FFFFFF',
        },
        default: {
          label: 'Sin estado',
          backgroundColor: '#E5E7EB',
          textColor: '#1F2937',
        },
      },
    },
    // Campos de datos - Solo lectura
    {
      key: 'id',
      label: 'ID',
      type: 'string',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'email',
      label: 'Correo Electrónico',
      type: 'string',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'age',
      label: 'Edad',
      type: 'number',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'salary',
      label: 'Salario Anual',
      type: 'number',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'birthDate',
      label: 'Fecha de Nacimiento',
      type: 'date',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'hireDate',
      label: 'Fecha de Contratación',
      type: 'date',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'active',
      label: 'Activo',
      type: 'boolean',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'verified',
      label: 'Verificado',
      type: 'boolean',
      visible: true,
      isEditing: false, // Solo lectura
    },
    {
      key: 'description',
      label: 'Descripción del Puesto',
      type: 'string',
      visible: true,
      numberOfLines: 3,
      isEditing: false, // Solo lectura
    },
  ];

  // Metadata EDITABLE - Todos los campos editables
  const metadataEditable: CardsMetadata[] = [
    // Títulos - Editables
    {
      key: 'name',
      label: 'Nombre Completo',
      type: 'string',
      title: true,
      visible: true,
      isEditing: true, // ✏️ EDITABLE
      debounceDelay: 500, // Debounce de 500ms
    },
    {
      key: 'department',
      label: 'Departamento',
      type: 'string',
      title: true,
      visible: true,
      isEditing: true, // ✏️ EDITABLE
      debounceDelay: 500, // Debounce de 500ms
    },
    {
      key: 'status',
      label: 'Estado',
      type: 'status',
      title: true,
      visible: true,
      isEditing: false, // Status no es editable directamente
      statusMetadata: {
        active: {
          label: 'Activo',
          backgroundColor: '#10B981',
          textColor: '#FFFFFF',
        },
        inactive: {
          label: 'Inactivo',
          backgroundColor: '#6B7280',
          textColor: '#FFFFFF',
        },
        pending: {
          label: 'Pendiente',
          backgroundColor: '#F59E0B',
          textColor: '#FFFFFF',
        },
        default: {
          label: 'Sin estado',
          backgroundColor: '#E5E7EB',
          textColor: '#1F2937',
        },
      },
    },
    // Campos de datos - Todos editables
    {
      key: 'id',
      label: 'ID',
      type: 'string',
      visible: true,
      isEditing: false, // ID no debería ser editable
    },
    {
      key: 'email',
      label: 'Correo Electrónico',
      type: 'string',
      visible: true,
      isEditing: true, // ✏️ EDITABLE
      debounceDelay: 800, // Debounce de 800ms para emails
    },
    {
      key: 'age',
      label: 'Edad',
      type: 'number',
      visible: true,
      isEditing: true, // ✏️ EDITABLE - Input numérico
      debounceDelay: 500, // Debounce de 500ms
    },
    {
      key: 'salary',
      label: 'Salario Anual',
      type: 'number',
      visible: true,
      isEditing: true, // ✏️ EDITABLE - Input numérico
    },
    {
      key: 'birthDate',
      label: 'Fecha de Nacimiento',
      type: 'date',
      visible: true,
      isEditing: true, // ✏️ EDITABLE - DatePicker
      debounceDelay: 1000, // Debounce de 1000ms para fechas
    },
    {
      key: 'hireDate',
      label: 'Fecha de Contratación',
      type: 'date',
      visible: true,
      isEditing: true, // ✏️ EDITABLE - DatePicker
      debounceDelay: 1000, // Debounce de 1000ms para fechas
    },
    {
      key: 'active',
      label: 'Activo',
      type: 'boolean',
      visible: true,
      isEditing: true, // ✏️ EDITABLE - Checkbox clickeable
    },
    {
      key: 'verified',
      label: 'Verificado',
      type: 'boolean',
      visible: true,
      isEditing: true, // ✏️ EDITABLE - Checkbox clickeable
    },
    {
      key: 'description',
      label: 'Descripción del Puesto',
      type: 'string',
      visible: true,
      numberOfLines: 3,
      isEditing: true, // ✏️ EDITABLE - TextInput multilinea
    },
  ];

  // Handler para cambios en las cards
  const handleCardChange = (
    newValue: unknown,
    oldValue: unknown,
    index: number,
  ) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📝 CARD MODIFICADA');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Índice:', index);
    console.log('\n📋 Valor anterior:');
    console.log(JSON.stringify(oldValue, null, 2));
    console.log('\n✨ Valor nuevo:');
    console.log(JSON.stringify(newValue, null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Actualizar el estado con el nuevo valor
    const updatedCards = [...cardsData];
    updatedCards[index] = newValue as (typeof initialCardsData)[0];
    setCardsData(updatedCards);

    console.log('✅ Estado actualizado exitosamente');
  };

  // Handler para click en una card
  const handlePressCard = (primary: string, index: number) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🖱️  CLICK EN CARD');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Primary ID:', primary);
    console.log('Índice:', index);
    console.log('\n📊 Datos completos de la card:');
    console.log(JSON.stringify(cardsData[index], null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  };

  // Handler para seleccionar una card (long press)
  const handleSelectCard = (primary: string, index: number) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ CARD SELECCIONADA (LONG PRESS)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Primary ID:', primary);
    console.log('Índice:', index);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    setSelectedCardIndex(index);
  };

  // Handler para agregar nueva card
  const handleAddCard = () => {
    const newId = String(cardsData.length + 1);
    const today = new Date();
    const todayFormatted = `${String(today.getDate()).padStart(
      2,
      '0',
    )}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    const newCard = {
      id: newId,
      name: `Empleado #${newId}`,
      email: `empleado${newId}@example.com`,
      age: 25,
      salary: 40000,
      birthDate: '01/01/2000',
      hireDate: todayFormatted,
      active: true,
      verified: false,
      department: 'Sin asignar',
      description:
        'Nueva entrada - Edita los campos para completar la información',
      status: 'pending',
      color: '#F59E0B',
      isActive: true,
    };

    setCardsData([...cardsData, newCard]);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('➕ NUEVA CARD AGREGADA');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Total de cards:', cardsData.length + 1);
    console.log('Nueva card:', newCard);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  };

  // Toggle entre modo lectura y edición
  const toggleEditMode = () => {
    const newMode = !editMode;
    setEditMode(newMode);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(
      newMode ? '✏️  MODO EDICIÓN ACTIVADO' : '📖 MODO LECTURA ACTIVADO',
    );
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Campos editables:', newMode ? 'SÍ' : 'NO');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  };

  // Resetear datos
  const handleReset = () => {
    setCardsData(initialCardsData);
    setSelectedCardIndex(undefined);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🔄 DATOS RESETEADOS');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Total de cards:', initialCardsData.length);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cards Component - Example App</Text>
        <Text style={styles.subtitle}>
          Prueba todas las funcionalidades de Cards con edición inline
        </Text>
      </View>

      <View style={styles.controls}>
        <Button
          text={editMode ? '📖 Modo Lectura' : '✏️ Modo Edición'}
          onPress={toggleEditMode}
          typeStyle={editMode ? 'primary' : 'secondary'}
        />
        <Button text="🔄 Resetear" onPress={handleReset} typeStyle="white" />
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>
          {editMode
            ? '✏️ Modo Edición Activo: Haz clic en los campos para editarlos'
            : '📖 Modo Lectura Activo: Solo visualización'}
        </Text>
        <Text style={styles.infoText}>Total de cards: {cardsData.length}</Text>
        {selectedCardIndex !== undefined && (
          <Text style={styles.infoText}>
            Card seleccionada: #{selectedCardIndex + 1} -{' '}
            {cardsData[selectedCardIndex]?.name}
          </Text>
        )}
      </View>

      <ScrollView style={styles.cardsContainer}>
        <Cards
          data={cardsData}
          metadata={editMode ? metadataEditable : metadataReadOnly}
          title="Empleados"
          maxTitles={3}
          maxRows={15}
          onPressCard={handlePressCard}
          onSelectCard={handleSelectCard}
          onChange={handleCardChange}
          onPressButton={handleAddCard}
          scrollToIndex={selectedCardIndex}
          textEmptyCards="No hay empleados registrados"
          commentEmptyCards="Agrega el primer empleado usando el botón +"
        />
      </ScrollView>

      <View style={styles.legend}>
        <TouchableOpacity
          style={styles.legendHeader}
          onPress={() => setIsLegendExpanded(!isLegendExpanded)}
          activeOpacity={0.7}>
          <Text style={styles.legendTitle}>
            📚 Guía de Uso {isLegendExpanded ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>

        {isLegendExpanded && (
          <>
            <View style={styles.legendSection}>
              <Text style={styles.legendSubtitle}>Interacciones:</Text>
              <Text style={styles.legendItem}>
                • Click corto → Ver detalles en consola
              </Text>
              <Text style={styles.legendItem}>
                • Long press → Seleccionar/deseleccionar card
              </Text>
              <Text style={styles.legendItem}>
                • Botón + → Agregar nueva card
              </Text>
            </View>

            <View style={styles.legendSection}>
              <Text style={styles.legendSubtitle}>Modo Edición:</Text>
              <Text style={styles.legendItem}>
                • String → Input de texto editable
              </Text>
              <Text style={styles.legendItem}>
                • Number → Input numérico con validación
              </Text>
              <Text style={styles.legendItem}>
                • Date → Calendar picker (DD/MM/YYYY)
              </Text>
              <Text style={styles.legendItem}>
                • Boolean → Click para toggle on/off
              </Text>
              <Text style={styles.legendItem}>
                • Status → Solo lectura (badge de estado)
              </Text>
            </View>

            <View style={styles.legendSection}>
              <Text style={styles.legendSubtitle}>Campos Editables:</Text>
              <Text style={styles.legendItem}>
                ✏️ Nombre, Departamento, Email
              </Text>
              <Text style={styles.legendItem}>✏️ Edad, Salario</Text>
              <Text style={styles.legendItem}>
                ✏️ Fecha Nacimiento, Fecha Contratación
              </Text>
              <Text style={styles.legendItem}>✏️ Activo, Verificado</Text>
              <Text style={styles.legendItem}>✏️ Descripción</Text>
            </View>

            <View style={styles.legendSection}>
              <Text style={styles.legendSubtitle}>Campos Solo Lectura:</Text>
              <Text style={styles.legendItem}>
                🔒 ID, Estado (Status Badge)
              </Text>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  controls: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  info: {
    padding: 16,
    backgroundColor: '#EFF6FF',
    borderBottomWidth: 1,
    borderBottomColor: '#DBEAFE',
  },
  infoText: {
    fontSize: 14,
    color: '#1E40AF',
    marginBottom: 4,
    fontWeight: '500',
  },
  cardsContainer: {
    flex: 1,
    padding: 16,
  },
  legend: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  legendHeader: {
    paddingVertical: 4,
    marginBottom: 12,
  },
  legendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  legendSection: {
    marginBottom: 12,
  },
  legendSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  legendItem: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 3,
    marginLeft: 8,
  },
});

export default ExampleApp;
