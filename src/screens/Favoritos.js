import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import logoAPI from "../../assets/images/foto-perfil.png";

export default function Favoritos() {
  return (
    <SafeContainer>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.caixa}>
            <View style={styles.rowContainer}>
              <Image
                /*  resizeMode="contain" é para não corta a imagem, pois não é uadrada*/
                resizeMode="contain"
                source={logoAPI}
                style={styles.perfil}
              />
              <View style={styles.nomeCidadeEstrela}>
                <Text style={styles.nome}>Maria Tereza</Text>
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
        </ScrollView>
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
    alignItems: "center", // Centraliza horizontalmente
  },

  caixa: {
    width: 320, // Largura da caixa
    height: 100, // Altura da caixa
    flexShrink: 0, // Impede a caixa de encolher
    borderRadius: 10, // Raio de borda
    borderWidth: 1, // Espessura da borda
    borderColor: "#6D9DC5", // Cor da borda
    backgroundColor: "#FAFAFA", // Cor de fundo
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 4, // Elevação para Android
  },

  perfil: {
    width: 80, // Largura do perfil
    height: 80, // Altura do perfil
    margin: 10,
  },

  estrela: {
    flexDirection: "row", // Exibe os itens em uma linha
    alignItems: "center", // Alinha os itens ao centro verticalmente
  },

  nomeCidadeEstrela: {
    marginLeft: 10, // Adiciona um espaçamento entre a imagem e o texto/estrelas
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
    right: 15, // Posiciona o botão à direita com 15px de margem
    top: "60%", // Posiciona abaixo do coração
    paddingVertical: 8, // Padding vertical
    //paddingHorizontal: 12, // Padding horizontal
    //borderRadius: 5, // Raio da borda
    //backgroundColor: "#336691", // Cor de fundo do botão
  },

  textoBotao: {
    color: "#336691", // Cor do texto (branco)
    fontSize: 13, // Tamanho do texto
    textAlign: "center",
    fontWeight: "600",
  },

  nome: {
    color: "#333", // Cor do texto
    fontSize: 16, // Tamanho do texto em pixels
    fontWeight: "600", // Peso da fonte
  },

  cidade: {
    color: "#333", // Cor do texto
    fontSize: 12, // Tamanho do texto em pixels
  },
});

/*
Instalar: 

npm install @react-navigation/native@latest
npm install react-native-gesture-handler@latest
npm install react-native-reanimated@latest

npx expo install react-native-gesture-handler

Para icones    npm install @expo/vector-icons


 */
