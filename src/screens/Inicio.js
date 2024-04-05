import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ilustracao from "../../assets/images/ilustracao-inicio.png";
import SafeContainer from "../../src/components/SafeContainer";

<<<<<<< HEAD
export default function Inicio({ navigation }) {
=======

export default function Inicio({navigation}) {
>>>>>>> 6053979726fc6de91ae4c0dfb07de28462c50fc9
  return (
    <SafeContainer>
      <View style={estilos.subcontainer}>
        <Image source={ilustracao} />

        <Text style={estilos.titulo}>Acompanho</Text>
        <Text style={estilos.texto}>
          A plataforma que acompanha seus familiares nas consultas médicas.
        </Text>

<<<<<<< HEAD
        <Pressable
          onPress={() => navigation.navigate("Escolha")}
          style={estilos.botao}
        >
          <Text style={estilos.textoBotao}>Início</Text>
=======
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao} onPress={() => navigation.navigate("Procurar")}>Início</Text>
>>>>>>> 6053979726fc6de91ae4c0dfb07de28462c50fc9
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subcontainer: {
    alignItems: "center",
    gap: 10
  },
  titulo: {
    fontSize: 38,
    fontFamily: "Montserrat",
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
  },
  texto: {
<<<<<<< HEAD
    fontSize: 16,
=======
    fontSize: 18,
>>>>>>> 6053979726fc6de91ae4c0dfb07de28462c50fc9
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
