import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function emailScreen() {
  return (
      <View>
      <StatusBar style="auto" />
              <View style={styles.sectionStyle}>
                <TextInput
                  style={styles.textInfo}
                  placeholder="phytoflex@gmail.com"
                  underlineColorAndroid="#1D4123"
                />
              </View>

               <TouchableOpacity>
                    <View style={styles.buttonArea}>
                        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins-semiBold'}}>SAVE</Text>
                    </View>
              </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  textInfo: {
    flex: 1 ,
    color: '#1D4123',
    marginTop: 4,
    paddingStart: 8,
    paddingBottom: 12,
    marginEnd: 8,
    fontSize: 14,
    fontFamily: 'poppins-regular',
    textAlign: 'left'
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 40,
    marginTop: 32,
    marginStart: 40,
    marginEnd: 32,
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
})