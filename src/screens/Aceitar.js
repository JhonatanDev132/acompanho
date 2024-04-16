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
import LinearGradientComponent from "../../src/components/LinearGradientComponent.js"

const { width, height } = Dimensions.get("window");

export default function Bemvindo({ navigation }) {
  return (
    <SafeContainer style={estilos.container}>
      <LinearGradientComponent>
        <View style={estilos.espacamento}>
          <View>
            <Text style={estilos.titulo}>Antes de aderir:</Text>
            <Text style={estilos.texto}>
              Nossa missão é construir uma comunidade de confiança entre famílias e
              cuidadores de idosos. Para isso, estabelecemos normas que esperamos
              que todos os membros sigam.
            </Text>

            <Text style={estilos.titulo}>Normas da Comunidade:</Text>

            <Text style={estilos.texto}>
              Normas da Comunidade: Ao interagir como membro da comunidade
              Acompanho, comprometo-me a tratar todos com respeito e sem
              preconceitos. Comunicarei de forma clara e sincera.
            </Text>

            <Text
              style={estilos.termos}
              onPress={() => navigation.navigate("TermosECondicoes")}
            >
              Termos de Serviço: Concordo com os Termos e Condições
            </Text>
          </View>

            <View style={estilos.botaoCentro}>
              <Pressable
                style={[estilos.botao, { backgroundColor: "#FAFAFA" }]}
                onPress={() => navigation.navigate("Escolha")}
              >
                <Text style={estilos.textoBotao}>Rejeitar</Text>
              </Pressable>

              <Pressable
                style={[estilos.botao, { backgroundColor: "#6D9DC5" }]}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text style={estilos.textoBotao}>Aceitar</Text>
              </Pressable>
            </View>
        </View>
      </LinearGradientComponent>
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
    padding: 10,
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
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  termos: {
    fontFamily: "Montserrat",
    fontSize: 14 /* Alteração */,
    fontWeight: "700",
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  textoBold: {
    fontWeight: "700",
    fontSize: 16,
  },
  espacamento: {
    gap: 270
  }
});
