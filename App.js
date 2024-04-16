import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect, useCallback } from "react";

import Inicio from "./src/screens/Inicio";
import Login from "./src/screens/Login";
import Procurar from "./src/screens/Procurar";
import Conectar from "./src/screens/Conectar";
import Seguranca from "./src/screens/Seguranca";
import Escolha from "./src/screens/Escolha";
import Home from "./src/screens/Home";
import Perfil from "./src/screens/Perfil";
import Mensagem from "./src/screens/Mensagem";
import Cadastro from "./src/screens/Cadastro";
import Chat from "./src/screens/Chat";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
  </Stack.Navigator>
  )
}

function TabNavigator() {
  return (
    
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: "#FAFAFA",
        tabBarInactiveBackgroundColor: "#FAFAFA",
        tabBarActiveTintColor: "#737373",
        tabBarInactiveTintColor: "#737373"
      }}
    >
      <Tab.Screen 
      name="Perfil" 
      component={Perfil} 
      options={{ 
        headerShown: false,
        tabBarIcon: () => {
          return <Ionicons name="person" size={24} color="#737373" />
        },
      }}
      />
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{ headerShown: false, tabBarIcon: () => {
       return <AntDesign name="home" size={25} color="#737373" />
      }}}
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
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </>
  );
}

