import React, {useState} from 'react'
import {Gstyles}  from '../share/Gstyle'
import Checkbox from "expo-checkbox";
import { View, Text, Image} from "react-native";
import PlusandMinus from './PlusandMinus';

export default function CartItem() {
    const [isChecked, setChecked] = useState(false);
  return (
    <View style={Gstyles.CartContainer}>
                <View style={[Gstyles.EachCartItem, Gstyles.box]}>
                    
                    <View style={Gstyles.checkboxCon}>
                        <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#FE9D34' : undefined}
                        />
                    </View>
                    
                    <View style={Gstyles.CartItemLeft}>
                        <Text style={Gstyles.CartItemText}>Balen Baltica</Text>
                        <Text>20000 </Text>
                        <PlusandMinus/>
                    </View>

                    <View style={Gstyles.CartItemRight}>
                        <Image style={{width: '100%', height: '100%'}} source={require('../assets/images/bakey.jpg')}/>
                    </View>
                </View>
            </View>
  )
}
