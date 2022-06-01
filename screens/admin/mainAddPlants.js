import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AddPlantsPage from "./addPlants";

function FuncAddPlantsPage({navigation}) {
  return (
    <AddPlantsPage navigation={navigation}/>
  );
}

function App({navigation}) {
  return (
      <Stack.Navigator>
      
      <Stack.Screen
                name="AddPlantsPage"
                component={FuncAddPlantsPage}
                options={{ 
                  title: 'Add Plants',
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