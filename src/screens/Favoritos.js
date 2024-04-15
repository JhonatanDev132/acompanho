import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

export default function Favoritos() {
  return (
    <SafeContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>Favoritos</Text>
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

  header: {
    alignItems: "center",
    backgroundColor: "red",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
