import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ilustracao from "../../assets/images/ilustracao-inicio.png";
import SafeContainer from "../../src/components/SafeContainer";
import LinearGradientComponent from "../components/LinearGradientComponent";

export default function Inicio({ navigation }) {
  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View style={estilos.subcontainer}>
          <Image source={ilustracao} style={estilos.image} />

          <Text style={estilos.titulo}>Acompanho</Text>
          <Text style={estilos.texto}>
            A plataforma que acompanha seus familiares nas consultas médicas.
          </Text>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Escolha")}
          >
            <Text style={estilos.textoBotao}>Início</Text>
          </Pressable>
        </View>
      </LinearGradientComponent>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  image: {
    width: 240,
    height: 300,
  },
  subcontainer: {
    alignItems: "center",
    gap: 10,
  },
  titulo: {
    fontSize: 38,
    fontFamily: "Montserrat",
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat",
    marginBottom: 16,
    paddingHorizontal: 30,
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
  },
  textoBotao: {
    fontSize: 24,
    textAlign: "center",
  },
});
