import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image,  } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';

export default function changePassword({navigation}) {

    const funcForgotPass = () =>{
        navigation.navigate('ForgotPassword');
    }

  return (
    <View style={{paddingTop:12}}>
    <StatusBar style="auto" />
         <View style={styles.sectionStyle2}>
            <Text style={styles.textLabel}>
                In order to protect your account, make sure your password is longer than 7 characters.
            </Text>
         </View>       
            <View style={styles.sectionStyle}>
              <TextInput
                  style={styles.textInfo}
                  secureTextEntry={true}
                  placeholder="Enter Current Password"
                  underlineColorAndroid="#1D4123"
                  selectionColor={'#CBDEAB'}
                />
            </View>

         {/* <View style={styles.sectionStyle2}>
            <Text style={styles.textLabel}>
                Current Password
            </Text>
         </View>        */}
            <View style={styles.sectionStyle}>
              <TextInput
                  style={styles.textInfo}
                  secureTextEntry={true}
                  placeholder="Enter New  Password"
                  underlineColorAndroid="#1D4123"
                  selectionColor={'#CBDEAB'}
                />
            </View>

         {/* <View style={styles.sectionStyle2}>
            <Text style={styles.textLabel}>
                Confirm New Password
            </Text>
         </View>        */}
            <View style={styles.sectionStyle}>
              <TextInput
                  style={styles.textInfo}
                  secureTextEntry={true}
                  placeholder="Re-enter New Password"
                  underlineColorAndroid="#1D4123"
                  selectionColor={'#CBDEAB'}
                />
            </View>

               <TouchableOpacity>
                    <View style={styles.buttonArea}>
                        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins-semiBold'}}>SAVE</Text>
                    </View>
              </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 4, justifyContent: 'center', marginBottom: 10}}>
                    <TouchableOpacity onPress={funcForgotPass}>
                        <Text style={{color: '#1D4123', fontFamily: 'poppins-light'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInfo: {
    flex: 1 ,
    color: '#1D4123',
    marginTop: 4,
    paddingStart: 8,
    paddingBottom: 8,
    marginEnd: 8,
    fontSize: 14,
    fontFamily: 'poppins-regular',
    textAlign: 'left'
  },
    sectionStyle2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 40,
    marginTop: 20,
    marginStart: 40,
    marginEnd: 40,
    backgroundColor: 'transparent',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 40,
    marginStart: 40,
    marginEnd: 40,
    marginTop: 16,
    backgroundColor: 'transparent',
  },
  buttonArea: {
        marginTop: 20,
        padding: 10,
        marginStart: 40,
        marginEnd: 40,
        marginBottom: 20,
        
        backgroundColor: '#639D04',
        borderRadius: 40,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    },
  textLabel: {
    color: '#1D4123', 
    fontFamily: 'poppins-light', 
    fontSize: 13,
  },
})