import React, {useState} from "react";
import { View, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { Gstyles } from "../share/Gstyle";
import CartItem from "../components/CartItem";

export default function Cart(){
    
    return(
        <View style={Gstyles.HomeContainer}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </ScrollView>

            <View style={Gstyles.OrderContainer}>

            </View>
        </View>
    )
}