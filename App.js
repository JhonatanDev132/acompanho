import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "./src/screens/Inicio";
import Login from "./src/screens/Login";
import Procurar from "./src/screens/Procurar";
import Conectar from "./src/screens/Conectar";
import Seguranca from "./src/screens/Seguranca";
import Escolha from "./src/screens/Escolha";
import Bemvindo from "./src/screens/Bemvindo";
import Aceitar from "./src/screens/Aceitar";
import TermosECondicoes from "./src/screens/TermosECondicoes";
import TelaDeResposta from "./src/screens/TelaDeResposta";
import Conta from "./src/screens/Conta";
import PerfilIdosoFamilia from "./src/screens/PerfilIdosoFamilia";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PerfilIdosoFamilia">
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
            name="Bemvindo"
            component={Bemvindo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Aceitar"
            component={Aceitar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TermosECondicoes"
            component={TermosECondicoes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TelaDeResposta"
            component={TelaDeResposta}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Conta"
            component={Conta}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PerfilIdosoFamilia"
            component={PerfilIdosoFamilia}
            options={({ navigation }) => ({
              title: "Perfil",
              headerStyle: { backgroundColor: "#B8CDE2" },

              headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    // Adicione a lógica para voltar à tela anterior aqui
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#030303",
                    }}
                  ></Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    // Adicione a lógica para salvar aqui
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#336691",
                    }}
                  >
                    Salvar
                  </Text>
                </TouchableOpacity>
              ),
            })}
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
