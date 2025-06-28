import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Realm from 'realm';

const { height, width } = Dimensions.get('screen');

export default function SchoolSplash() {
    const [ShowButton, setShowButton] = useState(false);
    const Navigation = useNavigation();
    const animationRef = useRef(LottieView);

    const Nevigation = useNavigation();

    let getDoubt = async () => {
        const app = new Realm.App({ id: 'application-0-ovhph' });
        const credentials = Realm.Credentials.anonymous();
        const Login = await AsyncStorage.getItem('LOGIN')
        try {
            if (Login === "true") {
                const Class = await AsyncStorage.getItem('CLASS')
                const user = await app.logIn(credentials);
                const Doubt = await user.functions.RedoxNotice(Class);
                const ImageSOW = await user.functions.RedoxStudentofWeek();
                await AsyncStorage.setItem('NOTICE', JSON.stringify(Doubt));
                await AsyncStorage.setItem('SOW', JSON.stringify(ImageSOW));

            }

            // CheckLogin()
        } catch (err) {
            console.error("Failed to log in", err);
        }
    };


    const CheckLogin = async () => {




        Navigation.navigate('Home');

    }

    useEffect(() => {
        animationRef.current?.play(0, 30);

        // getDoubt();
        setTimeout(() => {
            CheckLogin();
        }, 3000);
    }, []);
    return (

        <View>
            <LottieView source={require("../Animation/SchoolIntroSplash.json")}
                ref={animationRef}
                autoPlay={false}
                loop={false}
                speed={0.5}
                progress={1}
                style={{ height: height, width: width }}
                onAnimationFinish={() => { getDoubt() }}
            />


        </View>
    )

}
