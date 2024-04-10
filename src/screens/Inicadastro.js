import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import Icon from "../../assets/icon.png";
import SafeContainer from "../components/SafeContainer";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"; // Importe o módulo de autenticação do Firebase

export default function Inicadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const route = useRoute();
  const { escolha } = route.params;

  const verificarEmail = async () => {
    if (!email) {
      Alert.alert("Atenção!", "Preencha o e-mail!");
      return;
    }

    try {
      const methods = await auth().fetchSignInMethodsForEmail(email);
      if (methods && methods.length > 0) {
        // O email já está registrado
        Alert.alert("Atenção!", "Este e-mail já está registrado.");
      } else {
        // O email não está registrado
        navigation.navigate("Cadastro", { escolha });
      }
    } catch (error) {
      console.error("Erro ao verificar o e-mail:", error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao verificar o e-mail. Tente novamente mais tarde."
      );
    }
  };

  return (
    <SafeContainer>
      <Image source={Icon} style={estilos.logo} />
      <Text style={estilos.subtitle}>Dê início ao seu cadastro!</Text>
      <Text style={estilos.texto}>Nos informe seu e-mail para começarmos</Text>
      <View style={estilos.formulario}>
        <Text>E-mail</Text>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
          onChangeText={(valor) => setEmail(valor)}
        />
      </View>
      <Pressable style={estilos.botao} onPress={verificarEmail}>
        <Text style={estilos.textoBotao}>Continuar</Text>
      </Pressable>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: 90,
    height: 70,
  },
  subtitle: {
    fontFamily: "Montserrat",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 35,
    margin: 23,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    borderBottomColor: "#3079B5",
    borderBottomWidth: 1.5,
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  formulario: {
    marginVertical: 15,
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
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 11,
    textAlign: "center",
  },
});
