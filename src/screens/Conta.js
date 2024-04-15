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

        {/* Botão de logout */}

        <View style={styles.centralizando}>
          <Pressable
            style={styles.botaoLogout}
            onPress={() => navigation.navigate("Bemvindo")}
          >
            <AntDesign name="logout" size={24} color="black" />
            <Text style={styles.logoutText}>Sair</Text>
          </Pressable>
        </View>
      </View>
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

  // Estilos para o botão de logout
  botaoLogout: {
    paddingVertical: 12, // Aumentando o padding vertical para aumentar o tamanho do botão
    paddingHorizontal: 40, // Adicionando padding horizontal para dar espaço ao ícone e ao texto
    backgroundColor: "#6D9DC5", // Adicionando cor de fundo para torná-lo visualmente um botão
    borderRadius: 10, // Adicionando bordas arredondadas para um visual mais amigável
    flexDirection: "row",
    alignItems: "center", // Alinhando os itens verticalmente
    justifyContent: "center", // Alinhando os itens horizontalmente
  },

  centralizando: {
    alignItems: "center",
    marginTop: 50,
  },

  logoutText: {
    fontSize: 18,
    fontWeight: "700",
    color: "black", // Alterando a cor do texto para torná-lo visível no botão
    marginLeft: 8,
  },
});
