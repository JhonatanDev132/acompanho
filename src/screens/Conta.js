import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import SafeContainer from "../components/SafeContainer";

import { AntDesign } from "@expo/vector-icons";

import Business from "../../assets/images/Business.png";
import Collaborator from "../../assets/images/Collaborator.png";
import Document from "../../assets/images/Document.png";
import LogoMini from "../../assets/images/logoMini.png";

export default function Perfil({ navigation }) {
  return (
    <SafeContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={LogoMini} style={styles.icon} />
          <Text style={styles.name}>Maria</Text>
        </View>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Perfil")}
        >
          <View style={styles.espacamento}>
            <Image style={styles.imagem} source={Business} />
            <Text style={styles.optionText}>Perfil</Text>
          </View>
          <AntDesign name="right" size={24} color="#336691" />
        </Pressable>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("Conta")}
        >
          <View style={styles.espacamento}>
            <Image style={styles.imagem} source={Collaborator} />
            <Text style={styles.optionText}>Conta</Text>
          </View>
          <AntDesign name="right" size={24} color="#336691" />
        </Pressable>

        <Pressable
          style={styles.option}
          onPress={() => navigation.navigate("TermosECondicoes")}
        >
          <View style={styles.espacamento}>
            <Image style={styles.imagem} source={Document} />
            <Text style={styles.optionText}>Termos e Condições</Text>
          </View>
          <AntDesign name="right" size={24} color="#336691" />
        </Pressable>
      </View>

      {/* Botão de logout */}
      <Pressable
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Sair")}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </Pressable>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
  },

  header: {
    alignItems: "center",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  option: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#6D9DC5",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },

  optionText: {
    fontSize: 18,
    fontWeight: "700",
  },

  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  espacamento: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  // Estilos para a barra de navegação
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#336691",
    paddingVertical: 10,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#fff",
  },

  // Estilos para o botão de logout
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#336691",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  logoutText: {
    color: "#fff",
  },
});
