import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert, Button, PermissionsAndroid, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const OpneUrl = async (url) => {


  await Linking.openURL(url);


}
const colorScheme = Appearance.getColorScheme();



export default function NotesComponet({ Chapter, Url }) {
  const [Background, setBackGround] = useState('')
  const CheckTheme = () => {
    if (colorScheme === 'dark') {
      setBackGround("#404258")
    }
    
  }
  useEffect(() => {
    CheckTheme()
  }, [])
  return (
    <View style={[styles.item, { backgroundColor: Background }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{Chapter}</Text>
        <TouchableOpacity
          onPress={() => {
            OpneUrl(Url)
          }}

        >

          <AntDesign name='pdffile1' size={20} color='#D988B9' />
        </TouchableOpacity>

      </View >

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1, borderRadius: 12,
    margin: 6,


  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"

  },
  title: {
    fontSize: 15,
  },
});