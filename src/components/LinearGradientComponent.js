import { StyleSheet } from "react-native";

import * as SplashScreen from "expo-splash-screen";

import { LinearGradient } from "expo-linear-gradient";

SplashScreen.preventAutoHideAsync();

export default function LinearGradientComponent({ children }) {
  return (

      <LinearGradient colors={["#F4FAFE", "#ADC1D1"]} style={estilos.gradient}>
        {children}
      </LinearGradient>

  );
}

const estilos = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});