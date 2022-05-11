import React,  { Component, useState, useEffect } from 'react';
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
import firebase from 'firebase'

let pickUpOrders = [
  {
      orderId: "2110250003",
      customerName: "Juan Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
  },
]






export default function PickUpPage({navigation, route}) {

  const today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setMilliseconds(0);
today.setSeconds(0);

const [refdata, setrefdata] = useState([]); // declaration
const [refnull, setrefnull] = useState(true);





  const getData = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('Orders').where("date", ">=", today).get().then((res) => {
      let comment = res.docs.map(doc => { 
        const data = doc.data();
        const id = doc.id;
        return {id, ...data}
      })
      setrefdata(comment);
      console.log(refdata);
      setrefnull(false);
    }).catch((err) => {
      Alert.alert(err)
    })
    
  }

  useEffect(() => {

    getData();
  
}, [])


  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
        
        <View style={{marginTop: 15}}>
          
          <PFText size={18} weight={'semi-bold'}>Today</PFText>
            <PFFlatList
              noDataMessage='No Orders'
              data={refdata}
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
        </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  scanContainer:{
    flex: 1, 
    alignItems: 'center',
    borderWidth: 1,
    width: 330,
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