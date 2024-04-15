import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { AntDesign } from "@expo/vector-icons"; // Importe o ícone AntDesign

export default function EditarPerfil({ navigation }) {
  const [aboutText, setAboutText] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    console.log("Informações do perfil salvas:", aboutText, address);
    // Aqui você pode adicionar lógica para salvar as informações em algum lugar (ex: banco de dados)
  };

  return (
    <SafeContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.perfil}>perfil</Text>
          <Pressable onPress={handleSave}>
            <Text style={styles.saveText}>Salvar</Text>
          </Pressable>
        </View>

        {/* Seção para a foto do perfil */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Foto do Perfil</Text>
          {/* Adicionando o ícone de câmera */}
          <View style={styles.profileImage}>
            <AntDesign name="camerao" size={24} color="black" />
          </View>
        </View>

        <View style={styles.divider}></View>

        {/* Seção para "Sobre Nós" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Nós</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite algo sobre você"
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => setAboutText(text)}
            value={aboutText}
          />
        </View>

        <View style={styles.divider}></View>

        {/* Seção para o endereço */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Endereço</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu endereço"
            onChangeText={(text) => setAddress(text)}
            value={address}
          />
        </View>

        <View style={styles.divider}></View>

        {/* Opções para locomoção do idoso */}
        <Text style={styles.boldText}>Para locomoção o idoso utiliza:</Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <Text>Cadeira de rodas</Text>
            <Pressable style={styles.checkbox}></Pressable>
          </View>
          <View style={styles.checkboxItem}>
            <Text>Cadeira de rodas motorizada</Text>
            <Pressable style={styles.checkbox}></Pressable>
          </View>
          <View style={styles.checkboxItem}>
            <Text>Bengala</Text>
            <Pressable style={styles.checkbox}></Pressable>
          </View>
          <View style={styles.checkboxItem}>
            <Text>Andador</Text>
            <Pressable style={styles.checkbox}></Pressable>
          </View>
          <View style={styles.checkboxItem}>
            <Text>Muleta</Text>
            <Pressable style={styles.checkbox}></Pressable>
          </View>
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4fafe", // Cor de fundo para simular o gradiente
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  perfil: {
    fontSize: 24,
    fontWeight: "bold",
  },
  saveText: {
    color: "#4CAF50",
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    borderRadius: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 20,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "column",
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 100,
  },
  profileImage: {
    // Estilos para a imagem do perfil
    // Aqui você pode adicionar estilos para a visualização da imagem do perfil
  },
});
