import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import logoMini from '../../assets/images/logoMini.png'
import procurar from '../../assets/images/ilustracao-procurar.png' 
import LinearGradientComponent from '../components/LinearGradientComponent'


export default function Detalhes({navigation}) {
  return (
    <SafeContainer>
        <LinearGradientComponent>
          <View style={estilos.subcontainer}>
              <Image style={estilos.logo} source={logoMini}/>
              <Text style={estilos.titulo}>Procurar</Text>
              <Text style={estilos.texto}>Utilize a barra de pesquisa para encontrar apoiadores de idosos disponíveis na sua região.</Text>
              <Image 
                style={estilos.ilustracao} 
                source={procurar}
              />
              
              <Pressable onPress={() => navigation.navigate("Conectar")} style={estilos.botao}>
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
      width: 200,
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