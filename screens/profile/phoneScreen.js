import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function phoneScreen() {
  return (
      <View>
        <StatusBar style="auto" />
              <View style={styles.sectionStyle}>
                  <Text style={styles.textLabel}>
                     +(63)
                  </Text>
                <TextInput
                  style={styles.textInfo}
                  placeholder="9613397900"
                  underlineColorAndroid="#1D4123"
                  keyboardType="numeric"
                />
              </View>

               <TouchableOpacity>
                    <View style={styles.buttonArea}>
                        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins-semiBold'}}>UPDATE</Text>
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
    paddingBottom: 8,
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
    marginEnd: 40,
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
    fontFamily: 'poppins-semiBold', 
    fontSize: 15,
    paddingBottom: 4,
  }
})