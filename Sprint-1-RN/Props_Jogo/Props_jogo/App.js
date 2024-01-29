import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import jogo from './src/components/jogo/jogo';

export default function App() {

  const gameList = [

    { id: "1", name: "FarCry 4", valor: 20},
    { id: "2", name: "TombRaider", valor: 50},
    { id: "3", name: "palWorld", valor: 100}


  ]

  return (
    <SafeAreaView>
      <StatusBar/>

      <FlatList
        data = {gameList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <jogo name={item.nome} valor={item.valor}/>}

      />

      <jogo name = "FarCry 4" valor= {20}/>
      <jogo name = "TombRaider" valor= {50}/>
      <jogo name = "PalWorld" valor= {100}/>

    </SafeAreaView>
);  <StatusBar/>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
