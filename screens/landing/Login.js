import { 
    View, ScrollView, KeyboardAvoidingView, Text, 
    Image, TextInput, TouchableOpacity,  
    StyleSheet,
    Alert, Button, ImageBackground, SafeAreaView, Dimensions, Keyboard, Pressable,
    ToastAndroid
} from 'react-native';
// import React, { Component } from 'react'
import * as React from 'react';
import {useState , useEffect}from 'react';

export default function Login ({navigation}) {

    const [userEmail, setuserEmail] = useState('');
    const [userPass, setUserPass] = useState('');


    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });
    });

    function logInClick() {
        navigation.navigate('MyTabs');
    }

    const funcForgotPass = () =>{
        navigation.navigate('ForgotPassword');
    }



    return (
        <ImageBackground 
        // source={require('./../../assets/drawerIcons/loginBG.png')} 
        source={require('./../../assets/assets/drawerIcons/loginBG.png')} 
        resizeMode= 'stretch' 
        style={styles.loginContainer}>
            
            <View style={(keyboardStatus == false ? styles.loginView : styles.loginViewKeyUp)}> 
                {/* Text Input Area */}
                <Pressable 
                    onPress={() => navigation.navigate('Admin')}
                    // onLongPress={() => navigation.navigate('FirebaseSample')}
                    >
                    <Text style={styles.headerText}>Welcome Back!</Text>
                </Pressable>
                

                <Text style={styles.label}>YOUR EMAIL</Text>
                <TextInput
                    style={styles.textbox}
                    placeholder="i.e. pythoflex@gmail.com"
                    onChangeText = {(text) => setuserEmail(text)}
                    value={userEmail}
                ></TextInput>
                
                <Text style={styles.label}>PASSWORD</Text>
                <TextInput
                    style={styles.pwtextbox}
                    placeholder="Password"
                    onChangeText = {(text) => setUserPass(text)}
                    value={userPass}
                    secureTextEntry={true}
                ></TextInput>



                <TouchableOpacity>
                    <View style={{color: 'white', justifyContent: 'center', alignItems: 'flex-end', marginBottom: 10, marginEnd: 11}}>
                        <Text style={{color: 'white', fontFamily: 'poppins-light', fontSize: 12}}>Forgot Password?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => logInClick()}>
                    <View style={styles.buttonArea}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>LOGIN</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'center', marginBottom: 10}}>
                    <TouchableOpacity onPress={funcForgotPass}>
                        <Text style={{color: 'white', fontFamily: 'poppins-light'}}>Forgot Password?</Text>
                        {/* <View style={{color: 'white', }}>
                            <Text style={{color: '#639D04', fontFamily: 'poppins-semiBold', paddingHorizontal: 14}}>Sign Up</Text>
                        </View> */}
                    </TouchableOpacity>
                </View>
                
            </View>
            
        {/* </KeyboardAvoidingView> */}
    </ImageBackground>
    )
}

// const styles = StyleSheet.create({})
const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        // backgroundColor: Colors.primary,
        // fontFamily: 'poppins-regular',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    loginView: {
        // backgroundColor: '#040',
        paddingHorizontal: 30, 
        paddingTop: 0, 
        // borderTopLeftRadius: 35, 
        // borderTopRightRadius: 35,
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 100
    },
    loginViewKeyUp: {
        backgroundColor: '#040',
        paddingHorizontal: 30, 
        paddingTop: 0, 
        // borderTopLeftRadius: 35, 
        // borderTopRightRadius: 35,
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgPic: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 25,
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 8,
        paddingBottom: 0,
        fontFamily: 'poppins-semiBold'
    },
    textbox: {
        borderColor: '#1D4123',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 0,
        padding: 10,
        fontSize: 16,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    label:{
        color: 'white',
        marginTop: 12,
        paddingStart: 8,
        paddingBottom: 4,
        fontSize: 14,
        fontFamily: 'poppins-regular'
    },
    pwtextbox: {
        borderColor: '#1D4123',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 8,
        marginTop: 0,
        padding: 10,
        fontSize: 16,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    logo: {
        width: 180,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12
    },
    buttonArea: {
        marginTop: 16,
        padding: 10,
        marginStart: 14,
        marginEnd: 14,
        
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
    guestButtonArea: {
        marginTop: 32,
        padding: 8,
        marginStart: 14,
        marginEnd: 14,
        
        // backgroundColor: 'green',
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

        borderWidth: 2,
        borderColor: 'white',

        fontFamily: 'poppins-regular'
    }
});