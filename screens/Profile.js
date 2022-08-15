import React,{ useContext, useEffect, useState} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import CustomButton from "../components/CustomButton";
import { Gstyles } from "../share/Gstyle";
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../contexts/AuthContext";



export default function Profile({navigation}){

    const { Logout, userData} = useContext(AuthContext);

    return(
        <View style={Gstyles.HomeContainer}>
                <View style={Gstyles.ProfileContainer}>
                    <View>
                    <Text style={Gstyles.profiletitle}>
                    Profile
                    </Text>

                    <View style={Gstyles.avator}>
                        <Text style={{textAlign: "center", fontFamily: 'poppins-b', textTransform: 'uppercase', fontSize: 35}}>{userData.name[0]}</Text>
                    </View>

                    <Text style={Gstyles.profileText}>
                        Name: <Text style={Gstyles.userData}>{userData.name}</Text>
                    </Text>

                    <Text style={Gstyles.profileText}>
                        User Id: <Text style={[Gstyles.userData, {fontSize: 18}]}>{userData._id}</Text>
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Phone No:<Text style={Gstyles.userData}>{userData.phoneno}</Text>
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Address: <Text style={Gstyles.userData}>{userData.quarter}</Text>
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Home NO:<Text style={Gstyles.userData}>{userData.homeno}</Text>
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Street:<Text style={Gstyles.userData}>{userData.street}</Text>
                    </Text>
                    </View>

                <CustomButton title="Setting" color="#FF5621" icon={<AntDesign name="setting" size={24} color="black"/>}
                    press = {() =>navigation.navigate("Setting",{data: userData})}
                />
                <CustomButton title="Logout" color="red" icon={<AntDesign name="logout" size={24} color="black"/>}
                press={ () => Logout() }
                marginTop={10}
                />
            </View>
             {/* <ActivityIndicator size="large" color="#FE9D34"/>  */}
        </View>
    )
}