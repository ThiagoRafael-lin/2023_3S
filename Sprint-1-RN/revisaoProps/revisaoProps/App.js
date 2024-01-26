import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Person } from './src/components/person/Person';


export default function App() {
  return (
    <SafeAreaView>   
      <StatusBar/>

      <Person name = 'Carlos' age = {37}/>
      <Person name = 'Finas' age = {19}/>
      <Person name = 'Tinas' age = {18}/>


    </SafeAreaView>
  );
}
