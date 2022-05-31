import React,  { Component, useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { 
  PFPrimaryButton, PFSecondaryButton, 
  PFText,
  PFFlatList
} from '../../components'

import Colors from '../../utils/globalColors';

export default function ProductPage({navigation, route}) {

    return (
        <View style={styles.container}>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1, marginStart: 5, height: 25}}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15
      },
      searchBoxContainer: {
        borderColor: '#1D4123',
        width: '94%',
        borderWidth: 1,
        backgroundColor: '#F5F7FA',
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        color: '#1D4123',
        marginLeft: 10,
        marginRight: 10
        // flex:1,
      },
      searchBoxIcon: {
        height: 20,
        width: 20
      },
})
