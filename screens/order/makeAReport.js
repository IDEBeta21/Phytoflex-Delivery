import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { RadioButton, Input } from 'react-native-paper';

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText, PFFlatList
} from '../../components'

import Colors from '../../utils/globalColors';

let failedOrders = [
    {
      orderId: "2110250003",
      customerName: "Juan Dela Cruz",
      contactNumber: "+ (63) 956 480 5698",
      deliveryAddress: "89 ilang-ilang St.Bo.Conception Tala Caloocan City Brgy 188",
    }
]

export default function FailedOrderReport({navigation, route}) {
    const [unreachable, setOption1] = useState(false);
    const [refused, setOption2] = useState(false);
    const [cannotFound, setOption3] = useState(false);
    const [other, setOption4] = useState(false);

    const Option1 = () =>{
      setOption1(true);
      setOption2(false);
      setOption3(false);
      setOption4(false);
    }
    
    const Option2 = () =>{
      setOption1(false);
      setOption2(true);
      setOption3(false);
      setOption4(false);
    }
    const Option3 = () =>{
      setOption1(false);
      setOption2(false);
      setOption3(true);
      setOption4(false);
    }
    const Option4 = () =>{
      setOption1(false);
      setOption2(false);
      setOption3(false);
      setOption4(true);
    }

    return (
      <View style={styles.container}>
        <PFFlatList
          noDataMessage='No failedOrders'
          data={failedOrders}
          renderItem={(item) => (
          <View>
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

            <View style={{flexDirection: 'column', marginBottom: 20}}>
              <PFText size={14}>Address: </PFText>
              <PFText size={14}>{item.deliveryAddress}</PFText>
            </View>

            <View style={{flexDirection: 'column'}}>
              <PFText size={16} weight={'semi-bold'}>Reason: </PFText>
              <RadioButton
                title="Buyer is unreachable"
                checked={unreachable}
                checkedIcon="dot-circle-o"
                uncheckedicon="circle-o"
                onPress={Option1}
              />
              <RadioButton
                title="Receiver refused the delivery"
                checked={refused}
                checkedIcon="dot-circle-o"
                uncheckedicon="circle-o"
                onPress={Option2}
              />
              <RadioButton
                title="Delivery address cannot be found"
                checked={cannotFound}
                checkedIcon="dot-circle-o"
                uncheckedicon="circle-o"
                onPress={Option3}
              />
              <RadioButton
                title="Other: "
                checked={other}
                checkedIcon="dot-circle-o"
                uncheckedicon="circle-o"
                onPress={Option4}
              />
            </View>

            <View style={{marginTop: 55}}>
            <PFSecondaryButton title={'Submit Report'} roundness={7}/>
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
    }
  });