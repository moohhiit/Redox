import { View, Text, Image } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
  {
    Chemistry: '65',
    Physics: '',
    Percentage: '96%(3rd Rank in Lko.)',
    image: require('../.../../../Assets/Wall2.jpg'),
    School: 'The Oaf Public Inter College',
    Name: "Sumant Kumar Maddheshiya"
  },
  {
    Chemistry: '85',
    Physics: '',
    Percentage: '89%',
    image: require('../.../../../Assets/Wall2.jpg'),
    School: 'The Oaf Public Inter College',
    Name: "Om Yadav"
  },
  {
    Chemistry: '96',
    Physics: '',
    Percentage: '87%',
    image: require('../.../../../Assets/Wall2.jpg'),
    School: 'The Oaf Public Inter College',
    Name: "Rudra Singh"
  }
];
const renderItem = ({ item }) => {
  return (
    <View style={{ borderRadius: 20, padding: 10, paddingTop: 20 }} >
      <View>
        <Image source={item.image} style={{ height: 160, borderRadius: 20, aspectRatio: 1.1, marginHorizontal: 5, alignSelf: "center" }} />
        <Text style={{ marginTop: 10, textAlign: "center", fontWeight: "bold", color: "#1AACAC" }} > {item.Name}</Text>
        <View style={{ justifyContent: "space-around", flexDirection: "row", margin: 10 }} >
        
          <Text>Percentage  : {item.Percentage}  </Text>
        </View>
        <Text style={{fontWeight:"bold" , fontSize:15}} >  School : {item.School}   </Text>
      </View>


    </View>
  );
}
export default function Archivement() {
  return (
    <View style={{ height: 370, borderTopWidth: 1, borderRadius: 30 }} >
      <Text style={{ textAlign: "center", fontSize: 20 }} >Last Year Toppers  2022-2023</Text>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight:'bold' }} >Class : 10</Text>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        showDoneButton={false}
        showNextButton={false}
        activeDotStyle={{ backgroundColor: "blue" }}
      />


    </View>
  )
}