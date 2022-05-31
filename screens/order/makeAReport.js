import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RadioButton} from 'react-native-paper';

import RadioButtonRN from 'radio-buttons-react-native';

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText, PFFlatList
} from '../../components'

import Colors from '../../utils/globalColors';

// import firebase
import firebase from 'firebase';
let failedOrders = [
    {
      orderId: "U2gcENC0QBbozSuW3Xlp",
      customerName: "Ian Ermino",
      contactNumber: "+ (63) 956 491 3444",
      deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
    }
]

export default function FailedOrderReport({navigation, route}) {

  // const [newcomment, setnewcomment] = useState('')

  // const [refdata, setrefdata] = useState([]); // declaration
  // const [refnull, setrefnull] = useState(true);

  // const getData = async() => {
    
  //   // Get data inside document
  //   firebase.firestore()
  //   .collection('Orders').where('orderId', '==', route.params.data).get().then((res) => {
  //     let comment = res.docs.map(doc => { 
  //       const data = doc.data();
  //       const id = doc.id;
  //       return {id, ...data}
  //     })
  //     setrefdata(comment);
  //     console.log(refdata);
  //     setrefnull(false);
  //   }).catch((err) => {
  //     Alert.alert(err)
  //   })
    
  // }

  // useEffect(() => {

  //   getData();
  
  // }, [])
  
  // function addFailedReports(){
  //   navigation.navigate('ReceivedPage');
  //   firebase.firestore().collection('FailedOrders').add({
  //     orderId: orderId,
  //     customerName: customerName,
  //     contactNumber: contactNumber,
  //     deliveryAddress: deliveryAddress,
  //     orderStatus: 'Failed',
  //     reason: newcomment
  //   }).then((res) => {
  //     Alert.alert('Submitted Successfully')
  //   }).catch((err) => {
  //     Alert.alert(err)
  //   })  
  // }
      // const Create = ()=>{
      //   const myDoc = doc(db, "MyCollection", "MyDocument")
      // }
      // const Read = ()=>{
        
      // }
      // const Update = ()=>{
        
      // }
      // const Delete = ()=>{
        
      // }
      
    const data = [
      {
        label: 'Buyer is unreachable'
       },
       {
        label: 'Receiver refused the delivery'
       },
       {
        label: 'Delivery address cannot be found'
       },
       {
        label: 'Other'
       }
      ];

    return (
      <View style={styles.container}>
        <PFFlatList
          noDataMessage='No Orders'
          data={failedOrders}
          renderItem={(item) => (
          <View>
            {/* <TextInput
                  placeholder='Other Reason'
                  onChangeText={(val) => setnewcomment(val)}
                /> */}
            <View style={{marginBottom: 20}}>
              <View style={{flexDirection: 'row', flex: 6}}>
              <PFText size={14}>Order ID:   </PFText>
              <PFText size={14} weight={'semi-bold'}>{item.orderId}</PFText>
              </View>
            </View>

            <View style={{flexDirection: 'column', marginBottom: 15}}>
              <PFText size={14}>Name: </PFText>
              <PFText size={18} weight={'semi-bold'}>{item.customerName}</PFText>
            </View>

            <View style={{flexDirection: 'column', marginBottom: 15}}>
              <PFText size={14}>Contact Number: </PFText>
              <PFText size={14}>{item.contactNumber}</PFText>
            </View>

            <View style={{flexDirection: 'column', marginBottom: 25}}>
              <PFText size={14}>Address: </PFText>
              <PFText size={14}>{item.deliveryAddress}</PFText>
            </View>

            <View style={{flexDirection: 'column'}}>
              <PFText size={16} weight={'semi-bold'}>Reason: </PFText>
                <RadioButtonRN
                 data={data}
                  selectedBtn={(e) => setnewcomment(e)}
                  activeColor={'#1D4123'}
                  box={false}
                  textColor={'#1D4123'}
                  textStyle={{fontFamily: 'poppins-light'}}
                />
                
                {/* <TextInput
                  placeholder='Other Reason'
                /> */}
                 {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection:'row',alignItems:"center"}}>
                    <RadioButton value="rent" />
                    <Text>Rent</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:"center"}}>
                    <RadioButton value="other" />
                    <Text>Others</Text>
                  </View>
                </RadioButton.Group>
             {value === 'other' && <TextInput placeholder="Other Payment method" onChangeText={text=> setOtherPayment(text)}/>} */}
            </View>

            <View style={{marginTop: 55}}>
            <PFSecondaryButton title={'Submit Report'} roundness={7} onPress={() => navigation.navigate('ReceivedPage')}/>
            </View>
          </View>
          )}
          keyExtractor={(item,index) => index}
          />
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
      paddingLeft: 20,
      paddingTop: 20,
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
    },
    rdbtnFont: {
      fontFamily: 'Poppins'
    }
  });