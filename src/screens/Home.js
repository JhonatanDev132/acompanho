import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeContainer from '../components/SafeContainer';
import MapView from 'react-native-maps';


export default function Home() {
  return (
    <SafeContainer>
      <View style={estilos.subcontainer}>
        <MapView style={estilos.map} mapType='terrain' />
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subcontainer: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
  },
  map: {
    flex: 1,
    width: '100%',    
  },
});
