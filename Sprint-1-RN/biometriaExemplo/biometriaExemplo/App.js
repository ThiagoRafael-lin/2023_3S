import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import moment from 'moment/moment';

export default function App() {

  const [dateHistory, setDateHistory] = useState({}) //Salvar o obj com historico
  const [authenticated, setAuthenticated] = useState(false) //salvar o status da auteticação
  const [isBiometricSupported, setIsBiometricSupported] = useState(false) //salver referencia de suporte a biometria

  //função para verificar se existe biometria no aparelho
  async function CheckExistAuthentications() {
    const compatible = await LocalAuthentication.hasHardwareAsync

    //salvando o status de compatibilidade com a biometria
    setIsBiometricSupported(compatible);
  }

  //Salva o histórico da ultima autenticação
  async function SetHistory() {
    const objAuth = {
      dataAuthetication: moment().format('DD/MM/YYYY HH:MM:SS')
    }

    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth))

    setDateHistory(objAuth)
  }

  //Recebe o historico da ultima autenticação
  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem('authenticate')

    if (objAuth) {
      setDateHistory(JSON.parse(objAuth))
    }
  }

  async function handleAuthentication() {
    //verificar se existe uma biometria cadastrada
    const biometricExist = await LocalAuthentication.isEnrolledAsync();

    //Validar a existencia  
    if (!biometricExist) {
      return Alert.Alert(
        'Falha ao logar',
        'Não foi encontrado nenhuma biometria cadastrada.'
      )
    }

    //Caso exsita -->
    const auth = await LocalAuthentication.authenticateAsync();

    setAuthenticated(auth.success)

    //Verificar se está autenticado 
    if (auth.success) {
      SetHistory();
    }
  }

  useEffect(() => {
    CheckExistAuthentications()

    GetHistory() //Buscando a ultima autenticação
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {
          isBiometricSupported
            ? 'Seu dispositivo é compatível com a biometria'
            : 'O seu dispositivo não suporta a biometria / face id'
        }
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.txtAuth}>Autenticar acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}>
        {
          authenticated
            ? 'Autenticado'
            : 'Não autenticado'
        }
      </Text>
      {
        dateHistory.dataAuthetication
          ? <Text style={styles.txtHistory}>
            Último acesso em {dateHistory.dataAuthetication}
          </Text>
          : null
      }
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
  title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30
  },
  btnAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: '#ff8800'
  },
  txtAuth: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  txtReturn: {
    fontSize: 22,
    marginTop: 50,
  },
  txtHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 120
  }
});
