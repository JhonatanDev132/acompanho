import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function EditarPerfil({ navigation }) {
  const [aboutText, setAboutText] = useState("");
  const [address, setAddress] = useState("");
  const [idade, setIdade] = useState(""); // Estado para a idade do idoso
  const [nome, setNome] = useState(""); // Adicionando estado para o nome

  const handleSave = () => {
    console.log("Informações do perfil salvas:", aboutText, address, idade);
    // Aqui você pode adicionar lógica para salvar as informações em algum lugar (ex: banco de dados)
  };

  // Função para mostrar o nome da pessoa cadastrada
  const renderNome = () => {
    return <Text style={styles.nomeText}> {nome}</Text>;
  };

  // Função para contar os caracteres
  const countCharacters = (text) => {
    return text.length;
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
          <Text
            style={[
              styles.sectionTitle,
              { color: "#E2725B", fontWeight: "bold" },
            ]}
          >
            Sobre Nós
          </Text>
          <Text style={styles.sobreNosText}>
            Conte um pouco sobre a família, para que os cuidadores possam
            conhece-los.
          </Text>
        </View>

        {/* Seção para o preenchimento de sobre nós */}
        <View style={[styles.section, styles.sobreNosContainer]}>
          <View style={styles.sobreNosInputContainer}>
            <TextInput
              style={styles.sobreNosTextInput}
              multiline
              placeholder="Digite algo..."
              value={aboutText}
              onChangeText={(text) => setAboutText(text)}
            />
            <Text>Caracteres: {countCharacters(aboutText)}/200</Text>
          </View>
          <View style={styles.sobreNosIconContainer}>
            <EvilIcons name="pencil" size={24} color="black" />
          </View>
        </View>

        {/* Seção para o endereço */}
        <View style={[styles.section, styles.sobreNosContainer]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: "#E2725B", fontWeight: "bold" },
            ]}
          >
            Endereço
          </Text>
          <TextInput
            style={styles.sobreNosTextInput}
            placeholder="Digite o endereço..."
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        {/* Seção para a idade do idoso */}
        <View style={[styles.section, styles.sobreNosContainer]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: "#E2725B", fontWeight: "bold" },
            ]}
          >
            Idade do Idoso
          </Text>
          <TextInput
            style={styles.sobreNosTextInput}
            placeholder="Digite a idade do idoso..."
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />
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
    alignItems: "flex-start",
    marginVertical: 10,
    paddingHorizontal: 20,
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
    marginTop: -20,
  },
  nomeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  sobreNosContainer: {
    width: "90%",
  },
  sobreNosInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: "100%",
  },
  sobreNosTextInput: {
    height: 40,
    width: "100%",
  },
  sobreNosText: {
    textAlign: "justify",
  },
});
