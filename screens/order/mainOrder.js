import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import OrderHomePage from "./orderMainPage"

function FuncOrderPage({navigation}) {
  return (
    <OrderHomePage navigation={navigation}/>
  );
}

function App({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="OrderHomePage"
          component={FuncOrderPage}
          options={{ 
            title: 'All Orders',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0
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