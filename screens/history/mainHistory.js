import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HistoryHomePage from "./historyMainPage"

function FuncHistoryPage({navigation}) {
  return (
    <HistoryHomePage navigation={navigation}/>
  );
}

function App({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HistoryHomePage"
          component={FuncHistoryPage}
          options={{ 
            title: 'History',
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