import React,  { Component, useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
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



export default function PickUpOrderPage({navigation, route}) {

    const [refdata, setrefdata] = useState([]); // declaration
    const [refnull, setrefnull] = useState(true);
    const [refdata2, setrefdata2] = useState([]); // declaration
    const [refnull2, setrefnull2] = useState(true);
  
    const updateData = async() => {
      navigation.navigate('PickUpPage');
      // Get data inside document
      firebase.firestore()
      .collection('Orders').where('orderId', '==', route.params.data).get().then((res) => {
        res.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          const docRef = firebase.firestore().collection('Orders').doc(doc.id);
              // update ResultMatched
                      docRef.update({
                ResultMacthed: "True"
              })
        })
      
        let comment = res.docs.map(doc => { 
          const data = doc.data();
          const id = doc.id;
          return {id, ...data}
        })
        setrefdata2(comment);
        console.log(refdata2);
        setrefnull2(false);
      }).catch((err) => {
        Alert.alert(err)
      })
      
    }
  
  
  
      const getData = async() => {
  
        // Get data inside document
        firebase.firestore()
        .collection('Orders').where('orderId', '==', route.params.data).get().then((res) => {

        
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

   

    return(
        <View>
        <ScrollView style={{marginTop: 15}} showsVerticalScrollIndicator={false}>
    
      
        <View style={{paddingVertical: 5, paddingLeft: 5}}>
        
          <PFFlatList
            noDataMessage='No Orders'
            data={refdata}
            renderItem={(item) => (
              <View style={{borderColor: Colors.primary, borderWidth: 1, marginBottom: 10, padding: 15, borderRadius: 7, width: 350, }}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <View style={{flex: 6}}>
                    <PFText>Order ID: {item.orderId}</PFText>
                  </View>
                </View>

                <View style={{marginBottom: 10}}>
                <PFText weight='light'>Customer Name:</PFText>
                <PFText size={16} weight={'semi-bold'}>{item.customerName}</PFText>
                </View>
             
                <View style={{marginBottom: 10}}>
                <PFText>Contact Number:</PFText>
                <PFText>{item.contactNumber}</PFText>
                </View>
               

                <PFText>Delivery Address:</PFText>
                <PFText>{item.deliveryAddress}</PFText>
                <View style={{flex:1, paddingTop: 10}}>
                    <PFSecondaryButton title={'Result Matched'} roundness={7} onPress={() => updateData()} />
                  </View>
                  <View style={{flex:1, paddingTop: 10}}>
                    <View style={{flex: 1, borderColor: Colors.primary, borderWidth: 1, borderRadius: 7, alignItems: 'center', justifyContent: 'center', padding: 4, width: 318}}>
                      <TouchableOpacity onPress={() => gotoHome()}>
                          <Text style={{color: Colors.primary, fontSize: 16, fontFamily: 'poppins-regular', }}>Re-Scan</Text>
                      </TouchableOpacity></View>
                    </View>
              </View>
            )}
            keyExtractor={(item,index) => index}
          />
      
        </View>
      </ScrollView>
        </View>
    )

}