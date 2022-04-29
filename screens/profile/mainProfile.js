import Icon from 'react-native-vector-icons/Ionicons';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ProfileHomePage from "./profileMainPage"
import EmailScreenPage from './emailScreen'
import PhoneNumberPage from './phoneScreen'
import ChangePasswordPage from './changePassword'

function FuncProfilePage({navigation}) {
  return (
    <ProfileHomePage navigation={navigation}/>
  );
}

function FuncEmailPage({navigation}) {
  return (
    <EmailScreenPage navigation={navigation}/>
  );
}

function FuncPhonePage({navigation}) {
  return (
    <PhoneNumberPage navigation={navigation}/>
  );
}

function FuncChangePasswordPage({navigation}) {
  return (
    <ChangePasswordPage navigation={navigation}/>
  );
}


function App({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileHomePage"
          component={FuncProfilePage}
          options={{ 
            title: 'My Profile',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            }
          }}
        />

      <Stack.Screen
          name="EmailScreenPage"
          component={FuncEmailPage}
          options={{ 
            title: 'Email',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            }
          }}
        />

      <Stack.Screen
          name="PhoneNumberPage"
          component={FuncPhonePage}
          options={{ 
            title: 'Phone Number',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            }
          }}
        />

      <Stack.Screen
          name="ChangePasswordPage"
          component={FuncChangePasswordPage}
          options={{ 
            title: 'Change Password',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            }
          }}
        />


      </Stack.Navigator>
  );
}

export default App;