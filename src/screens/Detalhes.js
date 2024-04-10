import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import logoMini from '../../assets/images/logoMini.png'
import conectar from '../../assets/images/ilustracao-conectar.png' 
import LinearGradientComponent from '../components/LinearGradientComponent'


export default function Detalhes() {
  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View style={estilos.subcontainer}>
            <Image source={logoMini}/>
            <Text>Procurar</Text>
            <Text>Utilize a barra de pesquisa para encontrar apoiadores de idosos disponíveis na sua região.</Text>
            <Image source={conectar}/>
        </View>
      </LinearGradientComponent>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subcontainer: {
        alignItems: "center",
    },
})