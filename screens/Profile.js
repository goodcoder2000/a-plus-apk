import React,{ useContext, useEffect, useState} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import CustomButton from "../components/CustomButton";
import { Gstyles } from "../share/Gstyle";
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../contexts/AuthContext";
import Usefetch from "../components/Usefetch";


export default function Profile({navigation}){

    const { Logout, userProfileData } = useContext(AuthContext);
    const { data, padding } = Usefetch("https://api-aplus.onrender.com/api/users/"+userProfileData);

    let QetoM;
    const quarterdataCheck = () =>{
        switch(data.quarterForServer){
            case "kachinsu":
                QetoM="ကချင်စု"
            break;

            case "ktp":
                QetoM="ကျွန်းပင်သာ"
            break;

            case "ayesaythi":
                QetoM="အေးစေတီ"
            break;

            case "shwenyoungpin":
                QetoM="ရွှေညောင်ပင်"
            break;

            case "ranpu":
                QetoM="ရမ်ပူ"
            break;

            case "shansutaung":
                QetoM="ရှမ်းစုတောင်"
            break;

            case "shansunorth":
                QetoM="ရှမ်းစုမြောက်"
            break;

            case "yangyiaung":
                QetoM="ရန်ကြီးအောင်"
            break;

            case "linyaungchi":
                QetoM="လင်းရောင်ခြည်"
            break;

            case "dugahtaung":
                QetoM="ဒူကထောင်"
            break;

            case "ayeyar":
                QetoM="ဧရာ"
            break;

            case "thithar":
                QetoM="သီတာ"
            break;

            case "sitharpu":
                QetoM="စီသာပူ"
            break;

            case "thatkone":
                QetoM="တပ်ကုန်း"
            break;

            case "myemyit":
                QetoM="မြေမြင့်"
            break;

            case "yuzana":
                QetoM="ယုဇန"
            break;

            case "khymarthiri":
                QetoM="ခေမာသီရိ"
            break;

            case "aungnan":
                QetoM="အောင်နန်း"
            break;

            case "myothit":
                QetoM="မြို့သစ်"
            break;

            case "myothitgyi":
                QetoM="မြို့သစ်ကြီး"
            break;

            case "minyat":
                QetoM="မင်းရပ်"
            break;

            default:
                console.log("No Quarter")
        }
    }
    { data && quarterdataCheck()}

    return(
        <View style={Gstyles.HomeContainer}>
            {
                data && 
                <View style={Gstyles.ProfileContainer}>
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
                    Address: <Text style={Gstyles.userData}>{QetoM}</Text>
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
            { padding && <ActivityIndicator size="large" color="#FE9D34"/> }
        </View>
    )
}