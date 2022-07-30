import React, {useContext, useState} from 'react'
import {View, Text, TextInput, ScrollView, ImageBackground} from 'react-native'
import CustomButton from '../components/CustomButton'
import { Gstyles } from '../share/Gstyle'
import { AuthContext } from '../contexts/AuthContext'

export default function Signup({navigation}) {

  const { Register } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [ phoneno, setPhoneno] = useState('')
  const [ password, setPassword] = useState('')
  const [ address, setAddress] = useState('')
  const [ homeno, setHomeno] = useState('')
  const [street, setStreet] = useState('')

  const data = {name: name, phoneno: phoneno, password: password, address: address, orderConformed: [], homeno: homeno, street: street};

  return (
    <ImageBackground
    resizeMode='cover'
    source={ require('../assets/images/bakey.jpg')}
    style={{flex: 1}}
    >
      
    <ScrollView>
    <View
    style={Gstyles.loginCon}
    >
        <Text style={{textAlign: 'center', fontFamily: 'poppins-b', fontSize: 23,marginBottom: 20, color: "#102A68"}}>Signup</Text>

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter Name"
        placeholderTextColor="#fff"
        value={name}
        onChangeText = {(value) => setName(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter phone number"
        placeholderTextColor="#fff"
        keyboardType="number-pad"
        value={phoneno}
        onChangeText = {(value) => setPhoneno(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter password...(Longer than 3 character)"
        placeholderTextColor="#fff"
        autoComplete="password"
        value={password}
        onChangeText = {(value) => setPassword(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter Address..."
        placeholderTextColor="#fff"
        autoComplete="password"
        value={address}
        onChangeText = {(value) => setAddress(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter HomeNo..."
        placeholderTextColor="#fff"
        value={homeno}
        onChangeText = {(value) => setHomeno(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter Street name or no..."
        placeholderTextColor="#fff"
        value={street}
        onChangeText = {(value) => setStreet(value)}
        />

        <CustomButton title="Sign Up" color="#FE9D34" navigation={navigation}
        press = {() => Register(data)}
        />

        <CustomButton title="Have already account?" color="#FF5621" navigation={navigation}
        press = {() => navigation.navigate('Login')}
        />
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
