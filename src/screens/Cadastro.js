import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeContainer from '../components/SafeContainer'
import LinearGradientComponent from '../components/LinearGradientComponent'
import { TextInput } from 'react-native-gesture-handler'

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const cadastrar = () => {

  }

  return (
    <SafeContainer>
      <LinearGradientComponent>
        <View>
          <Text>
            Cadastro
          </Text>

          <View style={styles.formulario}>  
              <TextInput placeholder='nome' />
              
              <TextInput placeholder='email'/>

              <TextInput placeholder='senha'/>
          </View>
          <Pressable onPress={() => navigation.navigate("HomeScreen")}>
            <Text>Cadastrar</Text>
          </Pressable>
        </View>
      </LinearGradientComponent>
    </SafeContainer>
  )
}

const styles = StyleSheet.create({})