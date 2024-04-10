import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import logoMini from '../../assets/images/logoMini.png'
import conectar from '../../assets/images/ilustracao-conectar.png' 
import LinearGradientComponents from '../components/LinearGradientComponent'


export default function Detalhes() {
  return (
    <SafeContainer>
      <LinearGradientComponents>
        <View style={estilos.subcontainer}>
            <Image source={logoMini}/>
            <Text>Procurar</Text>
            <Text>Utilize a barra de pesquisa para encontrar apoiadores de idosos disponíveis na sua região.</Text>
            <Image source={conectar}/>
        </View>
      </LinearGradientComponents>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subcontainer: {
        alignItems: "center",
    },
})