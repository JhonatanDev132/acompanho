import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from "./src/screens/Inicio";
import Login from "./src/screens/Login";
import Procurar from "./src/screens/Procurar";
import Conectar from "./src/screens/Conectar";
import Seguranca from "./src/screens/Seguranca";
import Escolha from "./src/screens/Escolha";
import Home from "./src/screens/Home";
import Mensagem from "./src/screens/Mensagem";
import Cadastro from "./src/screens/Cadastro";
import Chat from "./src/screens/Chat";
import Aceitar from "./src/screens/Aceitar";
import TermosECondicoes from "./src/screens/TermosECondicoes";
import Conta from "./src/screens/Conta";
import PerfilIdosoFamilia from "./src/screens/PerfilIdosoFamilia";

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Favoritos from "./src/screens/Favoritos";
import Perfilgeral from "./src/screens/Perfilgeral";
import Excluirconta from "./src/screens/Excluirconta";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

    function TituloCabecalhoPerfil() {
   return (
     <View style={styles.containerTituloCabecalho}>
       <View style={styles.containerTituloCabecalhoEsquerda}>
         {/* Botão para voltar para favoritos */}

         <Text style={styles.titulo}>Perfil</Text>
       </View>

       <View style={styles.containerTituloCabecalhoDireita}>
         <AntDesign name="sharealt" size={25} color="#030303" />
         <AntDesign name="hearto" size={25} color="#336691" />
       </View>
     </View>
   );
 }

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Inicio">

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
        name="HomeScreen"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mensagem"
        component={Mensagem}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Excluirconta"
        component={Excluirconta}
        options={{
          title: "Conta",
          headerStyle: { backgroundColor: "#B8CDE2" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
        }}
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
               return;
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
                return;
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
  )
}

function TabNavigator() {
  return (

    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: "#B8CDE2",
        tabBarInactiveBackgroundColor: "#FAFAFA",
        tabBarActiveTintColor: "#737373",
        tabBarInactiveTintColor: "#737373",
      }}
    >

      <Tab.Screen
        name="Perfilgeral"
        component={Perfilgeral}
        options={{
          title: "Perfil",
          headerTitle: () => <TituloCabecalhoPerfil />,
          headerStyle: { backgroundColor: "#B8CDE2" },
          headerTitleAlign: "left",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
          tabBarIcon: () => {
            return <Ionicons name="person" size={24} color="#737373" />
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, 
          tabBarIcon: () => {
            return <AntDesign name="home" size={25} color="#737373" />
          }
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={Mensagem}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="chatbubble-ellipses-outline" size={24} color="#737373" />
          },
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          title: "Favoritos",
          headerStyle: { backgroundColor: "#B8CDE2" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
          tabBarIcon: () => {
            return <MaterialIcons name="favorite-border" size={24} color="#737373" />
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* Começo CSS Perfil Cuidador */

  containerTituloCabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#030303",
  },
  containerTituloCabecalhoEsquerda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  containerTituloCabecalhoDireita: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  /* FIM CSS Perfil cuidador */
});
