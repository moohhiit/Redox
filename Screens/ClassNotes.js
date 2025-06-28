import { View, Text, FlatList, SectionList, StyleSheet, Button, TouchableOpacity, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NotesComponet from '../Components/NotesComponet/NotesComponet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
const DATA = [
  {
    title: 'Chemistry',
    data: [
      {

        Chapter: "ElectroStatric",
        Url: "https://drive.google.com/file/d/14Bx12w-n-onFlc4zqaCg-DWSZhbeX4i7/view?usp=sharing"
      },
      {

        Chapter: "Current",
        Url: ""
      },
      {

        Chapter: "Magnetic Current",
        Url: ""
      },
      {

        Chapter: "EMI",
        Url: ""
      },
      {

        Chapter: "Optics",
        Url: ""
      },
      {

        Chapter: "Nucles",
        Url: ""
      },


    ],
  },
  {
    title: 'Physics',
    data: [
      {

        Chapter: "ElectroStatric",
        Url: ""
      },
      {

        Chapter: "Current",
        Url: ""
      },
      {

        Chapter: "Magnetic Current",
        Url: ""
      },
      {

        Chapter: "EMI",
        Url: ""
      },
      {

        Chapter: "Optics",
        Url: ""
      },
      {

        Chapter: "Nucles",
        Url: ""
      },


    ],
  },
  {
    title: 'Biology',
    data: [
      {

        Chapter: "ElectroStatric",
        Url: ""
      },
      {

        Chapter: "Current",
        Url: ""
      },
      {

        Chapter: "Magnetic Current",
        Url: ""
      },
      {

        Chapter: "EMI",
        Url: ""
      },
      {

        Chapter: "Optics",
        Url: ""
      },
      {

        Chapter: "Nucles",
        Url: ""
      },


    ],
  },

];
const colorScheme = Appearance.getColorScheme();
export default function QuetionPaper() {
  const [Background, setBackGround] = useState('')
  const [Login, setLogin] = useState('')
  const Neviagtion = useNavigation()
  const CheckTheme = () => {
    if (colorScheme === 'dark') {
      setBackGround("#404258")
    }
  }
  const Checklogin = async () => {
    const FLogin = await AsyncStorage.getItem('LOGIN')
    setLogin(FLogin)
  }

  useEffect(() => {
    CheckTheme()
    Checklogin()
  })
  return (


    <View style={{ backgroundColor: Background }}>
      {
        Login === 'true' ? <SectionList
          sections={DATA}
          renderItem={(item) => {
            return (
              <NotesComponet Chapter={item.item.Chapter} Url={item.item.Url} />
            )
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> :
          <> 
            <LottieView source={require("../Animation/Login.json")}
            autoPlay
            loop={true}
            style={{ height: 640, width: 340, marginLeft: 50 , padding:50}}

          />
          <TouchableOpacity
          onPress={()=>{
           Neviagtion.navigate('LoginPage')
          }}
          
          >
          <View style={{padding:20 , backgroundColor:'blue', width:100 ,borderRadius:20 , alignSelf:"center" , marginBottom:50 }}>
            <Text style={{textAlign:"center" , fontWeight:"bold" }}>
              Log-in
            </Text>
            </View>

          </TouchableOpacity>
          </>
      }




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