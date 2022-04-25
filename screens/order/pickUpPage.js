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

let pickUpOrders = [
  {
      orderId: "2110250003",
      customerName: "Juan Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
]


export default function PickUpPage({navigation, route}) {

  return (
    <View style={styles.container}>
        
       
     
      
      <View>
      
        <ScrollView style={{marginTop: 15}} showsVerticalScrollIndicator={false}>
        <View style={styles.scanContainer}> 
       
       <TouchableOpacity  onPress={() =>  {navigation.navigate('NewOrderPage')}}>
           <View style={{flex: 1, alignItems: 'center',}}>
       <Image
             style={styles.scanBoxIcon}
             source={require('../../assets/assets/scan.png')}
             resizeMode='cover'
           />
           </View>
       </TouchableOpacity>
      
       </View>
      
        <View style={{paddingVertical: 225, paddingLeft: 5, paddingTop: 10}}>
        
        <View style={{paddingVertical: 5, paddingLeft: 10}}>
        <PFText size={18} weight={'semi-bold'}>Today</PFText>
          <PFFlatList
            noDataMessage='No Orders'
            data={pickUpOrders}
            renderItem={(item) => (
              <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 15,  width: 330  }}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <View style={{flex: 6}}>
                    <PFText>Order ID: {item.orderId}</PFText>
                  </View>
                </View>

                <PFText size={16} weight={'semi-bold'}>Name: {item.customerName}</PFText>
                <PFText>Contact Number: {item.contactNumber}</PFText>
                <PFText>Address: {item.deliveryAddress}</PFText>
                <View style={{flex:1, paddingTop: 10, marginTop: 10}}>
                    <PFSecondaryButton title={'Pick Order'} roundness={7}/>
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
    marginLeft: 15,
    borderRadius: 5
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