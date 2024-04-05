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
import ilustracaoEscolha from "../../assets/images/ilustracao-escolha.png";
import React from "react";

export default function Escolha({ navigation }) {
  return (
    <SafeContainer>
      <Image source={Icon} style={estilos.logo} />
      <View>
        <Text style={estilos.texto}>Concluir a inscrição</Text>
      </View>
      <Pressable
        style={estilos.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={estilos.textoBotao}>Sou um cuidador</Text>
      </Pressable>
      <Text style={{ fontWeight: "bold" }}>Ou</Text>
      <Pressable
        style={estilos.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={estilos.textoBotao}>Estou à procura de um cuidador</Text>
      </Pressable>
      <Image source={ilustracaoEscolha} style={estilos.ilustracao} />
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: 130,
    height: 100,
  },
  texto: {
    marginVertical: 30,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Montserrat",
  },
  ilustracao: {
    width: 125,
    height: 160,
    marginTop: 18,
  },
  botao: {
    backgroundColor: "#6D9DC5",
    padding: 15,
    borderRadius: 40,
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 13,
  },
  textoBotao: {
    fontSize: 17,
    textAlign: "center",
  },
});
