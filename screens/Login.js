import React, { useState, useEffect } from 'react'
import {View, Text, TextInput, Alert} from 'react-native'
import CustomButton from '../components/CustomButton'
import Usefetch from '../components/Usefetch'
import { Gstyles } from '../share/Gstyle'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
    const [ phoneNo, setPhoneno] = useState(null)
    const [ password, setPassword] = useState(null)
    const { data, padding} = Usefetch('https://api-aplus.onrender.com/api/users');

    useEffect(() =>{
      haveBeenLogin()
    },[])

    //have been login check

    const haveBeenLogin = async () =>{
      try {
        await AsyncStorage.getItem('userId')
        .then(value =>{
          if(value !== null){
            navigation.navigate('HomeScreen')
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

    // new login

    const loginCheck = async () =>{
      let result = data.find((user) => user.phoneno === phoneNo && user.password === password)
      if(!result){
        Alert.alert('Warning!','Check Mail and Password')
      } else {
        try {
          await AsyncStorage.setItem('userId', result._id)
          navigation.navigate('HomeScreen')
        } catch (error) {
          console.log(error)
        }
      }
    }

  return (
    <View
    style={Gstyles.loginCon}
    >
        {data && 
        <View>
        <Text style={{textAlign: 'center', fontFamily: 'poppins-b', fontSize: 28,marginBottom: 20, color: "#102A68"}}>Login</Text>

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter phone number"
        keyboardType="number-pad"
        onChangeText={ (value) => setPhoneno(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter password..."
        autoComplete="password"
        onChangeText={ (value) => setPassword(value) }
        />

        <CustomButton title="Login" color="#FE9D34" 
        press={ loginCheck }
        />

        <CustomButton title="Create account?" color="#FF5621" navigation={navigation}
        press = {() => navigation.navigate('Signup')}
        />
        </View>
        }
    </View>
  )
}
