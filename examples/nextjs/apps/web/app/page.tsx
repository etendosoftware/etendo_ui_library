"use client";

import React, { useEffect, useRef, useState } from "react";
import FileSearchInput from "./components/inputBase/file-search-input/FileSearchInput";
import { ScrollView, StyleSheet, View } from "react-native";
import TextMessage from "./components/text-message/TextMessage";

export default function Web() {
  const [value, setValue] = useState('');
  const [file, setFile] = useState('');
  const [loadingFile, setLoadingFile] = useState(false)

  const messages = [
    {
      title: "Hi!",
      text: "¡Hola! ¿Cómo estás?",
      time: "12:01 PM",
      type: "left-user",
    },
    {
      text: "¡Bien, gracias! ¿Y tú?",
      time: "12:02 PM",
      type: "right-user",
    },
    {
      title: "Thanks!",
      text: "¡Hola! ¿Cómo estás?",
      time: "12:01 PM",
      type: "left-user",
    },
    {
      title: "Thanks!",
      text: "¡Hola! ¿Cómo estás?",
      time: "12:01 PM",
      type: "left-user",
    },
    {
      title: "Thanks!",
      text: "¡Hola! ¿Cómo estás?",
      time: "12:01 PM",
      type: "left-user",
    },
    {
      "text": "Here's an example Java code snippet that demonstrates error handling:\n\n```java\npublic class ExampleClass {\n    // Main method\n    public static void main(String[] args) {\n        try {\n            performOperation();\n        } catch (Exception e) {\n            System.out.println(\"An error occurred in the request.\");\n            e.printStackTrace();\n        }\n    }\n\n    // Method that may throw an exception\n    private static void performOperation() throws Exception {\n        // Operation logic that might throw an exception\n        if (Math.random() > 0.5) {\n            throw new Exception(\"Simulated error in operation\");\n        }\n        System.out.println(\"Operation successfully completed\");\n    }\n}\n```\nIn this Java code, we have a `try-catch` block that catches exceptions and prints an error message if an exception occurs during the [performOperation](https://docs.etendo.software/). The [performOperation](https://docs.etendo.software/) method simulates an error condition and throws an exception when a random number is greater than 0.5. Otherwise, it prints a success message.\n\nFeel free to ask if you have any questions or need further explanation!",
      time: "12:04 PM",
      type: "left-user",
      isCode: true,
    },
    {
      text: "Este es un mensaje de error.",
      time: "12:03 PM",
      type: "error",
    },
  ];

  const onLoadingFile = async (file) => {
    setLoadingFile(true); // Inicia la carga

    // Simula un tiempo de carga del archivo entre 3 y 7 segundos
    const loadTime = Math.random() * (7000 - 3000) + 3000;
    setTimeout(() => {
      setLoadingFile(false);
      setFile(file); // Asegúrate de actualizar el estado del archivo aquí si es necesario
    }, loadTime);
  };

  const handleSubmit = (file: any) => {
    if (file) {
      setFile(file.name);
      setLoadingFile(file); // Asegúrate de que loadingFile sea igual a file
    } else {
      setFile('');
    }
    setValue("")
  };

  const scrollViewRef = useRef<any>();

  // 3. Desplaza el ScrollView cuando se carga un archivo
  useEffect(() => {
    if (file) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [file]); // Se ejecutará cuando el estado fileLoaded cambie

  return (
    <>
      <View style={{ height: "100vh", flex: 1, backgroundColor: "#F2F5F9" }}>
        <ScrollView
          style={{ flex: file ? 0.85 : 0.945 }}
          ref={scrollViewRef}
        >
          {messages.map((msg, index) => (
            <TextMessage key={index} {...msg} />
          ))}
        </ScrollView>

        <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
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
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // El contenedor principal utiliza todo el espacio disponible
  },
  inputContainer: {
    flex: 1, // Ajusta esta proporción según sea necesario
  },
  fileNameContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
  },
  fileNameText: {
    color: 'black',
  },
});

