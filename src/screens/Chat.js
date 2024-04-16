import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradientComponent from '../components/LinearGradientComponent';
import { FontAwesome } from '@expo/vector-icons';
import ilustracao from "../../assets/images/ilustracao-escolha.png";

export default function Chat() {

  return (
    <LinearGradientComponent>
      <View style={styles.subcontainer}>

        <View style={styles.header}>
          <Text style={styles.titulo}>Fulano(a)</Text>
          <View style={{ borderWidth: 2, borderRadius: 50, backgroundColor: "#EEEEEE" }}>
            <Image source={ilustracao} style={styles.fotoPerfil} />
          </View>
        </View>

        <View style={styles.campoMensagensEsquerda}>
          <Text style={styles.mensagem}>Oi cara como você tá?</Text>
        </View>
        
        <View style={styles.campoMensagensDireita} >
          <Text style={styles.mensagem}>To bem obrigada por perguntar, e você?</Text>
        </View>

        <View style={styles.campoMensagensEsquerda}>
          <Text style={styles.mensagem}>Estou indo bem. Sobre a sua ida ao médico estou interessado em te acompanhar</Text>
        </View>

        <View style={styles.campoMensagensDireita}>
          <Text style={styles.mensagem}>Sério? Que bom, estava precisando muito de alguém.</Text>
        </View>

        <View style={styles.campoMensagensEsquerda}>
          <Text style={styles.mensagem}>Que horas posso ir na sua recidência me encontrar com você?</Text>
        </View>

        <View style={styles.campoMensagensDireita}>
          <Text style={styles.mensagem}>Pode ser as 9:00 HR</Text>
        </View>

        <View style={styles.campoMensagensEsquerda}>
          <Text style={styles.mensagem}>Ok, as 9 estou aí.</Text>
        </View>


        <View style={styles.campoTexto}>
          <TextInput placeholder='Digite uma mensagem' style={styles.textInput} >
            
          </TextInput>
        </View>
      </View>
    </LinearGradientComponent>
  );
}


const styles = StyleSheet.create({
  subcontainer: {
    flex: 1,
    width: "100%"
  },
  textInput: {
    backgroundColor: "#FAFAFA",
    height: 50,
    paddingHorizontal: 15
  },
  campoTexto: {
    justifyContent: "flex-end",
    flex: 1,
  },
  campoMensagensDireita: {
    backgroundColor: "#FAFAFA",
    width: "auto",
    maxWidth: "50%",
    marginTop: 30,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: "flex-end",
  }, 
  campoMensagensEsquerda: {
    backgroundColor: "#6D9DC5",
    width: "auto",
    maxWidth: "50%",
    height: "auto",
    marginTop: 30,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }, 
  mensagem: {
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 7,
    marginBottom: 5
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
    fontSize: 32,
    fontWeight: "700"
  },

})