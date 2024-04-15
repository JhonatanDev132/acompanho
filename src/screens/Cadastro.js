import { Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import SafeContainer from '../components/SafeContainer'
import LinearGradientComponent from '../components/LinearGradientComponent'

import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const cadastrar = async () => { 
    if (!email || !senha || !nome) {
      Alert.alert("Atenção!", "Preencha nome, e-mail e senha!");
      return;
    }

    try {

      const contaUsuario = await createUserWithEmailAndPassword(auth, email, senha)
      
      if(contaUsuario.user) {
        await updateProfile(auth.currentUser, { displayName: nome });
      }


      Alert.alert("Cadastro", "Seu cadastro foi concluído com sucesso!", [
        {
          style: "cancel",
          text: "Ficar aqui mesmo",
          onPress: () => { return; }
        },
        {
          style: "default",
          text: "Ir para área logada",
          onPress: () => navigation.replace("HomeScreen")
        }
      ])

    } catch (error) {
    console.error(error.code);
    let mensagem;
    switch(error.code){
      case "auth/email-already-in-use":
        mensagem = "Este email ta em uso!";
        break;
      case "auth/weak-password": 
        mensagem = "Senha fraca! (mínimo de 6 caracteres)";
        break;
      case "auth/invalid-email": 
        mensagem = "Endereço de e-mail inválido";
        break;
      default:
        mensagem = "Houve um erro, tente novamente mais tarde!";
        break;
    }
    Alert.alert("Ops!", mensagem);
    }
  }

  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View>
          <Text>
            Cadastro
          </Text>

          <View style={styles.formulario}>  
              <TextInput placeholder='nome' onChangeText={(valor) => setNome(valor)}/>
              
              <TextInput placeholder='email' onChangeText={(valor) => setEmail(valor)}/>

              <TextInput placeholder='senha' secureTextEntry onChangeText={(valor) => setSenha(valor)}/>
          </View>
          <Pressable onPress={cadastrar}>
            <Text>Cadastrar</Text>
          </Pressable>
        </View>
      </LinearGradientComponent>
    </SafeContainer>
  )
}

const styles = StyleSheet.create({})