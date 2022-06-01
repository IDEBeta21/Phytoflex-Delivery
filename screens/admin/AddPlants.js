import { Text, StyleSheet, SafeAreaView, View, ScrollView, Image, Picker, TouchableOpacity } from 'react-native';
import React, { Component, useState} from 'react';
//import useAutoFocusInputs from 'use-auto-focus-inputs';
import { TextInput, IconButton, Button } from 'react-native-paper';

// import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native'; 
import { 
  PFText 
} from '../../components';
import { color } from 'react-native-reanimated';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';

export default function AddPlantsPage({navigation, route}) {
  
  //adding of photo
  //choose photo from lib
 let [selectedImage, setSelectedImage] = React.useState(null);

 let openImagePickerAsync = async () => {
   let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

   if (permissionResult.granted === false) {
     alert('Permission to access camera roll is required!');
     return;
   }

   let pickerResult = await ImagePicker.launchImageLibraryAsync();
   if (pickerResult.cancelled === true) {
     return;
   }

   setSelectedImage({ localUri: pickerResult.uri });
   addPlantImage(pickerResult.uri)
   
  };
  const [refdata2, setrefdata2] = useState([]); // declaration
  const [refnull2, setrefnull2] = useState(true);


let plantImage = "";
 async function addPlantImage(uri){


  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });


  let imageDirectory = 'Shop/PlantImage' + new Date().toString() + '.jpg';

  await firebase.storage().ref().child(imageDirectory).put(blob)
  .then((res) => {
    console.log(res);
  })

  // To get imageURL:  
   
    setImage(imageDirectory)

  
  blob.close();
  
}

  function AddPlants() {
    
    firebase.firestore().collection('PlantListItem').add({
      categoryName: selectedCategory,
      imageURL: image,
      itemName: title,
      plantDesc: description,
      price: price,
      quantity: stock,
      size: "Medium",
      sold: 4,
      productId: "0"
    }).then((res) => {
      console.log(res.id)
      Alert.alert("Plant item was added successfully!")
      function updateProductId() {
          const docRef = firebase.firestore().collection('PlantListItem').doc(res.id);
              // update doc Id
                      docRef.update({
                        productId: res.id
              })
      }
      updateProductId()
    }).catch((err) => {
      Alert.alert(err)
   
    })
    
  }

  const [selectedValue, setSelectedValue] = useState("Low-Maintenance");
  const [selectedCategory, setSelectedCategory] = useState("Indoor Plant");
  
  const [title, settitle] = useState('')
  const [stock, setStock] = React.useState(null)
  const [price, setPrice] = React.useState(null)
  const [description, setdescription] = useState('')
  const [image, setImage] = useState('')

  const onContinue = () => {
    navigation.navigate('PlantCareReminder',{
      title: title,
      description: description,

      documentId: route.params.documentId,
      reminderImageUrl: route.params.reminderImageUrl,

    })
  }

  firebase.storage().ref().child(image).getDownloadURL().then((url) => {
    setImage(url);
  })
  return (

    <ScrollView 
    contentContainerStyle={{ paddingBottom: 24, paddingTop: 30}}>
      <SafeAreaView>

    <View style={{flexDirection: 'row',  alignItems:'center', }}>

    <View style={{ 
        flexDirection:'row',
        
        alignItems:'center',
        justifyContent:'center', marginStart: 12, borderColor: '#B5BFB7', borderWidth: 1, borderRadius: 5, height: 73, width: 73}}>
        <IconButton
          icon="plus"
          color={'#1D4123'}
          size={30}
          // style={{alignSelf: 'center'}}
          style={{alignContent: 'flex-start',}}
          onPress={() => openImagePickerAsync()}
       
        />
          
        </View>
       
        <View style={{ 
        justifyContent:'center', marginStart: 12, borderColor: '#B5BFB7', borderWidth: 1, borderRadius: 5, height: 73, width: 73}}>
         <Image
            source={{uri : image}}
            style={{ height: 73, width: 73, resizeMode: 'contain', borderWidth: 1}}>
        </Image>
        </View>
     
    </View>
      
        <PFText weight='semi-bold' style={styles.label}>Plant Name</PFText>

          <TextInput
            style={{marginStart: 12, marginEnd: 12, borderColor: '#B5BFB7', }}
                mode="outlined"
                placeholder="Cactus Plant for Sale | Same Day Delivery"
                activeOutlineColor='green'
                maxLength={50}
                onChangeText={(text) => settitle(text)}
              />

              

        <PFText weight='semi-bold' style={styles.label}>Plant Description</PFText>
          <TextInput
            style={{marginStart: 12, marginEnd: 12, borderColor: '#B5BFB7' }}
                mode="outlined"
                // label="Outlined input"
                placeholder="Gymnocalycium baldianum can be grown both indoors and outdoors. One thing you should know about this plant is it prefers partial shade as opposed to direct sunlight. It can do well indoors as well as outdoors, so long as you provide it with the proper care that it needs to thrive. If grown indoors, it needs proper ventilation and air circulation for it to thrive. It does not do well in stagnant air."
                activeOutlineColor='green'
                multiline={true}
                scrollEnabled={true}
                editable={true}
                numberOfLines={8}
                maxLength={140}
                // right={<TextInput.Affix text="/140" />}
                onChangeText={(text) => setdescription(text)}
              />

        <View style={{  marginTop: 24, flexDirection: "row"}}> 
            <View style={{ flex: 1, marginRight: 6, marginTop: 0, backgroundColor: "transparent", marginStart: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Type</PFText>
              
              <View style={{ flex: 1, marginTop: 7, alignItems: "center", borderColor: '#7C807C', borderWidth: 1, borderRadius: 5}}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 155, }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Low-Maintenance" value="Low-Maintenance" />
                  <Picker.Item label="High-Maintenance" value="High-Maintenance" />
                </Picker>
              </View>

            </View>
            
            <View style={{ flex: 1, marginLeft: 6,  backgroundColor: "transparent", marginEnd: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Category</PFText>
              <View style={{ flex: 1, marginTop: 7, alignItems: "center", borderColor: '#7C807C', borderWidth: 1, borderRadius: 5}}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 155 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
                >
                  <Picker.Item label="Indoor Plant" value="Indoor Plant" />
                  <Picker.Item label="Outdoor Plant" value="Outdoor Plant" />
                  <Picker.Item label="Pots and Planter" value="Pots and Planter" />
                  <Picker.Item label="Plant Crops" value="Plant Crops" />
                </Picker>
              </View>
            </View>
        </View>

        <View style={{  marginTop: 24, flexDirection: "row"}}> 
            <View style={{ flex: 1, marginTop: 0, marginRight: 6, backgroundColor:  "transparent", marginStart: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Stock No.</PFText>
             
              <TextInput
            style={{borderColor: '#B5BFB7', fontFamily: 'poppins-light'}}
                mode="outlined"
                placeholder="6"
                // label="Outlined input"
                activeOutlineColor='green'
                maxLength={4}
                keyboardType="numeric"
                // multiline={true}
                // numberOfLines={1}
                // outlineColor='black'
                onChangeText={(Number) => setStock(Number)}
              />

              
            
            </View>
            
            <View style={{ flex: 1, marginLeft: 6, backgroundColor:  "transparent", marginEnd: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Set Price</PFText>
              <TextInput
                style={{borderColor: '#B5BFB7', fontFamily: 'poppins-light', }}
                    mode="outlined"
                    placeholder="Php 356"
                    // label="Outlined input"
                    activeOutlineColor='green'
                    maxLength={4}
                    keyboardType="numeric"
                    // multiline={true}
                    // numberOfLines={1}
                    // outlineColor='black'
                    onChangeText={(text) => setPrice(text)}
              />
            </View>
        </View>

   
        <Button 
          style={{ marginTop: 15, marginStart: 12, marginEnd: 12, padding: 10}}
        
          labelStyle={{ color: 'white', fontFamily: 'poppins-semiBold' }}
          // icon="image" 
          mode="contained" 
          color='#639D04'
          onPress={() => AddPlants()}
          > Add Plants </Button>
    

      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  // textContainer: {
  //   alignItems: 'center',
  //   paddingVertical: 5,
  //   elevation: 20
  // },

  label:{
    fontSize: 16,
    marginTop: 24,
    color: '#000000',
    // marginTop: 12,
    paddingStart: 12,
    paddingBottom: 0,
    marginBottom: 0,
    // paddingBottom: 4,
    // fontSize: 14,
    fontFamily: 'poppins-semiBold'
},

  input: {
    // height: 40,
    // margin: 12,
    // marginTop: 0,
    // marginBottom: 12,
    marginStart: 12,
    marginEnd: 12,
    borderWidth: 1,
    // padding: 10,
    fontFamily: 'poppins-light',
  },

  // * {
  //   fontFamily: 'poppins-semiBold'
  
  // }, 

})