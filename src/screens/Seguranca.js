import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import logoMini from '../../assets/images/logoMini.png'
import verificacao from '../../assets/images/verificacao.png'
import certificado from '../../assets/images/certificado.png'
import acessivel from '../../assets/images/acessivel.png'
import mensagem from '../../assets/images/mensagem.png'
import LinearGradientComponent from '../components/LinearGradientComponent'


export default function Seguranca() {
  return (
    <SafeContainer>
      <LinearGradientComponent>
      <ScrollView>
        <View style={estilos.subcontainer}>
            <Image 
              style={estilos.logo} 
              source={logoMini}
            />
            <Text style={estilos.titulo}>Segurança e transparência</Text>
            <Text style={estilos.texto}>A Acompanho oferece uma plataforma transparente, para que você tenha a certeza de que seus familiares estão em boas mãos.</Text>
            
            <View style={estilos.espacamento}>
            
            <View style={estilos.alinhamento}>
            <Image 
              source={verificacao}
            />
            <Text style={estilos.textoInformacoes}>
              Verificação de Identidade
            </Text>
            
            </View>

            <View style={estilos.alinhamento}>
            <Image 
              source={certificado}
            />
            <Text style={estilos.textoInformacoes}>
              Certificado de cuidador 
            </Text>

            </View>

            <View style={estilos.alinhamento}>
            <Image 
              source={acessivel}
            />
            <Text style={estilos.textoInformacoes}>
              Acessível para família
            </Text>

            </View>

            <View style={estilos.alinhamento}>
            <Image 
              source={mensagem}
            />
            <Text style={estilos.textoInformacoes}>
              Mensagens seguras
            </Text>

            </View>

            </View>

            <Pressable style={estilos.botao}>
              <Text style={estilos.textoBotao}>
                Continuar
              </Text>
            </Pressable>
        </View>
        </ScrollView>
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
      marginTop: 60,
      width: 60,
      height: 51
    },
    titulo: {
      fontSize: 36,
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
      marginTop: 20,
      marginBottom: 40
    },
    textoBotao: {
      fontSize: 24,
      textAlign: "center",
    },
    espacamento: {
      gap: 14
    },
    alinhamento: {
      flexDirection: "row",
      gap: 8
    },
    textoInformacoes: {
      paddingTop: 20,
      fontSize: 18,
      fontFamily: "Montserrat"
    }
})