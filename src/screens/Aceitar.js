import { StyleSheet, Text, View, Pressable } from "react-native";

import SafeContainer from "../components/SafeContainer";
import React from "react";

export default function Bemvindo({ navigation }) {
  return (
    <SafeContainer style={estilos.container}>
      <Text style={estilos.titulo}>Antes de aderir:</Text>
      <Text style={estilos.texto}>
        Nossa missão é construir uma comunidade de confiança entre famílias e
        cuidadores de idosos. Para isso, estabelecemos normas que esperamos que
        todos os membros sigam.
      </Text>
      <Text style={estilos.texto}>
        Normas da Comunidade: Ao interagir como membro da comunidade Acompanho,
        comprometo-me a tratar todos com respeito e sem preconceitos.
        Comunicarei de forma clara e sincera.
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
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "hsla(0, 0%, 20%, 1)",
  },
  titulo: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 29.26,
    letterSpacing: "1%",
    color: "hsla(0, 0%, 1%, 1)",
    margin: 23,
  },
  texto: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21.94,
    letterSpacing: "1%",
    color: "hsla(0, 0%, 1%, 1)",
    marginVertical: 10,
  },
  botao: {
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
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: 22,
    lineHeight: 20,
    letterSpacing: "0.1px",
    textAlign: "center",
    color: "hsla(0, 0%, 1%, 1)",
  },
});
