import React, {useContext} from "react";
import { View, ScrollView, Text, Button} from "react-native";
import { Gstyles } from "../share/Gstyle";
import CartItem from "../components/CartItem";
import { AuthContext } from "../contexts/AuthContext";
import CustomButton from "../components/CustomButton";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Cart({navigation}){
    const { cartData, orderData, OrderClick, userProfileData, OrderComformed} = useContext(AuthContext);
    let finalSumResult = orderData.map((item) => item.count*item.price);


    return(
        <View style={Gstyles.HomeContainer}>
                <View
                style={{flex: 1}}
                >
                    {/* for no cart item checking */}

                    {
                        cartData.length === 0?
                        <View style={{marginTop: 50}}>
                            <Text style={{color: "#333", textAlign: 'center',}}>ခြင်းထဲပစ္စည်းမရှိပါ!</Text>
                        </View> :

                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        >
                            { cartData && cartData.map((item, index) => <CartItem key={index} item={item}/>)}
                        </ScrollView>
                    }

                    

                    

               

                        <View style={Gstyles.OrderContainer}>

                        {/* for order button checking */}
                        {
                            cartData.length === 0?
                            null:
                                <>
                                <View>
                                    <Text style={Gstyles.totalText}>Total Price:</Text>
                                    <Text style={[Gstyles.totalText, {color: "#102A68"}]}> {finalSumResult.reduce((a,b) => a+b,0)} ကျပ်</Text>
                                </View>

                                <CustomButton title="Order Now" color="red"
                                press={ () => OrderComformed(orderData)}
                                icon = {<AntDesign name="check" size={24} color="#fff" />}
                                />
                                </>
                        }

                        <CustomButton title="ဝယ်ယူထားသော" color="#FE9D34"
                        press={() => navigation.navigate("OrderSuccessitem")}
                        icon ={<MaterialCommunityIcons name="human-dolly" size={24} color="#fff" />}
                        />
                        </View>
                </View>


        </View>
    )
}