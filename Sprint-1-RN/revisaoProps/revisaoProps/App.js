import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList } from 'react-native';
import Person from './src/components/person/Person';
import { useFonts, Poppins_300Light, Poppins_500Medium_Italic } from '@expo-google-fonts/poppins';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';
// import { FlatList } from 'react-native-web';


export default function App() {

    let [fontsLoaded, fontError] = useFonts({
      Poppins_300Light,
      Poppins_500Medium_Italic,
      SingleDay_400Regular
    });
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    const peapleList = [
      { id: "1", name: "Carlos", age: 37},
      { id: "2", name: "edu", age: 38},
      { id: "3", name: "tinas", age: 18}
      
    ]

    // const gameEstyle = [
    //   {id: "4", name: "FarCry 4", valor: 20},
    //   {id: "5", name: "TombRaider", valor: 30},
    //   {id: "6", name: "PalWorld", valor: 100}
    // ]
  
  return (
    <SafeAreaView>   
      <StatusBar/>

       <FlatList 
       data = {peapleList}
       keyExtractor={(item) => item.id}
       renderItem={({item}) => <Person name={item.nome} age={item.age}/>}
       
       />

       {/* <FlatList
       
       data = {gameEstyle}
       keyExtractor={(item) => item.id}
       renderItem={({item}) => <Person name={item.nome} valor={item.valor}/>}

       /> */}



      <Person name = 'Carlos' age = {37}/>
      <Person name = 'Finas' age = {19}/>
      <Person name = 'Tinas' age = {18}/>

      {/* <Person name = "FarCry 4" valor = {20}/>
      <Person name = "TombRaider" valor = {30}/>
      <Person name = "PalWorld" valor = {100}/>
 */}

    </SafeAreaView>
  );
}
