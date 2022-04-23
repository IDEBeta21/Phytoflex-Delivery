import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function ForgotPassword ({navigation}) {
    return (
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.description}>
                Back
            </Text>
        </Pressable>
        <Text style={styles.title}>
            Forgot Password?</Text>

        <Text style={styles.description}>
            Please enter your email to recieve the instruction to reset your password</Text>

        <Text style={{fontSize: 20, marginBottom: 5}}>
            YOUR EMAIL</Text>

        <TextInput style={styles.emailInput} placeholder={"Phytoflex@gmail.com"}>

        </TextInput>
        <TouchableOpacity style={{height: 50, justifyContent: 'center'}}>
            <View style={{flex: 1, backgroundColor: '#639d04', alignItems: 'center', justifyContent: 'center', borderRadius: 25}}>
                <Text style={{color: 'white', fontSize: 20}}>
                    SEND ME NOW</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#1D4123',
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#1D4123',
        paddingVertical: 10,
    },
    emailInput:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#1D4123',
        paddingVertical: 7,
        paddingHorizontal: 7,
        marginBottom: 15,
    }
})