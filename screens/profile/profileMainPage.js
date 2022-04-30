import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Pressable, Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function App({navigation}) {

  return (
    <View>
      <StatusBar style="auto" />
      <ScrollView>
          <View style ={{width: '100%', backgroundColor: '#1D4123', height: 240}}>
                <View style={styles.container}>
                  <View style={styles.item}>
                      <TouchableOpacity>
                            <Image
                                source={require('../../assets/assets/sampleProfile.jpg')}
                                style={{ width:160, height:205, borderRadius:15}}>
                            </Image>
                      </TouchableOpacity>
                  </View>
                  <View>
                        <Image
                                source={require('../../assets/assets/logoDel.png')}
                                style={{ width:120, height:30, resizeMode: 'contain'}}>
                        </Image>
                        <Text style={{
                                color: 'white', 
                                fontFamily: 'poppins-semiBold', 
                                fontSize: 16,
                                marginTop: 8,}}>
                                Juan Dela Cruz
                        </Text>
                        <Text style={{
                                color: 'white', 
                                fontFamily: 'poppins-light', 
                                fontSize: 12,
                                marginTop: 0,}}>
                                Emp ID: 101042716
                        </Text>
                        <Text style={{
                                color: 'white', 
                                fontFamily: 'poppins-regular', 
                                fontSize: 12,
                                marginTop: 8,}}>
                                Delivery Employee
                        </Text> 
                        <Text style={{
                                color: 'white', 
                                fontFamily: 'poppins-light', 
                                fontSize: 12,
                                marginTop: 8,}}>
                                Flex Inc. 370 Regalado Hwy, {'\n'}Novaliches, Quezon City,  {'\n'}Metro Manila, PHL {'\n'}Philippines 1118
                        </Text>
                  </View>
              </View>
          </View>
          <View style={styles.containerInfo}>
          
              <View style={styles.sectionStyle}>
                  <Text style={styles.textLabel}>
                     Email
                  </Text>
                <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo}
                  placeholder="phytoflex@gmail.com"
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity
                activeOpacity={0.7}
                style={styles.NavigationContainer} 
                onPress={() => navigation.navigate('EmailScreenPage')}
                >
                    <Image
                    source={require('../../assets/assets/go.png')}
                    style={styles.imageStyle}
                    />
                </TouchableOpacity>
              </View>
              
              <View style={styles.sectionStyle}>
                  <Text style={styles.textLabel}>
                    Gender
                  </Text>
                <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo}
                  placeholder="Male"
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity>
                    <Image
                    source={require('../../assets/assets/go.png')}
                    style={styles.imageStyle}
                    />
                </TouchableOpacity>
              </View>

              <View style={styles.sectionStyle}>
                  <Text style={styles.textLabel}>
                     Birthday
                  </Text>
                <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo}
                  placeholder="10/28/2000"
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity>
                    <Image
                    source={require('../../assets/assets/go.png')}
                    style={styles.imageStyle}
                    />
                </TouchableOpacity>
              </View>  

              <View style={styles.sectionStyle}>
                  <Text style={styles.textLabel}>
                     Phone Number
                  </Text>
                <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo}
                  placeholder="9621339000"
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity
                activeOpacity={0.7}
                style={styles.NavigationContainer} 
                onPress={() => navigation.navigate('PhoneNumberPage')}
                >
                    <Image
                    source={require('../../assets/assets/go.png')}
                    style={styles.imageStyle}
                    />
                </TouchableOpacity>
              </View>     

              <View style={styles.sectionStyle}>
                  <Text style={styles.textLabel}>
                     Change Password
                  </Text>
                <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo}
                  placeholder="********"
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                />
                <TouchableOpacity
                 activeOpacity={0.7}
                 style={styles.NavigationContainer} 
                 onPress={() => navigation.navigate('ChangePasswordPage')}
                >
                    <Image
                    source={require('../../assets/assets/go.png')}
                    style={styles.imageStyle}
                    />
                </TouchableOpacity>
              </View>           
        </View>
              <TouchableOpacity 
                    onPress={() => logInClick()}>
                    <View style={styles.buttonArea}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>LOGOUT</Text>
                    </View>
              </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 24,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right,
  },
  item: {
    width: '50%',// is 50% of container width
  },
  containerInfo: {
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    width: '90%',
    padding: 8,
    paddingBottom: 8,
    borderRadius: 1,
    elevation: 1,
    marginTop: 16,
    marginBottom: 20,
  },
    sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 40,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'transparent',
  },
  imageStyle: {
    padding: 8,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  textInfo: {
    flex: 1 ,
    color: '#1D4123',
    marginTop: 4,
    paddingStart: 8,
    paddingBottom: 4,
    marginEnd: 8,
    fontSize: 14,
    fontFamily: 'poppins-regular',
    textAlign: 'right'
  },
  textLabel: {
    color: '#1D4123', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 14
  },
  buttonArea: {
        marginTop: 8,
        padding: 10,
        marginStart: 20,
        marginEnd: 20,
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