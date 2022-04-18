import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PickUpPage from '../order/pickUpPage';
import ReceivedPage from '../order/receivedPage';
import CancelledPage from '../order/cancelledPage';

//the TopTabNavigator
function FuncPickUpScrn({navigation}) {
  return (
    <PickUpPage navigation={navigation}/>
  );
}
function FuncReceivedScrn({navigation}) {
  return (
    <ReceivedPage navigation={navigation}/>
  );
}
function FuncCancelledScrn({navigation}) {
  return (
    <CancelledPage navigation={navigation}/>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTopTabs({navigation}) {
return (
  <Tab.Navigator
    initialRouteName="PickUpPage"
    screenOptions={{
      tabBarActiveTintColor: '#1D4123',
      tabBarInactiveTintColor: '#ffffff',
      tabBarLabelStyle: { fontSize: 13, fontFamily: 'poppins-regular', textTransform: 'capitalize' },
      tabBarStyle: { backgroundColor: '#1D4123', elevation:0  },
      tabBarIndicatorStyle: {backgroundColor: 'white',  borderColor: '#1D4123', height: '100%'}
    }}
  >
    <Tab.Screen
      name="PickUpPage"
      component={FuncPickUpScrn}
      options={{ tabBarLabel: 'Pickup' }}
    />
    <Tab.Screen
      name="ReceivedPage"
      component={FuncReceivedScrn}
      options={{ tabBarLabel: 'Received' }}
    />
    <Tab.Screen
      name="CancelledPage"
      component={FuncCancelledScrn}
      options={{ tabBarLabel: 'Cancelled' }}
    />
  </Tab.Navigator>
);
}
export default MyTopTabs;