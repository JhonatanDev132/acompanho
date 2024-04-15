import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

export default function Favoritos() {
  return (
    <SafeContainer>
      <View style={styles.container}>
        <View>
          <Text>Favoritos</Text>
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
  },
});

/*
Instalar: 
 npm install @react-navigation/native@latest
npm install react-native-gesture-handler@latest
npm install react-native-reanimated@latest

npx expo install react-native-gesture-handler
 */
