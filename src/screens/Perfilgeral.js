//atalho: rnfs
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Perfilgeral() {
  return (
    <SafeContainer>
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
                <Text style={styles.cidade}>Cuidador em São Paulo - SP</Text>
                <View style={styles.estrela}>
                  <Entypo name="star" size={15} color="#336691" />
                  <Entypo name="star" size={15} color="#336691" />
                  <Entypo name="star" size={15} color="#336691" />
                  <Entypo name="star" size={15} color="#336691" />
                  <Entypo name="star" size={15} color="#336691" />
                </View>
              </View>
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
  },

  caixa: {
    width: "100%",
    backgroundColor: "#33669",
    height: 150,
    justifyContent: "center", // Centraliza verticalmente os elementos filhos
    alignItems: "center",
  },

  perfil: {
    width: 110,
    height: 110,
    margin: 10,
  },

  estrela: {
    flexDirection: "row", // Exibe os itens em uma linha
    alignItems: "center",
  },

  nomeCidadeEstrela: {
    marginLeft: 5,
  },

  rowContainer: {
    flexDirection: "row", // Alinha os itens em uma linha
    alignItems: "center", // Alinha os itens ao centro verticalmente
  },

  nome: {
    color: "#FAFAFA", // Cor do texto
    fontSize: 18, // Tamanho do texto em pixels
    fontWeight: "600", // Peso da fonte
  },

  cidade: {
    color: "#FAFAFA",
    fontSize: 14, // Tamanho do texto em pixels
  },
});
