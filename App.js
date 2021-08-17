import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, MPLUSRounded1c_400Regular, MPLUSRounded1c_300Light} from '@expo-google-fonts/m-plus-rounded-1c';
import { Imaginary } from './src/pages/Imaginary';
import AppLoading from 'expo-app-loading';
import { Polar } from './src/pages/Polar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {

  const [ fonstsLoaded ] = useFonts({
    MPLUSRounded1c_400Regular,
    MPLUSRounded1c_300Light
  });

  if(!fonstsLoaded)
  return(
    <AppLoading />
  )

  return(
    <NavigationContainer>
    <Stack.Navigator headerMode="none" screenOptions={{cardStyle:{backgroundColor: 'white'}}}>
        <Stack.Screen name="Imaginary" component={Imaginary} />
        <Stack.Screen name="Polar" component={Polar} />
    </Stack.Navigator>
</NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
})