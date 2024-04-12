import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradientComponent from '../components/LinearGradientComponent'
import { auth } from "../../firebase.config";

export default function Mensagem() {

  const { email, displayName } = auth;

  return (
    <LinearGradientComponent>
      <View>
        
      </View>
    </LinearGradientComponent>
  )
}

const styles = StyleSheet.create({})