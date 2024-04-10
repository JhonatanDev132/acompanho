import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import logoMini from '../../assets/images/logoMini.png'
import conectar from '../../assets/images/ilustracao-conectar.png' 
import { LinearGradient } from 'expo-linear-gradient'


export default function Detalhes() {
  return (
    <SafeContainer>
      <LinearGradient>
        <View style={estilos.subcontainer}>
            <Image source={logoMini}/>
            <Text>Procurar</Text>
            <Text>Utilize a barra de pesquisa para encontrar apoiadores de idosos disponíveis na sua região.</Text>
            <Image source={conectar}/>
        </View>
      </LinearGradient>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subcontainer: {
        alignItems: "center",
    },
})