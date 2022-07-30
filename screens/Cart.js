import React, {useContext, useEffect, useState} from "react";
import { View, ScrollView} from "react-native";
import { Gstyles } from "../share/Gstyle";
import CartItem from "../components/CartItem";
import { AuthContext } from "../contexts/AuthContext";


export default function Cart(){
    const {userProfileData, cartData} = useContext(AuthContext);
    const [ ispadding, setPadding] = useState(true)

    return(
        <View style={Gstyles.HomeContainer}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                { cartData && cartData.map((item, index) => <CartItem key={index} item={item}/>)}
            </ScrollView>

            <View style={Gstyles.OrderContainer}>

            </View>
        </View>
    )
}