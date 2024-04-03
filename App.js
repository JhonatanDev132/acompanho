import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      
      <Text>Acompanho</Text>
      <Text>A plataforma que acompanha seus familiares nas consultas médicas</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
