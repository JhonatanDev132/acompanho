import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  Vibration,
} from "react-native";
import { auth } from "../../firebase.config"; // Supondo que auth seja exportado de ../../firebase.config
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth"; // Correção aqui, importando diretamente do módulo 'auth'
import Icon from "../../assets/icon.png";
import SafeContainer from "../components/SafeContainer";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha o email e senha");
      Vibration.vibrate(300);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      console.log("Login feito com sucesso!");
      navigation.replace("AreaLogada");
    } catch (error) {
      console.error(error.code);
      let mensagem;
      switch (error.code) {
        case "auth/invalid-credential":
          mensagem = "Dados inválidos!";
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

  const recuperarSenha = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Recuperar senha", "Verifique sua caixa de e-mails.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeContainer>
      <View style={estilos.logo}>
        <Image source={Icon} style={estilos.image} />
        <Text style={estilos.texto}>Acompanho</Text>
      </View>
      <View style={estilos.formulario}>
        <Text>E-mail</Text>
        <TextInput
          onChangeText={(valor) => setEmail(valor)}
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
        />
        <Text>Senha</Text>
        <TextInput
          onChangeText={(valor) => setSenha(valor)}
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
          maxLength={11}
        />
      </View>
      <Pressable onPress={login} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Entrar</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Inicio")}>
        <Text>Cadastrar</Text>
      </Pressable>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  logo: {
    alignItems: "center",
  },
  image: {
    width: 166,
    height: 130,
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
    marginVertical: 22,
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
    marginTop: 25,
  },
  textoBotao: {
    fontSize: 24,
    textAlign: "center",
  },
  texto: {
    fontFamily: "Montserrat",
    fontSize: 30,
    marginBottom: 35,
  },
});
