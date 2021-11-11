import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import {WebView} from 'react-native-webview'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {require('./assets/icon.png')}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title= "Press" onPress = {() => console.log("button pressed")}/>
      <Image source = {require('./assets/icon.png')}/>
    </View>
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
