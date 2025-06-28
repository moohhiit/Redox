import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Notes() {
  const [Notes, setNotes] = useState({Date : '' , Notice:""})
  const FeatchData = async () => {
    const Login = await AsyncStorage.getItem('LOGIN')
    if (Login === "true") {
      const Notice = await AsyncStorage.getItem('NOTICE')
      const NN = JSON.parse(Notice)
      setNotes(NN[0])

    }
  }
  useEffect(() => {
    FeatchData()
  }, [])
  return (
    <View style={{ margin: 10, borderRadius: 20, borderWidth: 1 }} >
      <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, paddingTop: 5 }} >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>Notice</Text>
        <Text>{Notes.Date}</Text>
      </View>

      <Text style={{ padding: 10 }}> {Notes.Notice} </Text>

    </View>


  )
}