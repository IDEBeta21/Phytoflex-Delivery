import React,  { Component, useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';



export default function emailScreen() {

  const [refdata, setrefdata] = useState([]); // declaration 
  const [refnull, setrefnull] = useState(true);

  const [userEmail, setuserEmail] = useState(''); //user email


  const getUsers = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('EmployeeInfo').where('UserEmail', '==', window.userEmail).get().then((snapshot) => {
      let users = snapshot.docs.map(doc => { 
        const data2 = doc.data();
        const id2 = doc.id;
        return {id2, ...data2}
      })
      setrefdata(users);
      console.log(refdata);
      setrefnull(false);
    }).catch((err) => {
      Alert.alert(err)
    })
    
  }

  function updateEmail() {
   firebase.firestore()
    .collection('EmployeeInfo').where('UserEmail', '==', window.userEmail).get().then((res) => {
      res.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        const docRef = firebase.firestore().collection('EmployeeInfo').doc(doc.id);
            // update profile picture
                    docRef.update({
                      UserEmail: userEmail
            })
      })
    })
  }

  useEffect(() => {

    getUsers();
    
  
}, []);


let empEmail = "";


refdata.forEach((item) => {
 
  empEmail = item.UserEmail
 

});
  return (
      <View>
      <StatusBar style="auto" />
              <View style={styles.sectionStyle}>
                <TextInput
                  style={styles.textInfo}
                  placeholder={empEmail}
                  underlineColorAndroid="#1D4123"
                  onChangeText = {(text) => setuserEmail(text)}
                  value={userEmail}
                />

              </View>

               <TouchableOpacity onPress={() => updateEmail()}>
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