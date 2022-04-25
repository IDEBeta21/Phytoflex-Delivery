import { Text, StyleSheet, View, ScrollView, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText,
  PFFlatList,
} from '../../components'

import Colors from '../../utils/globalColors';

let myOrders = [
  {
      orderId: "2110250003",
      date: "19 April, 2:48 am",
      customerName: "Juan Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      address: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
  {
    orderId: "2110250003",
    date: "19 April, 2:48 am",
    customerName: "Juan Dela Cruz",
    contactNumber: "+ (63) 956 480 5698",
    address: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
  {
    orderId: "2110250003",
    date: "19 April, 2:48 am",
    customerName: "Juan Dela Cruz",
    contactNumber: "+ (63) 956 480 5698",
    address: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
  {
    orderId: "2110250003",
    date: "19 April, 2:48 am",
    customerName: "Juan Dela Cruz",
    contactNumber: "+ (63) 956 480 5698",
    address: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
]

export default function pendingOrders() {
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
            data={myOrders}
            renderItem={(item) => (
              <View style={{borderColor: Colors.primary, borderWidth: 1, marginBottom: 10, padding: 15, borderRadius: 7}}>
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

                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <View style={{flex:1, paddingRight: 5}}>
                    <View style={{flex: 1, borderColor: Colors.primary, borderWidth: 1, borderRadius: 7, alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableOpacity onPress={() => gotoHome()}>
                          <Text style={{color: Colors.primary, fontSize: 16, fontFamily: 'poppins-regular', }}>Decline</Text>
                      </TouchableOpacity></View>
                    </View>
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