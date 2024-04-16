//atalho: rnfs
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { ScrollView } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements"; // Importe o CheckBox da biblioteca

import fotoPerfil1 from "../../assets/images/foto-perfil-1.png";
import LinearGradientComponent from "../components/LinearGradientComponent";

export default function Perfilgeral({ navigate }) {
  const [manha, setManha] = useState(true); // Inicializado como true
  const [tarde, setTarde] = useState(true); // Inicializado como true
  const [noite, setNoite] = useState(false);

  return (
    <SafeContainer>
      <View style={styles.container}>
        <LinearGradientComponent>
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
                </View>
              </View>
            </View>

            <View style={styles.containerDois}>
              <View style={styles.estrelaAvaliacao}>
                <Entypo name="star" size={15} color="#336691" />
                <Entypo name="star" size={15} color="#336691" />
                <Entypo name="star" size={15} color="#336691" />
                <Entypo name="star" size={15} color="#336691" />
                <Entypo name="star" size={15} color="#336691" />

                <Text style={styles.numeroAvaliacao}>0</Text>
                <Text style={styles.textoAvaliacao}>Avaliação</Text>
              </View>

              <Text style={styles.sobrenos}>
                Tenho 2 anos de experiência com idosos. Sou tranquila, empática
                e muito atenta às necessidades individuais. Ofereço cuidados
                personalizados e apoio durante consultas médicas.
              </Text>

              <Text style={styles.idade}>Idade: 30 anos</Text>

              <Text style={styles.disponibilidade}>Disponibilidade:</Text>

              {/* Checkboxes */}
              <View style={styles.checkboxContainer}>
                <CheckBox
                  title="Manhã"
                  checked={manha}
                  onPress={() => setManha(!manha)}
                  checkedColor="#336691" // Cor de fundo quando selecionado
                />
                <CheckBox
                  title="Tarde"
                  checked={tarde}
                  onPress={() => setTarde(!tarde)}
                  checkedColor="#336691" // Cor de fundo quando selecionado
                />
                <CheckBox
                  title="Noite"
                  checked={noite}
                  onPress={() => setNoite(!noite)}
                  checkedColor="#336691" // Cor de fundo quando selecionado
                />
              </View>

              <Text style={styles.certificados}>Certificados concedidos:</Text>
              <Text style={styles.certificadosTexto}>
                Verificado por Acompanho
              </Text>

              <Text style={styles.certificadosNecessarios}>
                Antecedentes Criminais
              </Text>
              <Text style={styles.certificadosNecessarios}>
                Cuidador de idosos
              </Text>
              <Text style={styles.certificadosNecessarios}>
                Primeiros socorros
              </Text>

              <View style={styles.experienciaCaixa}>
                <Text style={styles.experiencia}>Experiência</Text>
                <Text style={styles.experienciaTempo}> 2 anos</Text>
              </View>

              <View style={styles.favoritosCaixa}>
                <AntDesign name="hearto" size={20} color="#333" />
                <Text style={styles.experiencia}>Favoritos</Text>
              </View>

              <View style={styles.favoritosCaixa}>
                <Text style={styles.experiencia}>0</Text>
                <Text style={styles.experiencia}>Avaliação</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.caixa2}>
            <View style={styles.valorHora}>
              <Text style={styles.experiencia}>R$ 10,00</Text>
              <Text style={styles.experienciaTempo}> Valor por hora</Text>
            </View>
            <View style={styles.botaoEntreContato}>
              <Pressable
                style={styles.botao}
                // onPress={() => navigation.navigate("Escolha")}
              >
                <Text style={styles.textoBotao}>Entre em contato</Text>
              </Pressable>
            </View>
          </View>
        </LinearGradientComponent>
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
    backgroundColor: "#336691",
    height: 150,
    justifyContent: "center", // Centraliza verticalmente os elementos filhos
    alignItems: "center",
  },

  perfil: {
    width: 110,
    height: 110,
    margin: 10,
  },

  nomeCidadeEstrela: {
    marginLeft: 5,
  },

  rowContainer: {
    flexDirection: "row", // Alinha os itens em uma linha
    alignItems: "center", // Alinha os itens ao centro verticalmente
  },

  nome: {
    color: "#FAFAFA",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Montserrat",
  },

  cidade: {
    color: "#FAFAFA",
    fontSize: 14,
    fontFamily: "Montserrat",
  },

  containerDois: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  estrelaAvaliacao: {
    flexDirection: "row", // Exibe os itens em uma linha
    alignItems: "center",
  },

  numeroAvaliacao: {
    paddingLeft: 7,
    fontWeight: "700",
    color: "#333",
    fontSize: 14,
    fontFamily: "Montserrat",
  },

  textoAvaliacao: {
    paddingLeft: 3,
    fontWeight: "700",
    color: "#333",
    fontSize: 14,
    fontFamily: "Montserrat",
  },

  sobrenos: {
    paddingTop: 20,
    color: "#333",
    fontSize: 18,
    fontFamily: "Montserrat",
  },

  idade: {
    paddingTop: 20,
    fontWeight: "700",
    color: "#333",
    fontSize: 16,
    fontFamily: "Montserrat",
  },

  disponibilidade: {
    paddingTop: 20,
    fontWeight: "700",
    color: "#333",
    fontSize: 16,
    fontFamily: "Montserrat",
  },

  checkboxContainer: {
    paddingTop: 10,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxText: {
    fontFamily: "Montserrat",
    color: "#333",
    fontSize: 16,
  },

  certificados: {
    paddingTop: 20,
    fontWeight: "700",
    color: "#333",
    fontSize: 16,
    fontFamily: "Montserrat",
  },

  certificadosTexto: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#737373",
  },

  certificadosNecessarios: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#6D9DC5",
    backgroundColor: "#FAFAFA",
    padding: 5,
    marginTop: 10,
    elevation: 2, // Elevação para Android
    shadowColor: "#000", // Cor da sombra para iOS
    fontFamily: "Montserrat",
    color: "#333",
    fontSize: 14,
    width: 200,
    color: "#030303",
  },

  experiencia: {
    fontWeight: "700",
    color: "#333",
    fontSize: 16,
    fontFamily: "Montserrat",
  },

  experienciaTempo: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "#737373",
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

  favoritosCaixa: {
    flexDirection: "row", // Alinha os itens em uma linha
    alignItems: "center", // Alinha os itens ao centro verticalmente
    gap: 10,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3079B5",
    padding: 10,
    marginTop: 20,
  },

  caixa2: {
    width: "100%",
    backgroundColor: "#D0DDEC",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between", // Centraliza verticalmente os elementos filhos
    alignItems: "center",
  },

  botao: {
    backgroundColor: "#6D9DC5",
    padding: 15,
    borderRadius: 40,
    width: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 20,
  },
  textoBotao: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  valorHora: {
    marginLeft: 10,
  },
  botaoEntreContato: {
    marginRight: 10,
  },
});

/* 
Instalação necessária 
npm install react-native-elements   (Para usar CheckBox )
 */
