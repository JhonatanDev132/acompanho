import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { AntDesign } from "@expo/vector-icons";
import Perfil from "./Conta";

export default function EditarPerfil({ navigation }) {
  const [aboutText, setAboutText] = useState("");
  const [address, setAddress] = useState("");
  const [nome, setNome] = useState(""); // Adicionando estado para o nome

  const handleSave = () => {
    console.log("Informações do perfil salvas:", aboutText, address);
    // Aqui você pode adicionar lógica para salvar as informações em algum lugar (ex: banco de dados)
  };

  // Função para mostrar o nome da pessoa cadastrada
  const renderNome = () => {
    return <Text style={styles.nomeText}> {nome}</Text>;
  };

  return (
    <SafeContainer>
      <View style={styles.container}>
        {/* Seção para a foto do perfil */}
        <View style={styles.section}>
          {/* Adicionando o ícone de câmera */}
          <View style={styles.profileImageContainer}>
            <AntDesign name="camerao" size={70} color="black" />
          </View>
          <Text style={styles.sectionTitle}>Foto do Perfil</Text>
        </View>

        {/* Seção para "Sobre Nós" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Nós</Text>
          <Text>
            Conte um pouco sobre a família, para que os cuidadores possam
            conhece-los.
          </Text>
        </View>

        <View style={styles.experienciaCaixa}>
          <Text style={styles.experiencia}>Experiência</Text>
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    alignItems: "center",
  },
  profileImageContainer: {
    marginBottom: 20,
    marginTop: -190,
    borderWidth: 10, // Adicionando borda
    borderColor: "#336691", // Cor da borda
    borderRadius: 10, // Raio da borda
    padding: 5, // Espaçamento interno
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  firstInput: {
    borderWidth: 2, // Aumentando a largura da borda para o primeiro TextInput
  },
  nomeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  experienciaCaixa: {
    flexDirection: "row", // Alinha os itens em uma linha
    alignItems: "center", // Alinha os itens ao centro verticalmente
    justifyContent: "space-between", // Espaço entre os itens
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3079B5",
    padding: 10,
    marginTop: 20,
  },
});
