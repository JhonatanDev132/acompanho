import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradientComponent from '../components/LinearGradientComponent';
import { auth } from "../../firebase.config";
import ilustracao from "../../assets/images/ilustracao-escolha.png";
import Maria from "../../assets/images/maria.png";
import { getFirestore, collection, getDocs} from 'firebase/firestore';


export default function Mensagem({ navigation }) {
  const [dados, setDados] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const dadosCollection = collection(db, 'usuario');
      const dadosSnapshot = await getDocs(dadosCollection);
      const dadosList = [];
      dadosSnapshot.forEach((doc) => {
        dadosList.push(doc.data().nome); // Adiciona o nome do usuário à lista
      });
      setDados(dadosList); // Define o estado com a lista de nomes
    };

    fetchData();
  }, []);


  return (
    <LinearGradientComponent>
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Mensagens</Text>
          <View style={{ borderWidth: 2, borderRadius: 50, backgroundColor: "#EEEEEE" }}>
            <Image source={ilustracao} style={styles.fotoPerfil} />
          </View>
        </View>

            {dados.map((nome, index) => (
        <TouchableOpacity onPress={() => navigation.navigate("Chat")} key={index} style={styles.mensagens}>
          
          <View style={styles.itemContainer}>
            <View style={styles.espaco}>
              <View >
                <Image source={Maria} style={styles.fotoPerfiMensagens} />
              </View>
              <View>
                <Text style={styles.nomeMensagens}>{nome}</Text>
                <Text style={styles.mensagem}>Ultima Mensagem</Text>
              </View>
            </View>

            <View>
              <Text>Hora</Text>
            </View>
          </View>

        </TouchableOpacity>
          ))}
      </View>
    </LinearGradientComponent>
  );
}


const styles = StyleSheet.create({
  subcontainer: {
    flex: 1,
    width: "100%"
  },
  header: {
    backgroundColor: "#6D9DC5",
    width: "100%",
    height: "10%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    gap: 150,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  fotoPerfil: {
    width: 35,
    height: 35,
    borderRadius: 50
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700"
  },
  fotoPerfiMensagens: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  mensagens: {
    backgroundColor: "#FAFAFA",
    height: "12%",
    borderBottomColor: "#2B2B2B",
    borderBottomWidth: 0.4,
    paddingHorizontal: 10,
    gap: 10,
    flexDirection: "row",
  },
  nomeMensagens: {
    fontSize: 20,
    fontWeight: "700"
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 140
  },
  mensagem: {
    color: "#3c3c3c",
  },
  espaco: {
    flexDirection: "row",
    gap: 10,
  }

})