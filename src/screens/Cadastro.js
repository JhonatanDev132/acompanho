import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "../../assets/icon.png";
import SafeContainer from "../components/SafeContainer";
import React, { useState } from "react";
import LinearGradientComponent from "../components/LinearGradientComponent";

import { useRoute } from "@react-navigation/native";

export default function Cadastro({ navigation }) {
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const route = useRoute();
  const { escolha, email } = route.params;

  return (
    <SafeContainer>
      <LinearGradientComponent>
        <Image source={Icon} style={estilos.logo} />
          <Text style={estilos.subtitle}>Cadastre-se!</Text>
        <View style={estilos.formulario}>
          <Text>Nome Completo</Text>
          <TextInput
            placeholder="Nome Completo"
            style={estilos.input}
            keyboardType="default"
          />
          <Text>Telefone</Text>
          <TextInput
            placeholder="(00) 00000-0000"
            maxLength={15}
            style={estilos.input}
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={(text) => setTelefone(formatarTelefone(text))}
            autoCompleteType="off"
          />
            <Text>Senha</Text>
          <TextInput placeholder="Senha" style={estilos.input} secureTextEntry />
        </View>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>Continuar</Text>
        </Pressable>
      </LinearGradientComponent>
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
    fontSize: 31,
    fontWeight: "500",
    marginBottom: 35,
    margin: 23,
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
});
