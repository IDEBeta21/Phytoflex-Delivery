import { Text, StyleSheet, View, ScrollView, Button, TouchableOpacity, SafeAreaView, Alert, Pressable } from 'react-native'
import React, { Component } from 'react'

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText,
  PFFlatList,
} from '../../components'

import Colors from '../../utils/globalColors';
import OrderDetails from './orderDetails';

import SampleData from '../../utils/SampleData'

export default function pendingOrders({navigation, route}) {
    return (
      <ScrollView style={{marginTop: 15}} showsVerticalScrollIndicator={false}>
        <PFText size={18} weight={'semi-bold'}>Today</PFText>
        <View style={{flexDirection: 'row', }}>
        {/* <View> */}
            <View style={{flex: 6}}>
                <PFText>Cut-Off time:</PFText>
                <PFText>8:00am - 4:00pm</PFText>
            </View>
            <View style={{flex: 6}}>
                <PFSecondaryButton title={'Print All Orders'} roundness={7}/>
            </View>
        </View>
        <View style={{paddingVertical: 5}}>
        
          <PFFlatList
            noDataMessage='No Orders'
            // showsHorizontalScrollIndicator={false} 
            // showVerticalScrollIndicator={false}
            // contentContainerStyle={{ paddingRight: 12, paddingLeft: 2 }}
            data={SampleData.myOrders}
            renderItem={(item) => (
              <View style={{borderColor: Colors.primary, borderWidth: 1, marginBottom: 10, padding: 15, borderRadius: 7}}>
                <Pressable onPress={() => navigation.push('OrderDetailsPage', {
                  orderId: item.orderId,
                  orderDate: item.date,
                  customerName: item.customerName,
                  contactNumber: item.contactNumber,
                  address: item.address
                })}>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <View style={{flex: 6}}>
                      <PFText>Order ID:{item.orderId}</PFText>
                    </View>
                    <View style={{flex: 6, alignItems: 'flex-end'}}>
                      <PFText size={12}>{item.date}</PFText>
                    </View>
                  </View>

                  <PFText size={16} weight={'semi-bold'}>{item.customerName}</PFText>
                  <PFText>{item.contactNumber}</PFText>
                  <PFText>{item.address}</PFText>
                </Pressable>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <TouchableOpacity onPress={() => Alert.alert('Decline')} style={{flex:1, paddingRight: 5}}>
                    <View style={{flex: 1, borderColor: Colors.primary, borderWidth: 1, borderRadius: 7, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: Colors.primary, fontSize: 16, fontFamily: 'poppins-regular', }}>Decline</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{flex:1, paddingLeft: 5}}>
                    <PFSecondaryButton title={'Accept'} roundness={7}/>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item,index) => index}
          />
      
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({})