import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'

import { PFText, PFFlatList, PFSecondaryButton } from '../../components'
import Colors from '../../utils/globalColors'
import SampleData from '../../utils/SampleData'



export default function OrderDetails({navigation, route}) {
  const { 
    orderId,
    orderDate,
  } = route.params

  const [deliveryfee, setdeliveryfee] = useState(200)

  const subtotal = SampleData.orderDetails.reduce((total, currentValue) => total = total + currentValue.price,0);
  // setsubtotal(result)

  return (
    <ScrollView style={{paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20}} showsHorizontalScrollIndicator={false} >
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {/* <PFText size={16} weight={'medium'} >Order ID: </PFText>
          <PFText size={16} weight={'semi-bold'} style={{marginLeft: 10}} >{route.params.orderId}</PFText> */}
        </View>
        <View style={{alignItems: 'flex-end', flex: 1}}>
          {/* <PFText>{route.params.orderDate}</PFText> */}
        </View>
      </View>

      <View style={{marginBottom: 15}}>
        <PFText size={18} weight={'semi-bold'} >Order Summary</PFText>
      </View>

      <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 15}}>
        <PFText size={18} weight={'semi-bold'} >
          {route.params.customerName}</PFText>
        <PFText size={14} weight='semi-bold'>
          {route.params.contactNumber} </PFText>
        <PFText size={14} style={{textAlign: 'justify'}}>
          {route.params.address} </PFText>
      </View>

      <PFText size={18} weight={'semi-bold'} >Items</PFText>
      <View style={{borderWidth: 1, borderColor: Colors.primary, borderRadius: 5, paddingHorizontal: 12, marginBottom: 20}}>
        <PFFlatList
          data={SampleData.orderDetails}
          renderItem={(item) => (
            <View style={{flexDirection: 'row', paddingVertical: 10, }}>
              <View >
                <Image source={{uri : item.imageURL}} style={{height: 50, width: 50, borderRadius: 5}} />
              </View>

              <View style={{flex: 1, paddingLeft: 10,}}>
                <View style={{flex: 1}}>
                  <PFText weight='semi-bold'>
                    {item.itemName}</PFText>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <PFText  weight='semi-bold' size={16} color={Colors.secondary} >
                      P {item.price}</PFText>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <PFText>
                      x {item.quantity}</PFText>
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item,index) => index.toString()}
        />
      </View>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View style={{flex: 9}}>
            <PFText weight='medium'>
              Sub Total ({SampleData.orderDetails.length} items): </PFText>
              
            <PFText weight='medium'>
              Delivery Fee: </PFText>
          </View>
          <View style={{flex: 3}}>
            <PFText weight='medium'>
              P {subtotal} </PFText>
              
            <PFText weight='medium'>
              P {deliveryfee}</PFText>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 9}}>
            <PFText weight='semi-bold' size={18}>
              Total Payment:</PFText>
          </View>
          <View style={{flex: 3}}>
            <PFText weight='semi-bold' size={18}>
              P {subtotal + deliveryfee}</PFText>
          </View>
        </View>

        <TouchableOpacity style={{flex:1, marginBottom: 10}} onPress={() => Alert.alert('Decline')}>
          <View style={{
              flex: 1, borderColor: Colors.secondary, backgroundColor: Colors.secondary , 
              borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', padding: 7,
            }}>
            <Text style={{color: Colors.white, fontSize: 16, fontFamily: 'poppins-semiBold', }}>Accept and Print</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, }} onPress={() => Alert.alert('Decline')}>
          <View style={{
              flex: 1, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, alignItems: 'center', 
              justifyContent: 'center', padding: 7, 
            }}>
            <Text style={{color: Colors.primary, fontSize: 16, fontFamily: 'poppins-semiBold', }}>Decline</Text>
          </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})