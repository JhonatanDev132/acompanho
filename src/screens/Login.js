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
import LinearGradientComponent from "../components/LinearGradientComponent";

export default function Login({ navigation }) {
  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View style={estilos.logo}>
          <Image source={Icon} style={estilos.image} />
          <Text style={estilos.texto}>Acompanho</Text>
        </View>
        <View style={estilos.formulario}>
          <Text>E-mail</Text>
          <TextInput
            placeholder="E-mail"
            style={estilos.input}
            keyboardType="email-address"
          />
          <Text>Senha</Text>
          <TextInput placeholder="Senha" style={estilos.input} secureTextEntry />
        </View>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Inicio")}>
          <Text>Cadastrar</Text>
        </Pressable>
      </LinearGradientComponent>
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
