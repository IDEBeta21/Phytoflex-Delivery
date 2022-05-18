import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Pressable } from "react-native";
import { Camera } from "expo-camera";
import firebase from "firebase";
import { FAB } from 'react-native-paper';


export default function ProofOfDelivery({navigation}) {
    return(

      <View style={{ flex: 1 }}>
        <View style={{
            alignItems: 'center', 
        // alignSelf: 'center'
        }}>

                    
            <FAB
            small
            icon="camera-outline"
            color="#FFFFFF"
            label='Take a photo'
            onPress={() => navigation.navigate('TakePhoto')}

                style={{
                    backgroundColor: '#2A9C43',
                    position: 'absolute',
                    top: 400,
                    // margin: 16,
                    // right: 0,
                    // bottom: 34,
                }}
            />
        </View>
      </View>

    )

}
