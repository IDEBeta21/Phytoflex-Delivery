import { Text, StyleSheet, View, ScrollView, Button, TouchableOpacity, SafeAreaView, Alert, Pressable } from 'react-native'
import React, { Component, useState, useEffect } from 'react'

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText,
  PFFlatList,
} from '../../components'

import Colors from '../../utils/globalColors';
import OrderDetails from './orderDetails';

import SampleData from '../../utils/SampleData'

import firebase from 'firebase'

export default function pendingOrders({navigation, route}) {

  const [orderList, setorderList] = useState([])

  useEffect(() => {
    (async () =>{
      await firebase.firestore()
      .collection('Orders').where('orderStatus', '==' , 'Order Placed').get().then((snapShot) => {
          // console.log("Document data:", doc.data());
          // snapShot.docs.forEach((doc) => {
          //   console.log(doc.data())
          // })
          let orders = snapShot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id
            return {id, ...data}
          })
          setorderList(orders)
          console.log(orderList)
        
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    })()
  
    
  }, [])
  

  

    return (
      <ScrollView style={{marginTop: 15}} showsVerticalScrollIndicator={false}>
        <PFText size={18} weight={'semi-bold'}>Today</PFText>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
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
            // data={SampleData.myOrders}
            data={orderList}
            renderItem={(item) => (
              <View style={{borderColor: Colors.primary, borderWidth: 1, marginBottom: 10, padding: 15, borderRadius: 7}}>
                <Pressable onPress={() => navigation.push('OrderDetailsPage', {
                  orderId: item.id,
                  orderDate: 'April 20 2022',
                  customerName: item.customerName,
                  contactNumber: item.contactNumber,
                  address: item.deliveryAddress
                })}>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <View style={{flex: 9}}>
                      <PFText>Order ID: {item.id}</PFText>
                    </View>
                    <View style={{flex: 3, alignItems: 'flex-end'}}>
                      <PFText size={12}>{'April 20 2022'}</PFText>
                    </View>
                  </View>

                  <PFText size={16} weight={'semi-bold'}>{item.customerName}</PFText>
                  <PFText>{item.contactNumber}</PFText>
                  <PFText>{item.deliveryAddress}</PFText>
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