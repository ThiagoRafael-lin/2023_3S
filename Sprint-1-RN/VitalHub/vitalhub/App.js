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
import { Perfil } from './src/Screens/Perfil/perfil';
import { Prontuario } from './src/Screens/Prontuario/prontuario';
// import { Header } from './src/components/Header/header'
import { Home } from './src/Screens/Home/home';
import { HomePaciente } from './src/Screens/HomePaciente/HomePaciente';
import { SelecionarClinica } from './src/Screens/SelecionarClinica/selecionarClinica';
import { SelecionarMedico } from './src/Screens/SelecionarMedico/SelecionarMedico';
import { SelecionarData } from './src/Screens/SelecionarData/SelecionarData';
import { LocalConsulta } from './src/Screens/LocalConsulta/LocalConsulta';
import { CriarAConta } from './src/Screens/CriarAConta/CriarAConta';
import { VisualizarProntuario } from './src/Screens/VisualizarProntuario/VisualizarProntuario';
import { Main } from './src/Screens/Main/Main';
import { ModalMedicalRecord } from './src/components/ModalMedicalRecord/ModalMedicalRecord';
import { PerfilMedico } from './src/Screens/PerfilMedico/PerfilMedico';
import { MedicalRecordModal } from './src/components/MedicalRecordModal/MedicalRecordModal';
import { ProntuarioPreenchido } from './src/Screens/ProntuarioPreenchido/ProntuarioPreenchido';
import { CameraExpo, CameraVisualizar } from './src/components/CameraVisualizar/CameraVisualizar';

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

          name="Login"
          component={Login}
          options={{ title: "Login" }}

        />
        
        <Stack.Screen
          name='Main'
          component={Main}
        />

        <Stack.Screen
          name='CriarAConta'
          component={CriarAConta}
        />

        <Stack.Screen
          name='ModalMedicalRecord'
          component={ModalMedicalRecord}
        />
        <Stack.Screen
          name='PerfilMedico'
          component={PerfilMedico}
        />
        <Stack.Screen
          name='MedicalRecordModal'
          component={MedicalRecordModal}
        />
        <Stack.Screen
          name='ProntuarioPreenchido'
          component={ProntuarioPreenchido}
        />
        <Stack.Screen
          name='VisualizarProntuario'
          component={VisualizarProntuario}
        />
        <Stack.Screen
          name='CameraExpo'
          component={CameraExpo}
        />
        {/* <Stack.Screen
          name='CameraExpo'
          component={CameraExpo}
        /> */}

        {/* <Stack.Screen

          name="navegacao"
          component={Navegacao}
          options={{ title: "Navegação" }}

        /> */}


        <Stack.Screen

          name="esqueceuSuaSenha"
          component={esqueceuSuaSenha}
          options={{ title: "EsqueceuSuaSenha" }}

        />

        <Stack.Screen

          name="verificarEmail"
          component={verificarEmail}
          options={{ title: "verificarEmail" }}

        />

        <Stack.Screen

          name="redefinirSenha"
          component={redefinirSenha}
          options={{ title: "redefinirSenha" }}

        />

        {/* <Stack.Screen

          name="CriarAConta"
          component={CriarAConta}
          options={{ title: "CriarAConta" }}

        /> */}

        <Stack.Screen

          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}

        />
        <Stack.Screen

          name="Prontuario"
          component={Prontuario}
          options={{ title: "Prontuario" }}

        />
        <Stack.Screen

          name="Home"
          component={Home}
          options={{ title: "Home" }}

        />
        <Stack.Screen

          name="HomePaciente"
          component={HomePaciente}
          options={{ title: "HomePaciente" }}

        />
        <Stack.Screen

          name="SelecionarClinica"
          component={SelecionarClinica}
          options={{ title: "SelecionarClinica" }}

        />
        <Stack.Screen

          name="SelecionarMedico"
          component={SelecionarMedico}
          options={{ title: "SelecionarMedico" }}

        />
        <Stack.Screen

          name="SelecionarData"
          component={SelecionarData}
          options={{ title: "SelecionarData" }}

        />
        <Stack.Screen

          name="LocalConsulta"
          component={LocalConsulta}
          options={{ title: "LocalConsulta" }}

        />
        {/* <Stack.Screen

          name="VisualizarProntuario"
          component={VisualizarProntuario}
          options={{ title: "VisualizarProntuario" }}

        /> */}


      </Stack.Navigator>
    </NavigationContainer>

  );
}

