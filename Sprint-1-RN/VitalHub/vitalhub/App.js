import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'; // talvez precisa arrumar o nome da font 
import { MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates'
import { Quicksand_600SemiBold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import { Navegacao } from './src/Screens/Navegacao/navegacao';
import { Login } from './src/Screens/Login/login';
import { esqueceuSuaSenha } from './src/Screens/EsqueceuSenha/esqueceuSenha';
import { verificarEmail } from './src/Screens/VerifiqueEmail/verificarSenha'
import { redefinirSenha } from './src/Screens/RedefinirSenha/redefinirSenha'
import { criarAConta } from './src/Screens/CriarConta/criarConta';
import { Perfil } from './src/Screens/Perfil/perfil';
import { Prontuario } from './src/Screens/Prontuario/prontuario';
import { Consulta } from './src/Screens/Consulta/consulta';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({

    Montserrat_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_600SemiBold,
    Quicksand_500Medium

  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (



      //container - envolve toda a estrutura
        //navigator - componente para a navegação 
          //tela - tela
            //name: nome da tela
            //componente: componente que será chamado
            //options(title): título da tela

      <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen

            name="navegacao"
            component={Navegacao}
            options={{title: "Navegação"}}

            />

            <Stack.Screen

            name="Login"
            component={Login}
            options={{title: "Login"}}

            />

            <Stack.Screen

            name="esqueceuSuaSenha"
            component={esqueceuSuaSenha}
            options={{title: "EsqueceuSuaSenha"}}

            />

            <Stack.Screen

            name="verificarEmail"
            component={verificarEmail}
            options={{title: "verificarEmail"}}

            />

            <Stack.Screen

            name="redefinirSenha"
            component={redefinirSenha}
            options={{title: "redefinirSenha"}}

            />

            <Stack.Screen

            name="criarAConta"
            component={criarAConta}
            options={{title: "criarAConta"}}

            />

            <Stack.Screen

            name="Perfil"
            component={Perfil}
            options={{title: "Perfil"}}

            />
            <Stack.Screen

            name="Prontuario"
            component={Prontuario}
            options={{title: "Prontuario"}}

            />
            <Stack.Screen

            name="Consulta"
            component={Consulta}
            options={{title: "Consulta"}}

            />


          </Stack.Navigator>
      </NavigationContainer>

  );
}

