import React, { useState, useEffect, useContext } from 'react'
import {View, Text, TextInput, Alert, ImageBackground} from 'react-native'
import CustomButton from '../components/CustomButton'
import { Gstyles } from '../share/Gstyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../contexts/AuthContext'

export default function Login({navigation}) {

    const { Login } = useContext(AuthContext);

    const [ phoneno, setPhoneno] = useState('')
    const [ password, setPassword] = useState('')

    const data = {phoneno: phoneno, password: password}

  return (
    <ImageBackground
    resizeMode='cover'
    source={ require('../assets/images/bakey.jpg')}
    style={{flex: 1}}
    >
    <View
    style={Gstyles.loginCon}
    >
 
        <View>
        <Text style={{textAlign: 'center', fontFamily: 'poppins-b', fontSize: 28,marginBottom: 20, color: "#102A68"}}>Login</Text>

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter phone number"
        placeholderTextColor="#fff"
        keyboardType="number-pad"
        value={phoneno}
        onChangeText={ (value) => setPhoneno(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter password..."
        placeholderTextColor="#fff"
        autoComplete="password"
        value={password}
        onChangeText={ (value) => setPassword(value) }
        />

        <CustomButton title="Login" color="#FE9D34" 
        press={ () => Login(data) }
        />

        <CustomButton title="Create account?" color="#FF5621" navigation={navigation}
        press = {() => navigation.navigate('Signup')}
        marginTop={10}
        />
        </View>
    </View>
        </ImageBackground>
  )
}