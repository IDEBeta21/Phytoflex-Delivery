import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText,
  PFFlatList
} from '../../components'

  
import Colors from '../../utils/globalColors';

let arrivedOrders = [
  {
    orderId: "2110250000",
    customerName: "Juan Dela Cruz",
    contactNumber: "+ (63) 956 480 5698",
    deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
  {
      orderId: "2110250003",
      customerName: "Juana Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
  {
    orderId: "2110250002",
    customerName: "Juanito Dela Cruz",
    contactNumber: "+ (63) 956 480 5698",
    deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
  {
    orderId: "2110250001",
    customerName: "Juanita Dela Cruz",
    contactNumber: "+ (63) 956 480 5698",
    deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  }
]


export default function ReceivedPage({navigation, route}) {

  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={{marginTop: 15}} showsVerticalScrollIndicator={false}>
          <View style={{paddingVertical: 225, paddingLeft: 5, paddingTop: 10}}>
            <View style={{paddingVertical: 5, paddingLeft: 10}}>
              <PFText size={18} weight={'semi-bold'}>Today</PFText>
              <PFFlatList
                noDataMessage='No Orders'
                data={arrivedOrders}
                renderItem={(item) => (
                <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10, padding: 15,  width: 330  }}>
                  <View style={{marginBottom: 10}}>
                    <View style={{flex: 6}}>
                      <PFText weight={'semi-bold'}>Order ID: {item.orderId}</PFText>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', flex: 6}}>
                      <PFText size={16}>Name: </PFText>
                      <PFText size={16} weight={'semi-bold'}>{item.customerName}</PFText>
                  </View>
                  <PFText>Contact Number: {item.contactNumber}</PFText>
                  <PFText>Address: {item.deliveryAddress}</PFText>

                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex:1, paddingRight: 5}}>
                      <View style={{flex: 1, borderColor: Colors.primary, borderWidth: 1, borderRadius: 7, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('FailedOrderReport')}>
                          <Text style={{color: Colors.primary, fontSize: 16, fontFamily: 'poppins-regular', }}>Failed</Text>
                        </TouchableOpacity></View>
                      </View>
                    <View style={{flex:1, paddingLeft: 5}}>
                      <PFSecondaryButton title={'Delivered'} roundness={7}/>
                    </View>
                  </View>
                </View>
                )}
               keyExtractor={(item,index) => index}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  scanContainer:{
    flex: 1, 
    alignItems: 'center',
    borderWidth: 1,
    width: 330,
    marginLeft: 15

    
  },
  scanBoxIcon: {
    height: 200,
    width: 300,
    borderWidth: 1
  },
  scanBoxContainer: {
    borderWidth: 1
  }
});