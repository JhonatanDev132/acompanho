import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import fotoPerfil1 from "../../assets/images/foto-perfil-1.png";

import fotoPerfil2 from "../../assets/images/foto-perfil-2.png";

import fotoPerfil3 from "../../assets/images/foto-perfil-3.png";
import LinearGradientComponent from "../components/LinearGradientComponent";

export default function Favoritos({ navigation }) {
  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Perfil 1 */}
            <View style={styles.caixa}>
              <View style={styles.rowContainer}>
                <Image
                  /*  resizeMode="contain" é para não corta a imagem, pois não é uadrada*/
                  resizeMode="contain"
                  source={fotoPerfil1}
                  style={styles.perfil}
                />
                <View style={styles.nomeCidadeEstrela}>
                  <Text style={styles.nome}>Raquel Santos</Text>
                  <Text style={styles.cidade}>São Paulo - SP</Text>
                  <View style={styles.estrela}>
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                  </View>
                </View>

                <View style={styles.coracao}>
                  <AntDesign name="heart" size={25} color="#336691" />
                </View>

                <Pressable
                  style={styles.botaoSaibaMais}
                  onPress={() => navigation.navigate("Perfilgeral")}
                >
                  <Text style={styles.textoBotao}>Saiba Mais</Text>
                </Pressable>
              </View>
            </View>

            {/* Prefil 2 */}
            <View style={styles.caixa}>
              <View style={styles.rowContainer}>
                <Image
                  resizeMode="contain"
                  source={fotoPerfil2}
                  style={styles.perfil}
                />
                <View style={styles.nomeCidadeEstrela}>
                  <Text style={styles.nome}>Patrícia Oliveira</Text>
                  <Text style={styles.cidade}>São Paulo - SP</Text>
                  <View style={styles.estrela}>
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                  </View>
                </View>

                <View style={styles.coracao}>
                  <AntDesign name="heart" size={25} color="#336691" />
                </View>

                <Pressable
                  style={styles.botaoSaibaMais}
                  //onPress={}
                >
                  <Text style={styles.textoBotao}>Saiba Mais</Text>
                </Pressable>
              </View>
            </View>

            {/* Prefil 3 */}
            <View style={styles.caixa}>
              <View style={styles.rowContainer}>
                <Image
                  resizeMode="contain"
                  source={fotoPerfil3}
                  style={styles.perfil}
                />
                <View style={styles.nomeCidadeEstrela}>
                  <Text style={styles.nome}>Marcos Gonçalves</Text>
                  <Text style={styles.cidade}>Recife - PE</Text>
                  <View style={styles.estrela}>
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                    <Entypo name="star" size={15} color="#336691" />
                  </View>
                </View>

                <View style={styles.coracao}>
                  <AntDesign name="heart" size={25} color="#336691" />
                </View>

                <Pressable
                  style={styles.botaoSaibaMais}
                  //onPress={}
                >
                  <Text style={styles.textoBotao}>Saiba Mais</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradientComponent>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignItems: "center", // Centraliza horizontalmente
  },

  caixa: {
    width: 320,
    borderRadius: 10,
    borderWidth: 1, // Espessura da borda
    borderColor: "#6D9DC5",
    backgroundColor: "#FAFAFA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, // Elevação para Android
    marginBottom: 20,
  },

  perfil: {
    width: 80,
    height: 80,
    margin: 10,
  },

  estrela: {
    flexDirection: "row", // Exibe os itens em uma linha
    alignItems: "center",
  },

  nomeCidadeEstrela: {
    marginLeft: 5,
  },

  coracao: {
    marginLeft: 10, // Adiciona um espaçamento entre o texto/estrelas e o coração
    position: "absolute", // Define a posição como absoluta
    right: 15, // Posiciona o coração à direita com 15px de margem
    top: "30%", // Centraliza verticalmente
    transform: [{ translateY: -12.5 }], // Ajusta verticalmente para centralizar o ícone
  },

  rowContainer: {
    flexDirection: "row", // Alinha os itens em uma linha
    alignItems: "center", // Alinha os itens ao centro verticalmente
  },

  botaoSaibaMais: {
    position: "absolute", // Define a posição como absoluta
    right: 15,
    top: "60%", // Posiciona abaixo do coração
    paddingVertical: 8,
  },

  textoBotao: {
    color: "#336691", // Cor do texto (branco)
    fontSize: 14, // Tamanho do texto
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "Montserrat",
  },

  nome: {
    color: "#333", // Cor do texto
    fontSize: 16, // Tamanho do texto em pixels
    fontWeight: "700", // Peso da fonte
    fontFamily: "Montserrat",
  },

  cidade: {
    color: "#333", // Cor do texto
    fontSize: 12, // Tamanho do texto em pixels
    fontFamily: "Montserrat",
  },
});

/*
Instalação necessária : 

npm install @react-navigation/native@latest
npm install react-native-gesture-handler@latest
npm install react-native-reanimated@latest

npx expo install react-native-gesture-handler

Para icones    npm install @expo/vector-icons


 */
