import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { Gstyles } from "../share/Gstyle";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile({navigation}){

    const logout = async () =>{
        try {
            await AsyncStorage.removeItem('userId')
            navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <View style={Gstyles.HomeContainer}>
            <View style={Gstyles.ProfileContainer}>

                <Text style={Gstyles.profiletitle}>
                    Profile
                </Text>

                <View style={Gstyles.avator}>
                    <Text style={{textAlign: "center"}}>MG</Text>
                </View>

                <Text style={Gstyles.profileText}>
                    Name: <Text style={Gstyles.userData}>MGMG</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    User Id: <Text style={Gstyles.userData}>23243423423</Text> 
                </Text>

                <Text style={Gstyles.profileText}>
                    Phone No: <Text style={Gstyles.userData}>09753324112</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    Address: <Text style={Gstyles.userData}>MKN QUA</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    Home NO: <Text style={Gstyles.userData}>399</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    Street: <Text style={Gstyles.userData}>blah blah</Text>
                </Text>

                <CustomButton title="Setting" color="#FF5621" icon={<AntDesign name="setting" size={24} color="black" />}/>
                <CustomButton title="Logout" color="red" icon={<AntDesign name="logout" size={24} color="black"/>}
                press={ logout }
                />
            </View>
            
        </View>
    )
}