import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ilustracao from "../../assets/images/ilustracao-inicio.png";
import SafeContainer from "../../src/components/SafeContainer";

export default function Inicio({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.subcontainer}>
        <Image source={ilustracao} />

        <Text style={estilos.titulo}>Acompanho</Text>
        <Text style={estilos.texto}>
          A plataforma que acompanha seus familiares nas consultas médicas.
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Escolha")}
          style={estilos.botao}
        />
        <Pressable
          style={estilos.botao}
          onPress={() => navigation.navigate("Procurar")}
        >
          <Text style={estilos.textoBotao}>Início</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subcontainer: {
    alignItems: "center",
    gap: 10,
  },
  titulo: {
    fontSize: 38,
    fontFamily: "Montserrat",
    fontWeight: "700",
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
