import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Dashboard from '../screens/admin/mainAdmin';
import Orders from '../screens/admin/AddPlants';
import Products from '../screens/admin/ProductPage';

function DashboardScreen({navigation}) {
    return (
        <Dashboard navigation={navigation}/>
    )
};

function OrderScreen({navigation}) {
    return (
        <Orders navigation={navigation}/>
    )
};

function ProductScreen({navigation}) {
    return (
        <Products navigation={navigation}/>
    )
};

const ButtomNavTab = createMaterialBottomTabNavigator();

export default function MyTabs2({navigation}) {
  return (

    <ButtomNavTab.Navigator
      barStyle={{backgroundColor: '#1D4123', fontFamily: 'poppins-regular'}}
      shifting={true}
      initialRouteName="Dashboard"

      >
      <ButtomNavTab.Screen name="Dashboard" component={DashboardScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Dashboard </Text> ,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../assets/assets/order.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            padding: 5,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }} />

      <ButtomNavTab.Screen name="History" component={OrderScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Orders </Text> ,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../assets/assets/history.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            padding: 5,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }}  />

      <ButtomNavTab.Screen name="Profile" component={ProductScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Products </Text> ,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../assets/assets/profile.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            padding: 5,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }}
      />
    </ButtomNavTab.Navigator>
    
  );
}
