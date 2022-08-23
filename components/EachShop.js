import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { MaterialIcons } from '@expo/vector-icons';

export default function EachShop({SName, category, SImg, navigation, item, userQuarter}) {

    // const [ deliprice, setDeliprice] = useState('');

    let deliPrice;

    if(userQuarter === item.location){
        deliPrice = '800'
    } if(userQuarter === "အေးစေတီ" && item.location === "ရှမ်းစုတောင်" || userQuarter === "အေးစေတီ" && item.location === "ရှမ်းစုမြောက်" || userQuarter === "အေးစေတီ" && item.location === "မင်းရပ်"){
        deliPrice = '1000'
    }

  return (
    <TouchableOpacity 
    onPress={ () => navigation.navigate('InShop',{shopData: item}) }
    >
        <View style={[Gstyles.EachShopContainer,Gstyles.box]}>
        <View style={Gstyles.EachShopImageContainer}>
            <Image style={{width: "100%", height: "100%"}} source={{uri: SImg}}/>
        </View>

        <View style={Gstyles.EachShopTextCon}>
            <Text style={Gstyles.ESSName}>{SName}</Text>
            <Text>{category}</Text>

            <Text style={Gstyles.deliPrice}>
                <MaterialIcons name="delivery-dining" size={25} color="black" />
                {deliPrice}-MMK
            </Text>
            
            <Text style={Gstyles.deliPrice}>
                {item.location} - {userQuarter}
            </Text>
            {console.log("item data here", item.location)}
        </View>
    </View>
    </TouchableOpacity>
  )
}
