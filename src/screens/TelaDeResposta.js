import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function TelaDeResposta({ navigation }) {
  return (
    <SafeContainer>
      <Text style={estilos.titulo}>Cadastro bem sucedido</Text>
      <View style={estilos.formulario}>
        <Text style={estilos.texto}>
          Para se conectar com outros membros você deve completar seu perfil.
        </Text>
      </View>
      <View style={estilos.botaoContainer}>
        <Pressable
          style={estilos.botao}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={estilos.textoBotao}>Mais tarde</Text>
        </Pressable>
        <Pressable
          style={estilos.botao}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={estilos.textoBotao}>Completar Perfil</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    marginHorizontal: 23, // Alteração: mudei 'margin' para 'marginHorizontal'
  },
  formulario: {
    marginVertical: 16,
    width: "80%",
  },
  botaoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontFamily: "Montserrat",
    fontSize: 20,
  },
});
