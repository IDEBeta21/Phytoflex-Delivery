import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { Component, useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function ForgotPassword ({navigation}) {

    const [userEmail, setUserEmail] = useState('')
    const [emaiValidationText, setemaiValidationText] = useState('')
    const [emailValidationStatus, setemailValidationStatus] = useState(false)

    function checkEmail(text){
      setUserEmail(text)
      if (text == ''){
        return
      }

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text))
      {
        setemaiValidationText('Valid Email Address')
        setemailValidationStatus(true)
        return
      }
      // setemaiValidationText("You have entered an invalid email address!")
      setemaiValidationText("Please enter your email address in format. yourname@example.com")
      setemailValidationStatus(false)
      return
    }

    function sendResetEmail() {
      if (emailValidationStatus){
        firebase.auth().sendPasswordResetEmail(userEmail)
        .then(() => {
          Alert.alert('Password Reset Email sent')
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          console.log(error)
        });
      }
    }

    return (
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 14, marginBottom: 8, fontFamily: 'poppins-light', color: '#1D4123', paddingTop: 48, alignSelf: 'flex-end'}}>
                Back
            </Text>
        </Pressable>
        <Text style={styles.title}>
            Forgot Password?</Text>

        <Text style={styles.description}>
            Please enter your email to recieve the instruction to reset your password</Text>

        <Text style={{fontSize: 16, marginBottom: 8, fontFamily: 'poppins-regular', color: '#1D4123'}}>
            Email Address</Text>

        <TextInput style={styles.emailInput} placeholder={"phytoflex@gmail.com"} onChangeText={(text) => checkEmail(text)}/>
        {!userEmail == '' ? <Text style={(emailValidationStatus) ?  styles.labelCorrect : styles.labelError}>{emaiValidationText}</Text> : null}

        <TouchableOpacity style={{height: 50, justifyContent: 'center', marginTop: 16}} onPress={() => sendResetEmail()}>
            <View style={{flex: 1, backgroundColor: '#639d04', alignItems: 'center', justifyContent: 'center', borderRadius: 25,  }}>
                <Text style={{color: 'white', fontSize: 18, fontFamily: 'poppins-light', textAlign:'center'}}>
                    SEND ME NOW</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: 'poppins-semiBold',
        fontSize: 30,
        color: '#1D4123',
    },
    description: {
        fontSize: 13,
        textAlign: 'justify',
        color: '#1D4123',
        paddingVertical: 10,
        fontFamily: 'poppins-light'
    },
    emailInput:{
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#1D4123',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 0,
        fontFamily: 'poppins-light'
    },
    labelError:{
        color: 'red',
        marginTop:6,
        paddingStart: 8,
        fontSize: 12,
        fontFamily: 'poppins-semiBold'
    },
    labelCorrect:{
        color: '#639d04',
        marginTop:6,
        paddingStart: 8,
        fontSize: 12,
        fontFamily: 'poppins-semiBold'
    }
})