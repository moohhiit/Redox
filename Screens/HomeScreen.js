import { View, Text, Dimensions, ScrollView, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'


import Header from '../Components/HomeScreen/Header'
import HomeScreenBody from '../Components/HomeScreen/HomeScreenBody'



const HIGHT = Dimensions.get('screen').height


export default function HomeScreen() {

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  })
  return (

    <View style={{ height: HIGHT }}>


      <HomeScreenBody />
    </View>


  )
}