import { Pressable, StyleSheet, Text, View, TextInput, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import SafeContainer from '../components/SafeContainer'
import LinearGradientComponent from '../components/LinearGradientComponent'

import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import logoMini from "../../assets/images/logoMini.png"

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../firebase.config';

const db = getFirestore(app);
console.log("Db is", db);

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

      const docRef = await addDoc(collection(db, "usuario"), {
        nome: nome,
        email: email, 
      });
      console.log("Document written with ID: ", docRef.id);


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
    
  };

  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View style={styles.subcontainer}>
          <Image source={logoMini} style={styles.logo} />

          <Text style={styles.titulo}>
            Cadastro
          </Text>

          <View style={styles.formulario}>  
              <TextInput style={styles.input} placeholder='nome' onChangeText={(valor) => setNome(valor)}/>
              
              <TextInput style={styles.input} placeholder='email' onChangeText={(valor) => setEmail(valor)}/>

              <TextInput style={styles.input} placeholder='senha' secureTextEntry onChangeText={(valor) => setSenha(valor)}/>
          </View>
          <Pressable style={styles.botao} onPress={cadastrar}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </Pressable>
        </View>
      </LinearGradientComponent>
    </SafeContainer>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40
  },
  formulario: {
    gap: 15
  },
  input: {
    fontSize: 20,
    backgroundColor: "#F4FAFE",
    width: 300,
    padding: 10,
    borderBottomColor: "#3079B5",
    borderBottomWidth: 1.5
  },
  botao: {
    backgroundColor: "#6D9DC5",
    width: 130,
    padding: 10,
    borderRadius: 50,
    marginTop: 30
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700"
  },
  subcontainer: {
    alignItems: "center",
    gap: 15,
  },
  logo: {
    width: 65,
    height: 50
  }
})