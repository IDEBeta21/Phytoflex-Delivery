import React,  { Component, useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {PFPrimaryButton, PFSecondaryButton, PFText, PFFlatList} from '../../components'

import Colors from '../../utils/globalColors';
import firebase from 'firebase'


let historyOrders = [
    {
      orderId: "2110250003",
      customerName: "Juan Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      address: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
      pickupTime: "2:48 am 04-25-2022",
      deliveredTime: "3:45 pm 04-27-2022",
      status: " ", //for the meantime
      reason: " ", //visible when delivery failed
    },
    {
      orderId: "2110250003",
      customerName: "Roan Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      address: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
      pickupTime: "2:48 am 04-25-2022",
      deliveredTime: "3:45 pm 04-27-2022",
      status: " ", //for the meantime
      reason: " ", //visible when delivery failed
    },
    {
      orderId: "2110250003",
      customerName: "Juana Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      address: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
      pickupTime: "2:48 am 04-25-2022",
      deliveredTime: "3:45 pm 04-27-2022",
      status: " ", //for the meantime
      reason: " ", //visible when delivery failed
    }
  ]
export default function App() {

  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);
 
  let setColor = 'blue'; 

        
   
        if(firebase.firestore().collection('Orders').where('orderStatus', '==', 'Delivered')){
          setColor = 'green';
       }else{
        if(firebase.firestore().collection('Orders').where('orderStatus', '==', 'Failed')){
          setColor = 'red';
        }
     
      }
        //if(firebase.firestore().collection('Orders').where('orderStatus', '==', 'Failed').get()){
          //setColor =  'red';
      //}
    
    

  
    const getData = async() => {

      // Get data inside document
      firebase.firestore()
      .collection('Orders').get().then((res) => {
        
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
    <View>
      
      <ScrollView style={{marginTop: 5}} showsVerticalScrollIndicator={false}>
        <View style={{paddingVertical: 225, paddingLeft: 5, paddingTop: 5}}>
          {/*<View style={{paddingVertical: 5, paddingLeft: 10}}>*/}
            <PFText size={18} weight={'semi-bold'}>Yesterday</PFText>
            
            <PFFlatList
              noDataMessage='No Orders'
              data={refdata}
              renderItem={(item) => (
               
              <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10, padding: 10,  width: 330  }}>
                <View style={{marginBottom: 10}}>
                  <View style={{flex: 6}}>
                    <PFText>Order ID: {item.orderId}</PFText>
                  </View>
                </View>

                  <View style={{flexDirection: 'row', flex: 6}}>
                      <PFText size={16}>Name: </PFText>
                      <PFText size={16} weight={'semi-bold'}>{item.customerName}</PFText>
                  </View>
                  
                  <PFText>Contact Number: {item.contactNumber}</PFText>
                  <PFText>Address: {item.address}</PFText>
                  <PFText>Pick Up Time: {item.pickupTime}</PFText>
                  <PFText>Delivered Time: {item.deliveredTime}</PFText>
                  
                    <View style={{flexDirection: 'row', flex: 6}}>
                      <PFText>Status: </PFText>
                      <PFText color= {setColor}>{item.orderStatus}</PFText>

                      
                    </View>
                 
                  <PFText>Reason: {item.reason}</PFText> 
                  
                </View>
                )}
               keyExtractor={(item,index) => index}
              />
            {/*</View> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}           

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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

