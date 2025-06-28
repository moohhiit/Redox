import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export default function DrowerComponent(props) {
  const [Name, setName] = useState('Student')
  const [Class, setClass] = useState('')
  const [Login, setLogin] = useState(false)
  const FeatchData = async () => {
    let FName = await AsyncStorage.getItem('NAME')
    let FClass = await AsyncStorage.getItem('CLASS')
    setName(FName)
    setClass(FClass)
  }

  const Nevigation = useNavigation()
  useEffect(() => {
    FeatchData()
  }, [])



  return (
    <View style={{ flex: 1 }}  >

      <ImageBackground source={require('../../Assets/bg.png')} style={{ padding: 20 }} >
        <Image source={require('../../Assets/Male.jpg')} style={{ borderRadius: 50, height: 100, width: 100 }}></Image>
        <Text style={{ fontSize: 20, color: "white" }}>
          {Name}
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>
          Class : {Class}
        </Text>

      </ImageBackground>
      <View style={{ backgroundColor: "white", flex: 1 }}>

        {Login ? <DrawerItemList {...props} /> : <TouchableOpacity
          onPress={() => {
            Nevigation.navigate("LoginPage")
          }}
        >
          <Text style={{ fontSize: 25, alignSelf: "center", marginTop: 100 }}>Login..</Text>
        </TouchableOpacity>}
      </View>
    </View>


  )
}