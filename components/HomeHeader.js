import React from "react";
import { View, Text } from "react-native";
import { Gstyles } from "../share/Gstyle";

export default function HomeHeader(){
    return(
        <View>
            <Text style={Gstyles.HomeHeaderText}>
            <Text style={Gstyles.firstText}>APlus</Text>
            <Text style={Gstyles.secondText}> Food</Text>
            </Text>
        </View>
    )
}