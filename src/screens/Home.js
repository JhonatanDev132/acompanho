import { Button, Pressable, StyleSheet, Text, View, LogBox, Image } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';



import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';
import { MaterialIcons } from '@expo/vector-icons';

import MapView from 'react-native-maps';
import SafeContainer from '../components/SafeContainer';

import foto from '../../assets/images/ilustracao-procurar.png'
import LinearGradientComponent from '../components/LinearGradientComponent';

export default function Home() {

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["8%", "80%"], [])


  return (
    <SafeContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler>
          <View  style={estilos.subcontainer}>

            <MapView style={estilos.mapa}/>

            <BottomSheet
              ref={bottomSheetRef}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle={{ backgroundColor: "#F4FAFE" }}
            >
                <Text style={estilos.titulo} >Ver + de 100 Resultados</Text>
                  <BottomSheetScrollView >
                  <View style={estilos.conteudo}>


                    <View style={estilos.conteudoBotton}>
                      <View>
                        <Image source={foto} style={estilos.foto} />
                      </View>
                      <View>
                        <Text style={estilos.nome}>Maria Tereza</Text>
                        <Text>São Paulo - SP</Text>
                        <StarRatingDisplay starSize={20} starStyle={{ marginRight: -7, right: 6}}
                          rating={4}
                          color='#336691'
                        />
                      </View>
                      <View style={estilos.saibaMais}>
                        <MaterialIcons name="favorite-border" size={24} color="#336691" />
                        <Text style={estilos.textoSaibaMais}>Saiba mais</Text>
                      </View>
                    </View>
                  </View>
                  </BottomSheetScrollView>
            </BottomSheet>

          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subcontainer: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: "center"
  },
  mapa: {
    flex: 1,
    width: '100%',    
  },
  botao: {
    backgroundColor: "#2b2b2b",
    width: 120,
    borderRadius: 10,
    top: 700,
    zIndex: -1
  },
  textoBotao: {
    fontSize: 16,
    color: "#FFFFFF",
    paddingVertical: 15,
    textAlign: "center"
  },
  titulo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 10
  },
  nome: {
    fontSize: 18,
    fontWeight: "700"
  },
  conteudo: {
    alignItems: "center",
    marginBottom: 20,
    gap: 30
  },
  conteudoBotton: {
    backgroundColor: "#FAFAFA",
    borderRadius: 15,
    borderColor: "#6D9DC5",
    borderWidth: 1,
    top: 10,
    padding: 20,
    width: "90%",
    flexDirection: "row",
    gap: 30,
  },
  saibaMais: {
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  textoSaibaMais: {
    color: "#336691",
    fontSize: 15
  },
  foto: {
    width: 100,
    height: 100,
  }
});
