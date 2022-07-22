import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Gstyles } from "../share/Gstyle";

export default function FoodIcon({image, title, navigation, category}) {
  return (
    <TouchableOpacity
    onPress={ () => navigation.push('ShopList',{category: category}) }
    >
        <View style={Gstyles.ImageIcon}>
            <View style={[Gstyles.IconImageContainer, Gstyles.box]}>
             <Image style={Gstyles.Image} source={image}/>
            </View>
        
        <View style={Gstyles.IconTitleContainer}>
            <Text style={Gstyles.IconTitle}>
                {title}
            </Text>
        </View>
        </View>
    </TouchableOpacity>
  )
}
