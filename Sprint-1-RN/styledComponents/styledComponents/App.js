import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  //hook de state
  const [count, setCount] = useState(0) 

  //função para incrementar
  const increment = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado ${count}`);
  }, [count])

  return (
    <View style={styles.container}>

      <Text>Contador: {count}</Text>

      <TouchableOpacity onPress={increment}>
        <Text style = {styles.text1}>incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrementar}>
      <Text style = {styles.text2}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: 'black',
      marginTop: 10,
      color: 'purple'
  },
  text2: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    marginTop: 10,
    color: 'blue'
}
});
