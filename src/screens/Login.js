import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import formulario1 from "../../assets/images/formulario1.png";
import formulario2 from "../../assets/images/formulario2.png";
import Icon from "../../assets/icon.png";
import SafeContainer from "../components/SafeContainer";
import React from "react";

export default function Login() {
  return (
    <SafeContainer>
      <Image source={Icon} style={estilos.logo} />
      <View>
        <Text style={estilos.login}>Login</Text>
      </View>
      <View style={estilos.container}>
        <TextInput
          placeholder="Nome"
          style={estilos.input}
          keyboardType="default"
        />
        <TextInput placeholder="Senha" style={estilos.input} secureTextEntry />
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </Pressable>
        <Pressable>
          <Text>Cadastrar</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 128,
    height: 100,
  },
  login: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 50,
  },
  input: {
    backgroundColor: "white",
    borderBottomColor: "#3079B5",
    borderBottomWidth: 1.5,
    marginVertical: 8,
    padding: 8,
    paddingHorizontal: 125,
    borderRadius: 4,
  },
  icon: {
    width: 40,
    height: 40,
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
    margin: 30,
  },
  textoBotao: {
    fontSize: 24,
    textAlign: "center",
  },
});
