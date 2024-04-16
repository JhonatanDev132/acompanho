import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Chat() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>chat</Text>
    </View>
  )
}

const styles = StyleSheet.create({})