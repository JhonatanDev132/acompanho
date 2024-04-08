import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import React from "react";

export default function Bemvindo({ navigation }) {
  return (
    <SafeContainer>
      <Text style={estilos.subtitle}>Bem-vindo à Acompanho</Text>
      <View>
        <Text style={estilos.texto}>Faça o login ou cadastre-se</Text>
      </View>
      <View style={estilos.formulario}>
        <Text>E-mail:</Text>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
        />
      </View>
      <Pressable style={estilos.botao}>
        <Text style={estilos.textoBotao}>Continuar</Text>
      </Pressable>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subtitle: {
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
    marginVertical: 16,
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
  texto: {
    fontSize: 20,
    marginVertical: 10,
  },
});
