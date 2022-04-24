import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function App({navigation}) {
  return (
    <View style={styles.container}>
        
       <View style={styles.scanContainer}> 
      <TouchableOpacity  onPress={() =>  {navigation.navigate('NewOrderPage')}}>
          <View style={{flex: 1, alignItems: 'center',}}>
      <Image
            style={styles.scanBoxIcon}
            source={require('../../assets/assets/scan.png')}
            resizeMode='cover'
          />
          </View>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanContainer:{
    flex: 1,  
  },
  scanBoxIcon: {
    height: 200,
    width: 300,
    borderWidth: 1
  },
  scanBoxContainer: {
    borderWidth: 1
  }
});