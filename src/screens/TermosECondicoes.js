import React from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function TermsAndConditions({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.container}>
        <ScrollView>
          <Text style={estilos.titulo}>Termos e Condições</Text>
          <View style={estilos.formulario}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Definições:</Text> Estes
              termos se aplicam à parceria entre Acompanho, cuidador e famílias.
              Ao usar os serviços do Acompanho, você concorda com estes termos.
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Registro e Uso:</Text> A
              Família faz o cadastro no Acompanho para encontrar um cuidador que
              irá fazer o acompanhamento do idoso em consultas médicas.
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Obrigações:</Text> A família
              escolhe o cuidador adequado, garantindo informações precisas. Os
              cuidadores cumprem suas obrigações legais e prestam os serviços
              conforme combinado.
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Responsabilidade:</Text> O
              Acompanho se esforça para prestar serviços de qualidade, mas não é
              responsável por falhas na execução das atividades.
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Proteção de Dados:</Text> Os
              dados pessoais são tratados com confidencialidade, exceto quando
              necessário por lei ou contrato.
            </Text>
          </View>
          <Pressable style={estilos.botao} onPress={() => navigation.goBack()}>
            <Text style={estilos.textoBotao}>Voltar</Text>
          </Pressable>
        </ScrollView>
      </View>
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
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
});
