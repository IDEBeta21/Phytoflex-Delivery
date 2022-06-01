
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'

import { PFText, PFFlatList, PFSecondaryButton } from '../../components'
import Colors from '../../utils/globalColors'
import SampleData from '../../utils/SampleData'

import firebase from 'firebase'


export default function DashboardPage({navigation, route}) {

    const [totalSales, settotalSales] = useState(0)
    const [countTotalOrders, setcountTotalOrders] = useState(0)
    const [countActiveOrders, setcountActiveOrders] = useState(0)
    const [countFailedOrders, setcountFailedOrders] = useState(0)

    const [orderList, setorderList] = useState([])

    function loadOrders() {
        firebase.firestore().collection('Orders').get().then((res) => {
            let orders = res.docs.map(doc => {
                const data = doc.data();
                const id = doc.id
                return {id, ...data}
              })
              setorderList(orders)
              console.log("Order loaded")
        })
    }

    useEffect(() => {
        (async() => {
            await firebase.firestore().collection('Orders').get()
            .then((res) => {
                setcountTotalOrders(res.size)
                firebase.firestore().collection('Orders').where('orderStatus' , '==' , 'Order Placed').get()
                .then((res) => {
                    setcountActiveOrders(res.size)
                    firebase.firestore().collection('FailedOrders').get()
                    .then((res) => {
                        setcountFailedOrders(res.size)
                        let num = 0
                        firebase.firestore().collection('Orders').where('orderStatus', '==', 'Delivered').get()
                        .then((res) => {
                            res.forEach((doc) => {
                                console.log(doc.data().totalPayment)
                                num = num + doc.data().totalPayment
                            })
                            settotalSales(num)

                            loadOrders()
                        })
                    })
                })
            })


        })()
    
      
    }, [])
    

    return (

        <View>
    <ScrollView style={{paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20}} showsHorizontalScrollIndicator={false} >

        <View >
        <View style={{flexDirection: 'row', marginBottom: 10}}>
        <PFText size={14} weight={'semi-bold'}>Sort By:  </PFText>
        <PFText size={14} weight={'semi-bold'}>Weekly</PFText>
        </View>

        <View>
            <View style={{flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between'}}>
                <View  style={styles.container1}>
                <PFText color={Colors.white} size={14} weight={'semi-bold'} >Total Sales</PFText>
                <View style={{alignItems: 'center', paddingTop:10}}>
                <PFText color={Colors.white} size={22} weight={'semi-bold'}>P {totalSales}</PFText>
                
                </View>
                </View>
                <View  style={styles.container2}>
                <PFText color={Colors.white}size={14} weight={'semi-bold'} >Total Orders</PFText>
                <View style={{alignItems: 'center', paddingTop:10}}>
                <PFText color={Colors.white} size={22} weight={'semi-bold'}>{countTotalOrders}</PFText>
                </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between'}}>
                <View style={styles.container3}>
                    <PFText color={Colors.white} size={14} weight={'semi-bold'}>Active Orders</PFText>
                    <View style={{alignItems: 'center', paddingTop:10}}>
                        <PFText color={Colors.white} size={22} weight={'semi-bold'}>{countActiveOrders}</PFText>
                    </View>
                </View>
                <View style={styles.container4}>
                    <PFText color={Colors.white} size={14} weight={'semi-bold'}>Failed Orders</PFText>
                    <View style={{alignItems: 'center', paddingTop:10}}>
                        <PFText color={Colors.white} size={22} weight={'semi-bold'}>{countFailedOrders}</PFText>
                    </View>
                </View>
            </View>
        </View>

        <View> 
            <PFText size={20} weight={'semi-bold'} >Orders</PFText>
        </View>

        <View style={{flexDirection: 'row',  }}>
            <View style={{ width:'52%'}}>
                <PFText size={14}weight={'semi-bold'} >Order ID</PFText>
            </View>
            <View style={{ width:'18%'}}>
                <PFText size={14}weight={'semi-bold'}>Total</PFText>
            </View>
            <View style={{ width:'31%'}}>
                <PFText size={14}weight={'semi-bold'}>Status</PFText>
            </View>
        </View>


        <PFFlatList
          numColumns={1}
          noDataMessage='No Orders'
        //   data={SampleData.myOrders}
          data={orderList}
          renderItem={(item) => (
            

            
            <View>
            
                <TouchableOpacity onPress={() => navigation.push('OrderDetailsDashboardPage', {
                    orderID: item.id, total: item.totalPayment, status: item.orderStatus, 
                    orderDate: item.date,
                    customerName: item.customerName,
                    contactNumber: item.contactNumber,
                    address: item.deliveryAddres
                    
                    })}>
                    <View style={{flexDirection: 'row', borderRadius: 5, paddingTop: 18, paddingLeft: 10, paddingRight: 14, paddingBottom: 18,marginBottom: 10, borderWidth: 1, justifyContent: 'space-between'}}>
                        <View style={{ width:'52%'}}>
                            <PFText size={13}weight={'medium'} >{item.id} </PFText>
                        </View>
                        <View style={{ width:'18%'}}>
                            <PFText size={14}weight={'medium'}>P {item.totalPayment}</PFText>
                        </View>
                        <View style={{ width:'31%'}}>
                            <PFText size={14}weight={'semi-bold'}>{item.orderStatus}</PFText>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

          )}
          keyExtractor={(item,index) => index}
        />


        
        </View>
    </ScrollView>
    </View>
    ) }


    const styles = StyleSheet.create({
        container1: {
            flexDirection: 'column',
         //   borderWidth: 1,
           // padding: 15,
            paddingLeft: 20,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 10,
            width: '49%',
            borderRadius: 8,
            backgroundColor : '#1D4123'
            
        },
        container2: {
            flexDirection: 'column',
         //   borderWidth: 1,
           // padding: 15,
            paddingLeft: 20,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 10,
            width: '49%',
            borderRadius: 8,
            backgroundColor : '#2A6233'
            
        },
        container3: {
            flexDirection: 'column',
        //    borderWidth: 1,
           // padding: 15,
            paddingLeft: 20,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 10,
            width: '49%',
            borderRadius: 8,
            backgroundColor : '#639D04'
            
        },
        container4: {
            flexDirection: 'column',
         //   borderWidth: 1,
           // padding: 15,
            paddingLeft: 20,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 10,
            width: '49%',
            borderRadius: 8,
            backgroundColor : '#A9C95F'

            
        },
      

    })
