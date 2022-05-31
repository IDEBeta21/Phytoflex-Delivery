import React,  { Component, useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText,
  PFFlatList
} from '../../components'
import firebase from 'firebase'
import { FAB, Portal, Provider, Title, } from 'react-native-paper';

  
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

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ReceivedPage({navigation, route}) {
  
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setMilliseconds(0);
  today.setSeconds(0);

 

  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);



  let dateNow = new Date(firebase.firestore.Timestamp.now().seconds*1000).toLocaleDateString()
  console.log(dateNow)

  const getData = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('Orders').where("orderStatNum", "==", 2).get().then((res) => {
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
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            <View>
              <View style={{flexDirection : 'column'}}>
              <PFText size={18} weight={'semi-bold'}>Today</PFText>
              <TouchableOpacity style={{alignItems: 'flex-end', marginRight: 7}} onPress = {() => getData()}>
                        <Title style={{ color: Colors.primary , marginLeft: 7, fontSize: 15, fontFamily: 'poppins-regular', color: '#1D4123', flex: 1, }}>
                        Refresh</Title> 
                      </TouchableOpacity>
              </View>
              
              <PFFlatList
                noDataMessage='No Orders'
                data={refdata}
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
                      <PFSecondaryButton title={'Delivered'} roundness={7} 
                      onPress={() => navigation.navigate('ProofOfDelivery', {orderId: item.orderId})}/>
                    </View>
                  </View>
                </View>
                )}
               keyExtractor={(item,index) => index}
              />
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
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