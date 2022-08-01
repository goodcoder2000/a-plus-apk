import React, {useContext} from "react";
import { View, ScrollView, Text} from "react-native";
import { Gstyles } from "../share/Gstyle";
import CartItem from "../components/CartItem";
import { AuthContext } from "../contexts/AuthContext";
import CustomButton from "../components/CustomButton";



export default function Cart(){
    const { cartData, orderData, OrderClick} = useContext(AuthContext);

    let finalSumResult = orderData.map((item) => item.count*item.price);


    return(
        <View style={Gstyles.HomeContainer}>
           

                <View
                style={{flex: 1}}
                >

                <ScrollView
                showsVerticalScrollIndicator={false}
                >
                    { cartData && cartData.map((item, index) => <CartItem key={index} item={item}/>)}
                </ScrollView>

                    <View style={Gstyles.OrderContainer}>
                        <Text style={Gstyles.totalText}>Total Price: 
                            <Text style={{color: "#102A68"}}> {finalSumResult.reduce((a,b) => a+b,0)} ကျပ်</Text>
                        </Text>
                        <CustomButton title="Order Now" color="red"
                        press={ () => OrderClick()}
                        />
                    </View>
                </View>


        </View>
    )
}