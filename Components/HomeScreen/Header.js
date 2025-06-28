import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={Style.Background} >
        <Text>Redox Tutorial</Text>
      <Text>Header</Text>
    </View>
  )
}

const Style = StyleSheet.create({
    Background:{
        height:70,
        backgroundColor:"#D80032",
        borderBottomRightRadius:30, borderBottomLeftRadius:30
    }
})