// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/AppStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';




export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./src/assets/fonts/Montserrat-Light.ttf'),
    MontserratNormal: require('./src/assets/fonts/Montserrat-Regular.ttf')
  });


  if (!loaded) {
    return null;
  }



  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
