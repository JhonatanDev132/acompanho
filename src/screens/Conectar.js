import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import logoMini from '../../assets/images/logoMini.png'
import conectar from '../../assets/images/ilustracao-conectar.png' 
import LinearGradientComponent from '../components/LinearGradientComponent'


export default function Conectar({ navigation }) {
  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View style={estilos.subcontainer}>
            <Image style={estilos.logo} source={logoMini}/>
            <Text style={estilos.titulo}>Conectar</Text>
            <Text style={estilos.texto}>Responder mensagens ou enviar mensagens para cuidadores de idosos.</Text>
            <Image 
              style={estilos.ilustracao} 
              source={conectar}
            />
            
            <Pressable onPress={() => navigation.navigate("Seguranca")} style={estilos.botao}>
              <Text style={estilos.textoBotao}>
                Continuar
              </Text>
            </Pressable>
        </View>
      </LinearGradientComponent>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subcontainer: {
        alignItems: "center",
        gap: 10,
    },
    logo: {
      marginBottom: 0,
      width: 60,
      height: 51
    },
    titulo: {
      fontSize: 42,
      fontWeight: "700",
      fontFamily: "Montserrat"
    },
    texto: {
      fontSize: 18,
      fontFamily: "Montserrat",
      textAlign: "center",
      paddingHorizontal: 30,
      marginBottom: 20
    },
    ilustracao: {
      width: 180,
      height: 200
    },
    botao: {
      backgroundColor: "#6D9DC5",
      padding: 15,
      borderRadius: 40,
      width: 170,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 20
    },
    textoBotao: {
      fontSize: 24,
      textAlign: "center",
    },
    
})