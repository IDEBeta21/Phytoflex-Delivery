import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import OrderHomePage from "./orderMainPage"
import NewOrderPage from './NewOrderScanner'
import PickUpOrdersPage from './pickUpOrders'
import PickUpPage from './pickUpPage'
import FailedOrderReport from './makeAReport'
import TakePhoto from './takePhoto'
import ProofOfDelivery from './proofOfDelivery'
import PickUp from './pickUp'

function FuncOrderPage({route, navigation}) {
  return (
    <OrderHomePage navigation={navigation} route = {route}/>
  );
}

function FuncNewOrderPage({route, navigation}) {
  return (
    <NewOrderPage navigation={navigation} route = {route}/>
  );
}

function FuncPickUpPage({route, navigation}) {
  return (
    <PickUpOrdersPage navigation={navigation} route = {route}/>
  );
}
function FuncPickUp({route, navigation}) {
  return (
    <PickUp navigation={navigation} route = {route}/>
  );
}

function FuncPickUpHomePage({route, navigation}) {
  return (
    <PickUpPage navigation={navigation} route = {route}/>
  );
}

function FuncFailedOrderReportPage({route, navigation}) {
  return (
    <FailedOrderReport navigation={navigation} route = {route}/>
  );
}

function FuncTakePhoto({route, navigation}) {
  return (
    <TakePhoto navigation={navigation}  route = {route}/>
  );
}

function FuncProofOfDelivery({route, navigation}) {
  return (
    <ProofOfDelivery navigation={navigation} route = {route}/>
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
          <Stack.Screen
          name="NewOrderPage"
          component={FuncNewOrderPage}
          options={{ 
            title: 'SCAN ORDER ID',
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

      <Stack.Screen
          name="PickUpOrdersPage"
          component={FuncPickUpPage}
          options={{ 
            title: 'Pick Up Orders',
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
        
      <Stack.Screen
          name="PickUpPage"
          component={FuncPickUpHomePage}
          options={{ 
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

      <Stack.Screen
          name="FailedOrderReport"
          component={FuncFailedOrderReportPage}
          options={{ 
            title: 'Make a Report',
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

      <Stack.Screen
          name="TakePhoto"
          component={FuncTakePhoto}
          options={{ 
            title: 'Take a Photo',
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

      <Stack.Screen
          name="ProofOfDelivery"
          component={FuncProofOfDelivery}
          options={{ 
            title: 'Proof of Delivery',
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
        <Stack.Screen
          name="PickUp"
          component={FuncPickUp}
          options={{ 
            title: 'Pick Up Orders',
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