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


export default function AddPlantsPage({navigation, route}) {

  const [selectedValue, setSelectedValue] = useState("Low-Maintenance");
  
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')

  const onContinue = () => {
    navigation.navigate('PlantCareReminder',{
      title: title,
      description: description,

      documentId: route.params.documentId,
      reminderImageUrl: route.params.reminderImageUrl,

    })
  }


  return (

    <ScrollView 
    contentContainerStyle={{ paddingBottom: 24, paddingTop: 30}}>
      <SafeAreaView>


        <View style={{ flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center', marginStart: 12, borderColor: '#B5BFB7', borderWidth: 1, borderRadius: 5, height: 73, width: 73}}>
        <IconButton
          icon="plus"
          color={'#1D4123'}
          size={30}
          // style={{alignSelf: 'center'}}
          style={{alignContent: 'center',}}
          onPress={() => console.log('Pressed')}
        />
        </View>

        <PFText weight='semi-bold' style={styles.label}>Plant Name</PFText>
          <TextInput
            style={{marginStart: 12, marginEnd: 12, borderColor: '#B5BFB7', }}
                mode="outlined"
                placeholder="Cactus Plant for Sale | Same Day Delivery"
                // label="Outlined input"
                activeOutlineColor='green'
                maxLength={50}
                // multiline={true}
                // numberOfLines={1}
                // outlineColor='black'
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
            <View style={{ flex: 1, marginTop: 0, backgroundColor: "pink", marginStart: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Type</PFText>
              
              <View style={{ flex: 1, marginTop: 7, alignItems: "center", borderColor: '#B5BFB7', borderWidth: 1, borderRadius: 5}}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Low-Maintenance" value="Low-Maintenance" />
                  <Picker.Item label="Low-Maintenance" value="Low-Maintenance" />
                </Picker>
              </View>

            </View>
            
            <View style={{ flex: 1, backgroundColor: "orange", marginEnd: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Category</PFText>
              <View style={{ flex: 1, marginTop: 7, alignItems: "center", borderColor: '#B5BFB7', borderWidth: 1, borderRadius: 5}}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Indoor Plant" value="Indoor Plant" />
                  <Picker.Item label="Indoor Plant" value="Indoor Plant" />
                </Picker>
              </View>
            </View>
        </View>

        <View style={{  marginTop: 24, flexDirection: "row"}}> 
            <View style={{ flex: 1, marginTop: 0, backgroundColor: "skyblue", marginStart: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Stock No.</PFText>
             
              <TextInput
            style={{borderColor: '#B5BFB7', fontFamily: 'poppins-light', }}
                mode="outlined"
                placeholder="6"
                // label="Outlined input"
                activeOutlineColor='green'
                maxLength={4}
                // multiline={true}
                // numberOfLines={1}
                // outlineColor='black'
                onChangeText={(text) => settitle(text)}
              />

              
            
            </View>
            
            <View style={{ flex: 1, backgroundColor: "orange", marginEnd: 12, }}>
              <PFText weight='semi-bold' style={{fontSize: 16, color: '#000000', fontFamily: 'poppins-semiBold'}}>Set Price</PFText>
              <TextInput
                style={{borderColor: '#B5BFB7', fontFamily: 'poppins-light', }}
                    mode="outlined"
                    placeholder="Php 356"
                    // label="Outlined input"
                    activeOutlineColor='green'
                    maxLength={4}
                    // multiline={true}
                    // numberOfLines={1}
                    // outlineColor='black'
                    onChangeText={(text) => settitle(text)}
              />
            </View>
        </View>

   
        <Button 
          style={{ marginTop: 15, marginStart: 12, marginEnd: 12, padding: 10}}
        
          labelStyle={{ color: 'white', fontFamily: 'poppins-semiBold' }}
          // icon="image" 
          mode="contained" 
          color='#639D04'> Add Plants </Button>
    

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