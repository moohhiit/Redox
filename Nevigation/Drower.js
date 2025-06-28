import * as React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import ClassNotes from '../Screens/ClassNotes';
import DrowerComponent from '../Components/DrowerComponent/DrowerComponent';



const Drawer = createDrawerNavigator();

export default function DrawerNevigation() {
  return (

    <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={props => <DrowerComponent {...props} />


    }>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{
        title: 'Redox Tutorial',
        headerStyle: {
          backgroundColor: '#D80032',
          height: 70,
          borderBottomRightRadius: 20, borderBottomLeftRadius: 20
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerRight: () => (


          <Image source={require('../Assets/Ologo.png')} style={{ height: 40, width: 40, margin: 20 }} />


        )
      }} />
      <Drawer.Screen name="Class-Notes" component={ClassNotes} options={{
        title: 'Class-Notes',
        headerStyle: {
          backgroundColor: '#A6F6FF',
          height: 70,
          borderBottomRightRadius: 20, borderBottomLeftRadius: 20
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerRight: () => (

          <Image source={require('../Assets/Ologo.png')} style={{ height: 40, width: 40, margin: 20 }} />)
      }} />
    </Drawer.Navigator>

  );
}