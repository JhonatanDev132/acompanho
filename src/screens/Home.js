import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

export default function Home() {

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["30%", "80%"], [])

  const handleCloseAction = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler>
          <View  style={estilos.subcontainer}>

            

            <BottomSheet
              ref={bottomSheetRef}
              index={1}
              snapPoints={snapPoints}
              backgroundStyle={{ backgroundColor: "#F7F7F7" }}
            >
              <View style={estilos.conteudo}>
                <Text style={{ textAlign: "center", margin: 10 }} >Oi</Text>
                <Button title='Fechar' onPress={handleCloseAction} />
              </View>
            </BottomSheet>

            <Pressable style={estilos.botao} onPress={handleOpenPress}>
              <Text style={estilos.textoBotao}>Abrir</Text>
            </Pressable>
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
  );
}

const estilos = StyleSheet.create({
  subcontainer: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: "center"
  },
  map: {
    flex: 1,
    width: '100%',    
  },
  botao: {
    backgroundColor: "#2b2b2b",
    width: 120,
    borderRadius: 10,
    top: 700
  },
  textoBotao: {
    fontSize: 16,
    color: "#FFFFFF",
    paddingVertical: 15,
    textAlign: "center"
  }
});
