import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import logoMini from '../../assets/images/logo-mini.svg'
import conectar from '../../assets/images/ilustracao-conectar.svg' 

export default function Detalhes() {
  return (
    <SafeContainer>
        <View style={estilos.subcontainer}>
            <Image source={logoMini}/>
            <Text>Procurar</Text>
        </View>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subcontainer: {
        alignItems: "center",
    },
})