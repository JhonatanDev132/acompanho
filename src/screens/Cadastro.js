import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import Icon from "../../assets/icon.png";
import SafeContainer from "../components/SafeContainer";
import React, { useState } from "react";
import LinearGradientComponent from "../components/LinearGradientComponent";
import {auth} from "../../firebase.config"


import { useRoute } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";


export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const cadastrar = async () => {
    if (!email || !senha || !nome) {
      Alert.alert("Atenção", "Preecha todos os campos");
      return;
    }

    try {
      const contaUsuario = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      console.log("email",email);
      console.log("senha", senha);

      if (contaUsuario.user) {
        await updateProfile(auth.currentUser, { 
          displayName: nome });
        // teste user {displayName : "undefined"}
        console.log("conta", contaUsuario.user);
      }

      Alert.alert("Cadastro", " Seu cadastro foi concluido com sucesso!", [
        {
          style: "cancel",
          text: "Ficar aqui mesmo",
          onPress: () => {
            return;
          },
        },
        {
          style: "default",
          text: "Ir para a área logada ",
          onPress: () => navigation.replace("AreaLogada"),
        },
      ]);
    } catch (error) {
      console.error(error.code);
      let mensagem;
      switch (error.code) {
        case "auth/email-already-in-use":
          mensagem = "Email já existente!";
          break;
        case "auth/weak-password":
          mensagem = "Senha fraca!";
          break;
        case "auth/invalid-email":
          mensagem = "Endereço de e-mail inválido!";
          break;
        default:
          mensagem = "Houve um erro, tente mais tarde!";
          break;
      }
      Alert.alert("Ops!", mensagem);
    }
  };


  

  return (
    <SafeContainer>
      <LinearGradientComponent>
        <Image source={Icon} style={estilos.logo} />
          <Text style={estilos.subtitle}>Cadastre-se!</Text>
        <View style={estilos.formulario}>
          <Text>Nome Completo</Text>
          <TextInput
            placeholder="Nome Completo"
            style={estilos.input}
            keyboardType="default"
            onChangeText={(valor) => setNome(valor)}
          />
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            style={estilos.input}
            keyboardType="default"
            onChangeText={(valor) => setEmail(valor)}
          />
            <Text>Senha</Text>
          <TextInput placeholder="Senha" style={estilos.input} secureTextEntry onChangeText={(valor) => setSenha(valor)} />
        </View>
        <Pressable style={estilos.botao} onPress={cadastrar}>
          <Text style={estilos.textoBotao}>Cadastrar</Text>
        </Pressable>
      </LinearGradientComponent>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: 90,
    height: 70,
  },
  subtitle: {
    fontFamily: "Montserrat",
    fontSize: 31,
    fontWeight: "500",
    marginBottom: 35,
    margin: 23,
  },
  input: {
    backgroundColor: "white",
    borderBottomColor: "#3079B5",
    borderBottomWidth: 1.5,
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  formulario: {
    width: "80%",
  },
  botao: {
    backgroundColor: "#6D9DC5",
    padding: 15,
    borderRadius: 40,
    width: 170,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 15,
  },
  textoBotao: {
    fontSize: 24,
    textAlign: "center",
  },
});
