import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import DrawerNevigation from './Drower';
import SchoolSplash from '../Screens/SchoolSplash';

const Tab = createStackNavigator();
export default function Stacknevigation() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: '#FF6969',
        },
      }}>
      <Tab.Navigator>

        <Tab.Screen
          name="SchoolSplash"
          component={SchoolSplash}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
          <Tab.Screen
          name="Home"
          component={DrawerNevigation}
          options={{
            headerShown: false,
          }}
        />

    
      </Tab.Navigator>
    </NavigationContainer>
  );
}
