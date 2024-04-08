import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "../../assets/icon.png";
import SafeContainer from "../components/SafeContainer";
import React from "react";

export default function Cadastro({ navigation }) {
  return (
    <SafeContainer>
      <Image source={Icon} style={estilos.logo} />
      <Text style={estilos.subtitle}>Cadastre-se!</Text>
      <View style={estilos.formulario}>
        <Text>Nome</Text>
        <TextInput
          placeholder="Nome"
          style={estilos.input}
          keyboardType="default"
        />
        <Text>Sobrenome</Text>
        <TextInput
          placeholder="Sobrenome"
          style={estilos.input}
          keyboardType="default"
        />
        <Text>Senha</Text>
        <TextInput placeholder="Senha" style={estilos.input} secureTextEntry />
      </View>
      <Pressable style={estilos.botao}>
        <Text style={estilos.textoBotao}>Cadastro</Text>
      </Pressable>
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
