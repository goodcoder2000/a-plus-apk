import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { MaterialIcons } from '@expo/vector-icons';

export default function EachShop({SName, category, deliPrice, SImg, navigation, item}) {
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
        </View>
    </View>
    </TouchableOpacity>
  )
}
