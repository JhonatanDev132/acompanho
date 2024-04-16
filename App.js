import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import Inicio from "./src/screens/Inicio";
import Login from "./src/screens/Login";
import Procurar from "./src/screens/Procurar";
import Conectar from "./src/screens/Conectar";
import Seguranca from "./src/screens/Seguranca";
import Escolha from "./src/screens/Escolha";
import Home from "./src/screens/Home";
import Favoritos from "./src/screens/Favoritos";
import Perfilgeral from "./src/screens/Perfilgeral";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* Função para colocar icone na parte perfil . Tipo header do Perfil Cuidador */
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
    <Stack.Navigator initialRouteName="Favoritos">
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
        name="Favoritos"
        component={Favoritos}
        options={{
          title: "Favoritos",
          headerStyle: { backgroundColor: "#B8CDE2" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
        }}
      />

      <Stack.Screen
        name="Perfilgeral"
        component={Perfilgeral}
        options={{
          title: "Favoritos",
          headerTitle: () => <TituloCabecalhoPerfil />,
          headerStyle: { backgroundColor: "#B8CDE2" },
          headerTitleAlign: "left",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "#FAFAFA",
        tabBarInactiveBackgroundColor: "#FAFAFA",
        tabBarActiveTintColor: "#737373",
        tabBarInactiveTintColor: "#737373",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="home" size={25} color="#737373" />;
          },
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
