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
import AdminTabs from './global/bottomNav2';

// Import landing screens
import Login from './screens/landing/Login';
import ForgotPassword from './screens/landing/ForgotPassword';

// Import admin screen 
// import Admin from './screens/admin/admin';
// import MainAdmin from './screens/admin/mainAdmin';

// Import firebase
import firebase from 'firebase';

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC9WVlZosV9ygptBGcvY9H6MxbuI2EaGx8",
  authDomain: "phytoflex-3f53f.firebaseapp.com",
  projectId: "phytoflex-3f53f",
  storageBucket: "phytoflex-3f53f.appspot.com",
  messagingSenderId: "437461344883",
  appId: "1:437461344883:web:5388696aaa0445c758c006"
};
if (firebase.apps.length == 0) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
}

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

function FuncBottomNav({navigation}) {
  return(
    <MyTabs navigation={navigation}/>
  );
}

function FuncBottomNav2({navigation}) {
  return(
    <AdminTabs navigation={navigation}/>
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

// function FuncAdmin({navigation}) {
//   return(
//     <MainAdmin navigation={navigation}/>
//   );
// }

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
          <Stack.Screen name="AdminTabs" component={FuncBottomNav2} />
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
