import React,{ useContext, useEffect, useState} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import CustomButton from "../components/CustomButton";
import { Gstyles } from "../share/Gstyle";
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../contexts/AuthContext";
import Usefetch from "../components/Usefetch";
import { Button } from "react-native";


export default function Profile({navigation}){

    const { Logout, UserId} = useContext(AuthContext);
    const { data, padding } = Usefetch("https://api-aplus.onrender.com/api/users/"+UserId);

    return(
        <View style={Gstyles.HomeContainer}>
                <View style={Gstyles.ProfileContainer}>
                    <Button title="Logout"
                    onPress={ () => Logout() }
                    />
                    <View>
                    <Text style={Gstyles.profiletitle}>
                    Profile
                    </Text>

                    <View style={Gstyles.avator}>
                        { data && <Text style={{textAlign: "center", fontFamily: 'poppins-b', textTransform: 'uppercase', fontSize: 35}}>{data.name[0]}</Text>}
                    </View>

                    <Text style={Gstyles.profileText}>
                        Name: {data && <Text style={Gstyles.userData}>{data.name}</Text>}
                    </Text>

                    <Text style={Gstyles.profileText}>
                        User Id: {data && <Text style={[Gstyles.userData, {fontSize: 18}]}>{data._id}</Text>} 
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Phone No: {data && <Text style={Gstyles.userData}>{data.phoneno}</Text>}
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Address: {data && <Text style={Gstyles.userData}>{data.quarter}</Text>}
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Home NO: {data && <Text style={Gstyles.userData}>{data.homeno}</Text>}
                    </Text>

                    <Text style={Gstyles.profileText}>
                        Street: {data && <Text style={Gstyles.userData}>{data.street}</Text>}
                    </Text>
                    </View>

                { data && <CustomButton title="Setting" color="#FF5621" icon={<AntDesign name="setting" size={24} color="black"/>}
                    press = {() =>navigation.navigate("Setting",{profileData: data})}
                />}
                <CustomButton title="Logout" color="red" icon={<AntDesign name="logout" size={24} color="black"/>}
                press={ () => Logout() }
                marginTop={10}
                />
            </View>
            { padding && <ActivityIndicator size="large" color="#FE9D34"/> }
        </View>
    )
}