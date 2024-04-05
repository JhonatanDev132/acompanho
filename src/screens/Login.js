import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "../../assets/icon.png";
import SafeContainer from "../components/SafeContainer";

export default function Login({ navigation }) {
  return (
    <SafeContainer>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={Icon} style={styles.logo} />
        <Text style={styles.texto}>Acompanho</Text>
        <View>
          <Text style={styles.login}>Login</Text>
        </View>
        <View style={styles.formulario}>
          <Text>E-mail:</Text>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            keyboardType="email-address"
          />
          <Text>Senha:</Text>
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
        </View>
        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Inicio")}>
          <Text>Cadastrar</Text>
        </Pressable>
      </ScrollView>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 100,
  },
  login: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 45,
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
    marginVertical: 16,
    width: "80%",
  },
  icon: {
    width: 40,
    height: 40,
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
    margin: 30,
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
