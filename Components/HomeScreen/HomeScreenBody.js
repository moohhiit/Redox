import { View, Text, ScrollView, Image, Dimensions, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import Notes from './Notes&Questions';
import Archivement from './Archivement';
import Facilities from './Facilities';
import Contect from './Contect';
import Icom from "react-native-vector-icons/AntDesign"
import ToperClass12 from './ToperClass12';
import AsyncStorage from '@react-native-async-storage/async-storage';
const colorScheme = Appearance.getColorScheme();
// `data:${e.mime};base64,${e.base64}`

const slides = [
    {
        key: 'one',
        title: 'Title 1',
        text: 'Description.Say something cool',
        image: require("../../Assets/SOW.jpeg"),
        backgroundColor: '#59b2ab',
    },
   
   
];
  const mime = "image/jpeg";





const HIGHT = Dimensions.get('screen').height


export default function HomeScreenBody() {
    const [Background, setBackGround] = useState('')
    const [SOW, setSOW] = useState('')
    const CheckTheme = () => {
        if (colorScheme === 'dark') {
            setBackGround("#404258")
        }
    }
    const SOWFN = async()=>{
        const SOW = await AsyncStorage.getItem('SOW')
      let   data = JSON.parse(SOW)
        setSOW(data[0])
    
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{ borderRadius: 20, padding: 5  , alignItems:"center"}} >
                <Image source={{uri : `data:${SOW.base64};base64,${SOW.mime}` }} style={{ height: 300, borderRadius: 20, aspectRatio: 1.25, marginHorizontal: 5 }} />
                <Text style={{ fontWeight: 'bold', textAlign: "center", marginTop: 10 }}>
    
                    {item.text}
                </Text>
    
            </View>
        );
    }
    useEffect(() => {
        CheckTheme()
        SOWFN()
    },[])
    return (
        <View style={{ backgroundColor: Background }}>
            <ScrollView style={{ maxHeight: HIGHT - 120 }}>
                <View style={{ height: 350 }} >
                    <View style={{flexDirection:"row" , gap:10 ,alignItems:"center" , marginHorizontal:"10%"}}>
                    <Text style={{ textAlign: "center", fontSize: 30 }}>
                        Student of The Week

                    </Text>
                    <Icom name='Trophy' size={25}/>
                    </View>
                    <AppIntroSlider
                        data={slides}
                        renderItem={renderItem}
                        showDoneButton={false}
                        showNextButton={false}
                        activeDotStyle={{ backgroundColor: "white" }}
                    />
                </View>
                <Notes />
                <Archivement />
                <ToperClass12/>
                <Facilities />
                <Contect />
            </ScrollView>
        </View>
    )
}