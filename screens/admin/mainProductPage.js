import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ProductPage from "./ProductPage"

function FuncProductPage({navigation}) {
  return (
    <ProductPage navigation={navigation}/>
  );
}

function App({navigation}) {
  return (
      <Stack.Navigator>
      
               <Stack.Screen
          name="ProductPage"
          component={FuncProductPage}
          options={{ 
            title: 'Products',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            },
             headerLeft: null
          }}
        />

      </Stack.Navigator>
  );
}

export default App;