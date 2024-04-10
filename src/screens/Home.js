import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import SafeContainer from '../components/SafeContainer';
import MapView from 'react-native-maps';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function Home() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback(() => {
    console.log('handleSheetChanges', index);
  }, [])

  return (
    <SafeContainer>
      <View style={estilos.subcontainer}>
        <MapView style={estilos.map} mapType='terrain' />
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={estilos.conteudo}>
            <Text>
              Awesome!
            </Text>
          </BottomSheetView>
        </BottomSheet>
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
