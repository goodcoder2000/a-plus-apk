import React,{ useContext, useEffect} from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { Gstyles } from "../share/Gstyle";
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../contexts/AuthContext";
import Usefetch from "../components/Usefetch";


export default function Profile({navigation}){

    const { Logout, userProfileData } = useContext(AuthContext)

    const { data } = Usefetch("https://api-aplus.onrender.com/api/users/"+userProfileData)

    return(
        <View style={Gstyles.HomeContainer}>
            {
                data && 
                <View style={Gstyles.ProfileContainer}>
                { console.log(data)}
                <Text style={Gstyles.profiletitle}>
                    Profile
                </Text>

                <View style={Gstyles.avator}>
                    <Text style={{textAlign: "center", fontFamily: 'poppins-b', textTransform: 'uppercase', fontSize: 35}}>{data.name[0]}</Text>
                </View>

                <Text style={Gstyles.profileText}>
                    Name: <Text style={Gstyles.userData}>{data.name}</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    User Id: <Text style={[Gstyles.userData, {fontSize: 18}]}>{data._id}</Text> 
                </Text>

                <Text style={Gstyles.profileText}>
                    Phone No: <Text style={Gstyles.userData}>{data.phoneno}</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    Address: <Text style={Gstyles.userData}>{data.address}</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    Home NO: <Text style={Gstyles.userData}>{data.homeno}</Text>
                </Text>

                <Text style={Gstyles.profileText}>
                    Street: <Text style={Gstyles.userData}>{data.street}</Text>
                </Text>

                <CustomButton title="Setting" color="#FF5621" icon={<AntDesign name="setting" size={24} color="black" />}/>
                <CustomButton title="Logout" color="red" icon={<AntDesign name="logout" size={24} color="black"/>}
                press={ () => Logout() }
                />
            </View>
            }
        </View>
    )
}