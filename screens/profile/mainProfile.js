import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ProfileHomePage from "./profileMainPage"

function FuncProfilePage({navigation}) {
  return (
    <ProfileHomePage navigation={navigation}/>
  );
}

function App({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileHomePage"
          component={FuncProfilePage}
          options={{ 
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            }
          }}
        />

      </Stack.Navigator>
  );
}

export default App;