import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MyTabs from './global/bottomNav';

// Import landing screens
import Login from './screens/landing/Login';
import ForgotPassword from './screens/landing/ForgotPassword';

// Import admin screen 
import Admin from './screens/admin/admin';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

function FuncBottomNav({navigation}) {
  return(
    <MyTabs navigation={navigation}/>
  );
}

function FuncLogin({navigation}) {
  return(
    <Login navigation={navigation}/>
  );
}

function FuncForgotPassword({navigation}) {
  return(
    <ForgotPassword navigation={navigation}/>
  );
}

function FuncAdmin({navigation}) {
  return(
    <Admin navigation={navigation}/>
  );
}

const Tab = createMaterialBottomTabNavigator();

function App() {

   let [ fontsLoaded ] = useFonts({
    'poppins-regular': require('./assets/assets/fonts/Poppins-Regular.ttf'),
    'poppins-semiBold': require('./assets/assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-light': require('./assets/assets/fonts/Poppins-Light.ttf'),
    'poppins-italic': require('./assets/assets/fonts/Poppins-Italic.ttf'),
  })

  if (fontsLoaded) {
    return (
      
      <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Login'}
          >
          <Stack.Screen name="Login" component={FuncLogin} />
          <Stack.Screen name="ForgotPassword" component={FuncForgotPassword} />
          <Stack.Screen name="Admin" component={FuncAdmin} />
          <Stack.Screen name="MyTabs" component={FuncBottomNav} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (<AppLoading/>);
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
