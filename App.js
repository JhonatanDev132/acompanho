import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "./src/screens/Inicio";
import Login from "./src/screens/Login";
import Procurar from "./src/screens/Procurar";
import Conectar from "./src/screens/Conectar";
import Seguranca from "./src/screens/Seguranca";
import Escolha from "./src/screens/Escolha";
import Inicadastro from "./src/screens/Inicadastro";
import Cadastro from "./src/screens/Cadastro";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Escolha"
            component={Escolha}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Procurar"
            component={Procurar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Conectar"
            component={Conectar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Seguranca"
            component={Seguranca}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inicadastro"
            component={Inicadastro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
