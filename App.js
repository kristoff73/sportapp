import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  // Estado para el contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={incrementCount} />
    </View>
  );
}

// Estilos para la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
