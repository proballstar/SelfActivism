import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TabBarIOS, LogBox } from 'react-native';
import Cam from './components/camera';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Send from './components/send';
import HomeScreen from './components/home'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import firebase from 'firebase';

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  const [ _info, _setInfo ] = useState({ uri: false, caption: false})

  useEffect(() => {
    if(firebase.apps.length === 0) {
      var firebaseConfig = {
        apiKey: "AIzaSyC38WmVhfE2Ges5sE82fK4PlVd7E0oAgzI",
        authDomain: "testing123-165d0.firebaseapp.com",
        databaseURL: "https://testing123-165d0.firebaseio.com",
        projectId: "testing123-165d0",
        storageBucket: "testing123-165d0.appspot.com",
        messagingSenderId: "364097196294",
        appId: "1:364097196294:web:29796d99350a629904ce87",
        measurementId: "G-59EYY2JXD3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
      
  }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
            )}}/>
        <Tab.Screen name="Register" component={Register} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-plus" color={color} size={26} />
            )}}/>
        <Tab.Screen name="Login" component={Login} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="login" color={color} size={26} />
            )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//{_info.uri && <Image source={{ uri: _info.uri }}/>}
//{_info.caption && <Text>{JSON.stringify(_info.caption)}</Text>}