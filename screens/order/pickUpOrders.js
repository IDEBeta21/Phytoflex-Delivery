import React,  { Component, useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';

export default function PickUpOrderPage({navigation, route}) {

   

    return(
        <View>
            <Text>{route.params.data}</Text>
        </View>
    )

}