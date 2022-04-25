import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Admin from './admin';

function FuncAdminPage({navigation}) {
  return (
    <Admin navigation={navigation}/>
  );
}

function MainAdmin({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="AdminHomePage"
          component={FuncAdminPage}
          options={{ 
            title: 'ALL ORDERS',
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

export default MainAdmin;