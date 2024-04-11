import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

// Importe suas imagens aqui
// Por exemplo: import profileImage from '../assets/profile.png';

export default function Perfil({ navigation }) {
  return (
    <SafeContainer>
      <View style={styles.container}>
        {/* Adicione sua imagem aqui */}
        {/* <Image source={profileImage} style={styles.image} /> */}
        <Text style={styles.name}>Maria</Text>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.optionText}>Perfil</Text>
        </Pressable>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Conta")}
        >
          <Text style={styles.optionText}>Conta</Text>
        </Pressable>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("TermosECondicoes")}
        >
          <Text style={styles.optionText}>Termos e Condições</Text>
        </Pressable>

        <Pressable style={[styles.option, styles.logout]} onPress={() => {}}>
          <Text style={[styles.optionText, styles.logoutText]}>Sair</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },

  optionText: {
    fontSize: 18,
  },

  logout: {
    marginTop: 20,
  },

  logoutText: {
    color: "red",
  },

  // Adicione um estilo para a imagem aqui
  // image: {
  //   width: 100,
  //   height: 100,
  // },
});
