import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function TermosECondicoes({ navigation }) {
  return (
    <SafeContainer>
      <Text style={estilos.titulo}>Termos e Condições</Text>
      <View style={estilos.formulario}>
        <Text>
          Definições: Estes termos se aplicam à parceria entre Acompanho,
          cuidador e famílias. Ao usar os serviços do Acompanho, você concorda
          com estes termos.
        </Text>
        <Text>
          Registro e Uso: A Família faz o cadastro no Acompanho para encontrar
          um cuidador que irá fazer o acompanhamento do idoso em consultas
          médicas.
        </Text>
        <Text>
          Obrigações: A família escolhe o cuidador adequado, garantindo
          informações precisas. Os cuidadores cumprem suas obrigações legais e
          prestam os serviços conforme combinado.
        </Text>
        <Text>
          Responsabilidade: O Acompanho se esforça para prestar serviços de
          qualidade, mas não é responsável por falhas na execução das
          atividades.
        </Text>
        <Text>
          Proteção de Dados: Os dados pessoais são tratados com
          confidencialidade, exceto quando necessário por lei ou contrato.
        </Text>
      </View>
      <Pressable style={estilos.botao} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotao}>Voltar</Text>
      </Pressable>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    margin: 23,
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
    fontFamily: "Montserrat",
    fontSize: 20,
  },
});
