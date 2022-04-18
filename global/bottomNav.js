import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Order from '../screens/order/mainOrder';
import History from '../screens/history/mainHistory';
import Profile from '../screens/profile/mainProfile';

function OrderScreen({navigation}) {
    return (
        <Order navigation={navigation}/>
    )
};

function HistoryScreen({navigation}) {
    return (
        <History navigation={navigation}/>
    )
};

function ProfileScreen({navigation}) {
    return (
        <Profile navigation={navigation}/>
    )
};

const ButtomNavTab = createMaterialBottomTabNavigator();

export default function MyTabs({navigation}) {
  return (

    <ButtomNavTab.Navigator
      barStyle={{backgroundColor: '#1D4123', fontFamily: 'poppins-regular'}}
      shifting={true}
      initialRouteName="Order"

      >
      <ButtomNavTab.Screen name="Order" component={OrderScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Order </Text> ,
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

      <ButtomNavTab.Screen name="History" component={HistoryScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> History </Text> ,
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

      <ButtomNavTab.Screen name="Profile" component={ProfileScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Profile </Text> ,
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
