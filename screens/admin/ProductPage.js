

import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'

import { PFText, PFFlatList, PFSecondaryButton } from '../../components'
import Colors from '../../utils/globalColors'
import SampleData from '../../utils/SampleData'



export default function ProductPage({navigation, route}) {

    return (
        <View>
        <TouchableOpacity onPress={() => navigation.push('AddPlantsPage', {})}>
        <PFText size={14}weight={'semi-bold'} >NYAAAA</PFText>

        </TouchableOpacity>
            
        </View>
    ) }














// import React,  { Component, useState, useEffect } from 'react';
// import {
//   View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// import { 
//   PFPrimaryButton, PFSecondaryButton, 
//   PFText,
//   PFFlatList, PFCardShop
// } from '../../components'

// import Colors from '../../utils/globalColors';
// import SampleData from '../../utils/SampleData';

// let plantDetails = [
//     {
//         imageURL: 'https://picsum.photos/700',
//         itemName: 'Gymnocalycium Chin Cactus Small For Sale',
//         category: 'Indoor Plant',
//         price: 549,
//         quantity: 5,
//         sold: 3
//     }
// ]

// export default function ProductPage({navigation, route}) {

// //     const [refdata, setrefdata] = useState([]); // declaration
// //     const [refnull, setrefnull] = useState(true);
// //     const [search, setSearchContent] = useState('');

  
// //     // let userId = window.userId


// //     const getData = async() => {

// //       // Get data inside document
// //       firebase.firestore()
// //       .collection('PlantListItem').get().then((res) => {
// //         let comment = res.docs.map(doc => { 
// //           const data = doc.data();
// //           const id = doc.id;
// //           return {id, ...data}
// //         })
// //         setrefdata(comment);
// //         console.log(refdata);
// //         setrefnull(false);
// //       }).catch((err) => {
// //         Alert.alert(err)
// //       })
      
// //     }
    
    
// //     useEffect(() => {

// //         getData();
    
// //     }, [])


// //   function toShopSearch() {
// //     navigation.navigate('ShopSearch');
    
// //   }

//     return (
//         <View style={styles.container}>
//             <View style={styles.searchBoxContainer}>
//                 <TextInput
//                     style={{fontSize: 12, fontFamily: 'poppins-regular', flex: 1, marginStart: 5, height: 20}}
//                     placeholder='Search...'
//                     onFocus={() => navigation.navigate('')}
//                 />
//                 <View style={{flex: 1, alignItems: 'flex-end'}}>
//                     <Image
//                         style={styles.searchBoxIcon}
//                         source={require('../../assets/assets/search.png')}
//                         resizeMode='contain'
//                     />
//                 </View>
//             </View>
//             <View>
//                 <PFText weight = "semi-bold" size = {15} style={{marginTop: 5, marginLeft: 12, marginBottom: 5}}>Products</PFText>
//                 <PFFlatList
//                     numColumns={2}
//                     noDataMessage='No Products'
//                     data={plantDetails}
//                     renderItem={(item) => (
//                         <PFCardShop
//                             imageURL={item.imageURL}
//                             itemName={item.itemName}
//                             category={item.categoryName}
//                             price={item.price}
//                             quantity={item.quantity}
//                             sold={item.sold}
//                             onPress={() => {navigation.navigate('')
                
//                             }}
//                         />
//                     )}
//                     keyExtractor={(item,index) => index}
//                 />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, 
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         padding: 15
//       },
//       searchBoxContainer: {
//         borderColor: '#1D4123',
//         width: '98%',
//         borderWidth: 1,
//         backgroundColor: '#F5F7FA',
//         paddingHorizontal: 12,
//         paddingVertical: 5,
//         marginVertical: 10,
//         alignItems: 'center',
//         flexDirection: 'row',
//         borderRadius: 20,
//         color: '#1D4123',
//         marginLeft: 10,
//         marginRight: 10
//         // flex:1,
//       },
//       searchBoxIcon: {
//         height: 15,
//         width: 15
//       },
// })
