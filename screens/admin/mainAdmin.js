import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Admin from './admin';
import OrderDetails from './orderDetails';

function FuncAdminPage({navigation, route}) {
  return (
    <Admin navigation={navigation} route={route}/>
  );
}

function FuncOrderDetailsPage({navigation, route}) {
  return (
    <OrderDetails navigation={navigation} route={route}/>
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

        <Stack.Screen
          name="OrderDetailsPage"
          component={FuncOrderDetailsPage}
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
            // headerLeft: null
          }}
        />

      </Stack.Navigator>
  );
}

export default MainAdmin;