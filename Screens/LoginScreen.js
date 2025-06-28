import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import auth from '@react-native-firebase/auth';

const height = Dimensions.get('screen').height;

export default function LoginScreen({ Data }) {

  const [Email, setEmail] = useState();
  const [Pass, setPass] = useState();
  const [Error, setError] = useState(false)
  const login = async () => {
    try {
      const isLogin = await auth().signInWithEmailAndPassword(Email, Pass)
      console.log(isLogin)
    } catch (error) {
      setError(true)
    }

  }






  const Neviagtion = useNavigation()





  useEffect(() => {


  }, []);

  return (
    <View style={Style.Background}>

      <LottieView source={require("../Animation/animation_lmhd5240.json")}
        autoPlay
        loop={true}
        style={{ height: 180, width: 180, alignSelf: "center" }}

      />
      <Text style={{ fontSize: 20, alignSelf: "center", marginTop: 50, marginBottom: 50 }} >
        Student Login..
      </Text>
      <TextInput placeholder='Enter Emial Id ..' style={{ borderRadius: 20, borderWidth: 1, padding: 15, margin: 10 }} onChangeText={(txt) => {
        setEmail(txt)
      }} />
      <TextInput placeholder='Enter Password ..' style={{ borderRadius: 20, borderWidth: 1, padding: 15, margin: 10 }} onChangeText={(txt) => {
        setPass(txt);

      }} />
{
  Error?  <Text style={{color:"red" , fontSize:15 , marginLeft:15}}>
  Please Check Your Detail... Something is Incorrect ..
</Text>:null
}
     
      <TouchableOpacity
        onPress={login}
      >
        <View style={{ height: 50, width: 100, backgroundColor: '#99fffc', borderRadius: 20, padding: 10, alignSelf: "center" }}>

          <Text style={{
            fontSize: 20, textAlign: 'center'
          }}>
            Login..
          </Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}
const Style = StyleSheet.create({
  Background: {
    height: height,
    padding: 10,
  }

});
