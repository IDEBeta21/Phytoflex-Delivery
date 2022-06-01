import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import DashboardPage from "./dashboard"

function FuncDashboardPage({navigation}) {
  return (
    <DashboardPage navigation={navigation}/>
  );
}

function App({navigation}) {
  return (
      <Stack.Navigator>
       <Stack.Screen
          name="DashboardPage"
          component={FuncDashboardPage}
          options={{ 
            title: 'Dashboard',
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
            // headerLeft: null
          }}
        />
      </Stack.Navigator>
  );
}

export default App;