import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Pressable, Button, Alert, Modal
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButton from './RadioButton';

export default function App({navigation}) {
 const [modalVisible, setModalVisible] = useState(false);

 const [option, setOption] = useState(null);

   const data = [
    { value: 'Female' },
    { value: 'Male' },
    { value: 'Other' },
  ];

  const today = new Date();
  const [date, setDate] = useState(new Date(today));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const renderContent = () => (
    <View
      style={{
        //backgroundColor: '#f5f5f5',
        backgroundColor: '#1D4123',
        padding: 16,
        height: 270,
      }}
    >
      <Image
          source={require('../../assets/assets/drawerIcons/line.png')}
          style={{ width:'20%', height:6, borderRadius: 32, alignSelf: 'center'}}>
      </Image>
      <Text style={{
          color: 'white', 
          fontFamily: 'poppins-semiBold', 
          fontSize: 18,
          marginTop: 10,
          marginBottom: 4,
          textAlign: 'center', }}>
          Choose your Profile Picture
      </Text>
      <TouchableOpacity>
            <View style={styles.btnBtmSheet}>
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-regular'}}>Take Photo</Text>
            </View>
      </TouchableOpacity>
      <TouchableOpacity>
            <View style={styles.btnBtmSheet}>
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-regular'}}>Choose from Library</Text>
            </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => sheetRef.current.snapTo(1)}>
            <View style={styles.btnBtmSheetCancel}>
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-regular'}}>Cancel</Text>
            </View>
      </TouchableOpacity>      
    </View>
  );
  
  const sheetRef = React.useRef(null);

  return (
    <View>
      <StatusBar style="auto" />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[270, 0, 0]}
        borderRadius={30}
        renderContent={renderContent}
      />
      <ScrollView>
          <View style ={{width: '100%', backgroundColor: '#1D4123', height: 240}}>
                <View style={styles.container}>
                  <View style={styles.item}>
                      <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
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
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={{ color: '#1D4123', fontSize: 18, fontFamily: 'poppins-semiBold', paddingTop: 8, paddingBottom: 4}}>Gender</Text>
                        <RadioButton data={data} onSelect={(value) => setOption(value)} />
                          <Pressable
                              style={[styles.btnModal]}
                              onPress={() => setModalVisible(!modalVisible)} >
                              <Text style={{ color: 'white', fontSize: 15, fontFamily: 'poppins-regular'}}>Save</Text>
                          </Pressable>
                        {/* <Text> Your option: {option}</Text> */}
                      </View>
                    </View>
                  </Modal>
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
                <TouchableOpacity onPress={() => setModalVisible(true)}>
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
                <TouchableOpacity onPress={showDatepicker} title="Show date picker!" >
                    <Image
                    source={require('../../assets/assets/go.png')}
                    style={styles.imageStyle}
                    />
                </TouchableOpacity>
                {/* <Text>selected: {date.toLocaleString()}</Text> */}
                {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                />
                )}

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
  btnBtmSheet: {
        marginTop: 8,
        padding: 10,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 8,
        
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
  btnBtmSheetCancel: {
        marginTop: 8,
        padding: 10,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 8,
        
        backgroundColor: '#8E1B1B',
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 160
  },
  modalView: {
    margin: 8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 100
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation:10
  },
  btnModal: {
        marginTop: 16,
        paddingStart: 20,
        paddingEnd: 20,
        padding: 8,
        marginBottom: 8,
        
        backgroundColor: '#639D04',
        borderRadius: 25,
        
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

    }
})