import React from "react";
import { View, Text } from "react-native";
import { Gstyles } from "../share/Gstyle";
import FoodCategory from "../components/FoodCategory";
import ImageSlider from "../components/ImageSlider";

export default function Home({navigation}){
    return(
        <View style={Gstyles.HomeContainer}>
            <ImageSlider/>
            <FoodCategory navigation={navigation}/>
        </View>
    )
}