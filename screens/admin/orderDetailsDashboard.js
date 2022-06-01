import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'

import { PFText, PFFlatList, PFSecondaryButton } from '../../components'
import Colors from '../../utils/globalColors'
import SampleData from '../../utils/SampleData'

import firebase from 'firebase'
import { StatusBar } from 'expo-status-bar'



export default function OrderDetailsDashboardPage({navigation, route}) {
    const { 
        orderId,
        orderDate,
      } = route.params
    
      const [deliveryfee, setdeliveryfee] = useState(200)
      
      const [itemList, setitemList] = useState([])
    
      // const subtotal = SampleData.orderDetails.reduce((total, currentValue) => total = total + currentValue.price,0);
      // const subtotal = itemList.reduce((total, currentValue) => total = total + currentValue.price,0);
      const subtotal = itemList.reduce((total, currentValue) => total = total + parseInt(currentValue.price),0);
      // setsubtotal(result)

      const [refdata, setrefdata] = useState([]); // declaration 
      const [refnull, setrefnull] = useState(true);
    
      function getOrders() {
     
      
            firebase.firestore()
            .collection('Orders').where("orderId", "==", route.params.orderID).get().then((snapshot) => {
              let users = snapshot.docs.map(doc => { 
                const data2 = doc.data();
                const id2 = doc.id;
                return {id2, ...data2}
              })
              setrefdata(users);
              console.log(refdata);
              setrefnull(false);
            }).catch((err) => {
              Alert.alert(err)
            })
          }
    let orderedItems = "";
    let itemPic = "";
   
    
      refdata.forEach((item) => {
         orderedItems = item.orderedItems
         orderedItems.forEach((items) => {
          itemPic = items.imageURL
         })
      })
      
      const [image, setimage] = useState(null)
      firebase.storage().ref().child(itemPic).getDownloadURL().then((url) => {
        setimage(url);
      })
     
        
      useEffect(() => {
        getOrders()
      
        }, [])
      useEffect(() => {
       
        (async () => {
          firebase.firestore()
          .collection('Orders').doc(route.params.orderID).get().then((res) => {
            console.log(res.data().orderedItems)
            // res.data().forEach(element => {
            //   console.log(element)
            // });
            setitemList(res.data().orderedItems)
            console.log(itemList)
            
          })
        })()
        
        
      }, [])
    
      return (
        <ScrollView style={{paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20, marginTop: 25}} showsHorizontalScrollIndicator={false} >
          <StatusBar style='auto'/>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {/* <PFText size={16} weight={'medium'} >Order ID: </PFText>
              <PFText size={16} weight={'semi-bold'} style={{marginLeft: 10}} >{route.params.orderId}</PFText> */}
            </View>
            <View style={{alignItems: 'flex-end', }}>
              {/* <PFText>{route.params.orderDate}</PFText> */}
            </View>
          </View>
    
            <View >
            <View style={{paddingBottom:10, alignItems: 'center' ,flexDirection:'row'}}>
             <PFText size={14} weight={'medium'} >Status: </PFText>
             <PFText color={Colors.secondary} size={16} weight={'semi-bold'}>{route.params.status}</PFText>      
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between' ,  paddingBottom: 10}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <PFText size={14} weight={'medium'} >Order ID:</PFText> 
            <PFText  size={14} weight={'semi-bold'}>  {route.params.orderID}</PFText>       
            </View>
            <PFText size={14} weight={'medium'} >
            {route.params.orderDate}</PFText>      
            </View>
            
           
            </View>
           


          <View style={{marginBottom: 5, marginTop:15}}>
            
            
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
              data={itemList}
              renderItem={(item) => (
                <View style={{flexDirection: 'row', paddingVertical: 10, }}>
                  <View >
                    <Image source={{uri : image}} style={{height: 50, width: 50, borderRadius: 5}} />
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
                  Sub Total ({itemList.length} items): </PFText>
                  
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
    
          
        </ScrollView>
      )
    }
    
    const styles = StyleSheet.create({

    })


