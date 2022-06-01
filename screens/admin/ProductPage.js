

import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Dimensions, Card } from 'react-native'
import React, {useState} from 'react'
import { FAB, Provider, Title, } from 'react-native-paper';

import { PFText, PFFlatList, PFSecondaryButton, PFCardShop } from '../../components'
import Colors from '../../utils/globalColors'
import SampleData from '../../utils/SampleData'

let plantDetails = [
    {
        imageURL: 'https://picsum.photos/700',
        itemName: 'Gymnocalycium Chin Cactus Small For Sale',
        category: 'Indoor Plant',
        price: '549',
        quantity: '5',
        sold: '3'
    }
]

export default function ProductPage({navigation, route}) {

    return (
        <View style={styles.container}>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    style={{fontSize: 12, fontFamily: 'poppins-regular', flex: 1, marginStart: 5, height: 20}}
                    placeholder='Search...'
                    onFocus={() => navigation.navigate('')}
                />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Image
                        style={styles.searchBoxIcon}
                        source={require('../../assets/assets/search.png')}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <View>
                <PFText weight = "semi-bold" size = {15} style={{marginTop: 5, marginLeft: 12, marginBottom: 5}}>Products</PFText>
                <ScrollView>
                {/* <PFFlatList
                    numColumns={2}
                    noDataMessage='No Products'
                    data={plantDetails}
                    renderItem={(item) => (
                        <PFCardShop
                            imageURL={item.imageURL}
                            itemName={item.itemName}
                            category={item.categoryName}
                            price={item.price}
                            quantity={item.quantity}
                            sold={item.sold}
                            onPress={() => {navigation.navigate('')
                
                            }}
                        />
                    )}
                    keyExtractor={(item,index) => index}
                /> */}
                </ScrollView>
            </View>
            <View>
                <FAB
                    icon='plus'
                    style={styles.fab}
                    onPress={() => navigation.navigate('AddPlantsPage')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10
  },
  searchBoxContainer: {
    borderColor: '#1D4123',
    width: '95%',
    borderWidth: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    color: '#1D4123',
    marginLeft: 8,
    marginRight: 10
    // flex:1,
  },
  searchBoxIcon: {
    height: 15,
    width: 15
  },
  cardShopContainer: {
    
    marginBottom: 5,
    marginLeft: 4,
    width: (Dimensions.get('window').width/2) * 0.93,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderRadius: 7,
   
    
  },
  cardShopContent: {
    marginLeft: 0,
    flex: 1,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 6,
    paddingLeft: 7,
    margin: 0
  },
  fab: {
    position: 'absolute',
    // margin: 16,
    // right: 0,
    bottom: 0,
    marginBottom: 50,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    // flex: 1,
    backgroundColor: '#1d4123',
  }
})

        




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

