import React from 'react'
import {View, Text, TextInput} from 'react-native'
import CustomButton from '../components/CustomButton'
import { Gstyles } from '../share/Gstyle'

export default function Signup({navigation}) {
  return (
    <View
    style={Gstyles.loginCon}
    >
        <Text style={{textAlign: 'center', fontFamily: 'poppins-b', fontSize: 23,marginBottom: 20, color: "#102A68"}}>Signup</Text>

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter phone number"
        keyboardType="number-pad"
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter password..."
        autoComplete="password"
        />

        <CustomButton title="Sign Up" color="#FE9D34" navigation={navigation}/>
        <CustomButton title="Have already account?" color="#FF5621" navigation={navigation}
        press = {() => navigation.navigate('Login')}
        />
    </View>
  )
}
