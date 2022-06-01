import React,  { Component, useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText,
  PFFlatList, PFCardShop
} from '../../components'

import Colors from '../../utils/globalColors';
import SampleData from '../../utils/SampleData';

export default function ProductPage({navigation, route}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.pickImage}>
                <Image 
                    style={styles.addIcon}
                    source={require('../../assets/assets/plus.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <View style={{flexDirection:"column", marginLeft: 10, marginBottom: 10}}>
                <PFText weight = "semi-bold" size = {15}>Plant Name</PFText>
                <View style={styles.searchBoxContainer}>
                    <TextInput
                        style={{fontSize: 12, fontFamily: 'poppins-regular', flex: 1, marginStart: 5, height: 30}}
                        placeholder=''
                        onFocus={() => navigation.navigate('')}
                    />
                </View>
            </View>
            <View style={{flexDirection:"column", marginLeft: 10, marginBottom: 10}}>
                <PFText weight = "semi-bold" size = {15}>Plant Description</PFText>
                <View style={styles.searchBoxContainer}>
                    <TextInput
                        style={{fontSize: 12, fontFamily: 'poppins-regular', flex: 1, marginStart: 5, height: 100}}
                        placeholder=''
                        onFocus={() => navigation.navigate('')}
                        multiline={true}
                        numberOfLines={2}
                    />
                </View>
            </View>
            <View style={{flexDirection:"column", marginLeft: 10, marginBottom: 10}}>
                <PFText weight = "semi-bold" size = {15}>Type</PFText>
                
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
        borderColor: '#c3c3c3',
        width: '98%',
        borderWidth: 1,
        backgroundColor: '#F5F7FA',
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        color: '#1D4123',
        // flex:1,
      },
      searchBoxIcon: {
        height: 15,
        width: 15
      },
      addIcon: {
        height: 25,
        width: 25
      },
      pickImage: {
        height: 70,
        width: 70,
        padding: 15,
        borderWidth: 1,
        borderColor: '#c3c3c3',
        borderRadius: 5,
        margin: 20,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      deliveryStyle:{
        marginTop: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 13,
        alignItems: 'center',
     
        borderRadius: 10,
        width: 150,
        borderColor: '#1D4123',
      },
      
})