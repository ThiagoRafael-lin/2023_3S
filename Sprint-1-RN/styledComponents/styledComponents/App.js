import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title, TitleBtnIncrement, TitleBtnDecrement } from './src/components/Title/Title';
import { BtnIncrement, BtnDecrement } from './src/components/Btns/Btn'

export default function App() {

  //hook de state
  const [count, setCount] = useState(0) 

  //função para incrementar
  const increment = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    if (count > 0 ) {
      setCount(count - 1)
      
    } else {
      Alert.alert('Contador não pode ser menor que zero !');
    }
  }

  useEffect(() => {
    console.warn(`Contador atualizado ${count}`);
  }, [count])

  return (
    <Container>

      {/* title */}
      <Title>Contador: {count}</Title>

      {/* BtnIncrement */}
      <BtnIncrement onPress={increment}>

        {/* TitleBtnIncrement */}
        <TitleBtnIncrement>incrementar</TitleBtnIncrement>
      </BtnIncrement>

      {/* BtnDecrement */}
      <BtnDecrement onPress={decrementar}>
        
        {/* TitleBtnDecrement */}
      <TitleBtnDecrement>Decrementar</TitleBtnDecrement>
      </BtnDecrement>

      <StatusBar style="auto" />
    </Container>
  );
}