import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ilustracao from "./assets/images/ilustracao-inicio.png";



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Montserrat: require("./assets/font/Montserrat-Regular.ttf")
  })
  return (
    <>
    <StatusBar style="auto" />
      <View style={styles.container}>
        <LinearGradient colors={['#F4FAFE', '#ADC1D1']} style={styles.gradient}>
      
          <Image source={ilustracao} />

          <Text style={styles.titulo}>Acompanho</Text>
          <Text style={styles.texto}>A plataforma que acompanha seus familiares nas consultas médicas</Text>

        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 32
  },
  texto: {
    fontSize: 18,
    textAlign: "center",
  },
});
