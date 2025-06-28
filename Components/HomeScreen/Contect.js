import { View, Text, Appearance, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState, } from 'react';
import Icon from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
export default function Contect() {

    return (
        <View style={{ margin: 20, borderTopWidth: 1, borderRadius: 20, marginBottom: 50, rowGap: 10 }} >
            <Text style={{ fontSize: 20, textAlign: "center" }}>Contect</Text>
            <View>
                <TouchableOpacity style={{ flexDirection: "row", gap: 5, }}
                    onPress={() => {
                        Linking.openURL(`tel:9170824737`)
                    }}
                >

                    <Icon name='phone-call' size={20} />
                    <Text > +91 9170824737</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{ flexDirection: "row", gap: 5 }}
                    onPress={() => {
                        Linking.openURL('https://www.instagram.com/ankit_sir_chemistry/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw==')
                    }} >

                    <Icon name='instagram' size={20} />
                    <Text >ankit_sir_chemistry</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{ flexDirection: "row", gap: 5 }} >

                    <Entypo name='address' size={20} />
                    <Text >Shukla Properties , Hanumant Puram 2 , Gaurbheet Chauraha , Faizullaganj , Lucknow</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}