import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Facilities() {
  return (
    <View style={{ margin: 20, borderTopWidth: 1, borderRadius: 20 }} >
      <Text style={{ fontSize: 30, textAlign: "center", margin: 20 }} >Facilities</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={{ fontSize: 30 }} >1</Text>

        <Text style={{ fontSize: 30 }}>Tutoring Room</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }} >{'\u2B24'}</Text>
        <Text style={Style.Text}>Equippied with whiteBoard , Study material , and access to Education Technology</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={{ fontSize: 30 }} >1</Text>

        <Text style={{ fontSize: 30 }}>Subject-Specific Areas</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }} >{'\u2B24'}</Text>
        <Text style={Style.Text}>Specialized rooms for different
          subjects, such as mathematics,
          science, languages, and more.</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={{ fontSize: 30 }} >1</Text>

        <Text style={{ fontSize: 30 }}>Learning Resources</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }} >{'\u2B24'}</Text>
        <Text style={Style.Text}>A resource center stocked with
          textbooks, reference materials, and
          online resources</Text>
      </View>




    </View>
  )
}

const Style = StyleSheet.create({
  Text: {
    fontSize: 15
  }
})