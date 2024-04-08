import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import React from "react";

const { width, height } = Dimensions.get("window");

export default function Bemvindo({ navigation }) {
  return (
    <SafeContainer style={estilos.container}>
      <ScrollView>
        <Text style={estilos.titulo}>Antes de aderir:</Text>
        <Text style={estilos.texto}>
          Nossa missão é construir uma comunidade de confiança entre famílias e
          cuidadores de idosos. Para isso, estabelecemos normas que esperamos
          que todos os membros sigam.
        </Text>
        <Text style={estilos.texto}>
          Normas da Comunidade: Ao interagir como membro da comunidade
          Acompanho, comprometo-me a tratar todos com respeito e sem
          preconceitos. Comunicarei de forma clara e sincera.
        </Text>
        <Text style={estilos.texto}>
          Termos de Serviço: Também concordo com os Termos e Condições
        </Text>
        <Pressable
          style={[estilos.botao, { backgroundColor: "hsla(207, 58%, 45%, 1)" }]}
        >
          <Text style={estilos.textoBotao}>Aceitar</Text>
        </Pressable>
        <Pressable
          style={[estilos.botao, { backgroundColor: "hsla(0, 0%, 45%, 1)" }]}
        >
          <Text style={estilos.textoBotao}>Rejeitar</Text>
        </Pressable>
      </ScrollView>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "hsla(0, 0%, 20%, 1)",
    padding: width * 0.05,
  },
  titulo: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: width * 0.06,
    lineHeight: width * 0.07,
    letterSpacing: "1%",
    color: "hsla(0, 0%, 1%, 1)",
    margin: width * 0.05,
  },
  texto: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: width * 0.045,
    lineHeight: width * 0.05,
    letterSpacing: "1%",
    color: "hsla(0, 0%, 1%, 1)",
    marginVertical: width * 0.025,
  },
  botao: {
    padding: width * 0.035,
    borderRadius: width * 0.1,
    width: width * 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: width * 0.005,
    },
    shadowOpacity: 0.25,
    shadowRadius: width * 0.01,
    elevation: 5,
    margin: width * 0.035,
  },
  textoBotao: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: width * 0.055,
    lineHeight: width * 0.05,
    letterSpacing: "0.1px",
    textAlign: "center",
    color: "hsla(0, 0%, 1%, 1)",
  },
});
