import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/button/Button';
import FileSearchInput from "./components/inputBase/file-search-input/FileSearchInput";


function App(): JSX.Element {
  const [value, setValue] = useState('');
  const [file, setFile] = useState('');
  const [loadingFile, setLoadingFile] = useState(false)


  const handleSubmit = (file: any) => {
    if (file) {
      setFile(file.name);
      setLoadingFile(file); // Asegúrate de que loadingFile sea igual a file
    } else {
      setFile('');
    }
    setValue("")
  };
  const onLoadingFile = async (file: any) => {
    setLoadingFile(true); // Inicia la carga

    // Simula un tiempo de carga del archivo entre 3 y 7 segundos
    const loadTime = Math.random() * (7000 - 3000) + 3000;
    setTimeout(() => {
      setLoadingFile(false); // Detiene la carga después de la simulación
      setFile(file); // Asegúrate de actualizar el estado del archivo aquí si es necesario
    }, loadTime);
  };

  return (
    <SafeAreaView>
      <Text style={[styles.sectionTitle]}>Etendo UI Library</Text>
      <FileSearchInput
        value={value}
        placeholder="Message..."
        onChangeText={text => setValue(text)}
        onSubmit={handleSubmit}
        loadingFile={loadingFile}
        onLoadingFile={onLoadingFile}
        file={file}
        setFile={setFile}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8
  },
});

export default App;