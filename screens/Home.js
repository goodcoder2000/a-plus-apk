import React,{ useState, useEffect, useContext } from "react";
import { View} from "react-native";
import { Gstyles } from "../share/Gstyle";
import FoodCategory from "../components/FoodCategory";
import ImageSlider from "../components/ImageSlider";
import { AuthContext } from "../contexts/AuthContext";

export default function Home({navigation}){

    const {gettingUserData} = useContext(AuthContext)
    useEffect(() =>{
        gettingUserData()
    }, [])

    return(
        <View style={Gstyles.HomeContainer}>
            <ImageSlider/>
            <FoodCategory navigation={navigation}/>
        </View>
    )
}