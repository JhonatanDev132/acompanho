import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function TermosECondicoes({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.container}>
        <ScrollView>
          <Text style={estilos.titulo}>Termos e Condições</Text>
          <View style={estilos.formulario}>
            <Text style={estilos.texto}>
              <Text style={estilos.textoBold}>Definições:</Text> Estes termos se
              aplicam à parceria entre Acompanho, cuidador e famílias. Ao usar
              os serviços do Acompanho, você concorda com estes termos.
            </Text>
            <Text style={estilos.texto}>
              <Text style={estilos.textoBold}>Registro e Uso:</Text> A Família
              faz o cadastro no Acompanho para encontrar um cuidador que irá
              fazer o acompanhamento do idoso em consultas médicas.
            </Text>
            <Text style={estilos.texto}>
              <Text style={estilos.textoBold}>Obrigações:</Text> A família
              escolhe o cuidador adequado, garantindo informações precisas. Os
              cuidadores cumprem suas obrigações legais e prestam os serviços
              conforme combinado.
            </Text>
            <Text style={estilos.texto}>
              <Text style={estilos.textoBold}>Responsabilidade:</Text> O
              Acompanho se esforça para prestar serviços de qualidade, mas não é
              responsável por falhas na execução das atividades.
            </Text>
            <Text style={estilos.texto}>
              <Text style={estilos.textoBold}>Proteção de Dados:</Text> Os dados
              pessoais são tratados com confidencialidade, exceto quando
              necessário por lei ou contrato.
            </Text>
          </View>
          <View style={estilos.botaoCentro}>
            <Pressable
              style={estilos.botao}
              onPress={() => navigation.navigate("Aceitar")}
            >
              <Text style={estilos.textoBotao}>Voltar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 28 /* Alteração */,
    fontFamily: "Montserrat" /* Adição */,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 30 /* Alteração */,
    marginLeft: 25 /* Adição */,
    marginTop: 20,
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
  botaoCentro: {
    alignItems: "center",
    marginBottom: 16,
  },
  textoBotao: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
  },
  texto: {
    fontFamily: "Montserrat",
    fontSize: 16 /* Alteração */,
    marginBottom: 16,
    paddingHorizontal: 30,
  },
  textoBold: {
    fontWeight: "700",
    fontSize: 16,
  },
  container: {
    flex: 1,
  },
});
