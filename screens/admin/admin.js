import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PendingOrders from './pendingOrders';
import SuccessOrders from './successOrders';

//the TopTabNavigator
function FuncPendingOrdersSrcn({navigation}) {
  return (
    <PendingOrders navigation={navigation}/>
  );
}
function FuncSuccessOrdersScrn({navigation}) {
  return (
    <SuccessOrders navigation={navigation}/>
  );
}

const Tab = createMaterialTopTabNavigator();

function admin({navigation}) {
return (
  <Tab.Navigator
    initialRouteName="PendingOrderPage"
    screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#1D4123',
        tabBarLabelStyle: { fontSize: 13, fontFamily: 'poppins-regular', textTransform: 'capitalize' },
        tabBarStyle: { backgroundColor: 'white', elevation:0, borderColor: '#1D4123', borderWidth: 2},
        // tabBarIndicatorStyle: {backgroundColor: 'white',  borderColor: '#1D4123', height: '100%'},
        tabBarIndicatorStyle: {backgroundColor: '#1D4123',  borderColor: 'white', height: '100%'},
    }}
    style={{margin: 12}}
  >
    <Tab.Screen
      name="PendingOrderPage"
      component={FuncPendingOrdersSrcn}
      options={{ tabBarLabel: 'Pending' }}
    />
    <Tab.Screen
      name="SuccessOrdersPage"
      component={FuncSuccessOrdersScrn}
      options={{ tabBarLabel: 'Sucessful' }}
    />
  </Tab.Navigator>
);
}
export default admin;