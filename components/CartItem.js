import React, {useState, useContext} from 'react'
import {Gstyles}  from '../share/Gstyle'
import Checkbox from "expo-checkbox";
import { View, Text, Image, TouchableOpacity} from "react-native";
import PlusandMinus from './PlusandMinus';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../contexts/AuthContext';

export default function CartItem({item}) {
    const [ count, setCount] = useState(item.count);
    const [isChecked, setChecked] = useState(false);
    const {CartItemRemove, add, remove} = useContext(AuthContext);
    const [ cannotTouch, setCannotTouch] = useState(false)
    

    const handleChange = () =>{
        if(!isChecked){
            setChecked(true)
            setCannotTouch(true)
            add({_id: item._id,fName: item.fName, price: item.price, count: count, img: item.img})
        } else {
            remove(item._id, item.fName)
            setCannotTouch(false)
            setChecked(false)
        }
    }

  return (
    <View style={Gstyles.CartContainer}>
                <View style={[Gstyles.EachCartItem, Gstyles.box]}>
                    
                    <View style={Gstyles.checkboxCon}>
                        <Checkbox
                        value={isChecked}
                        onValueChange={handleChange}
                        color={isChecked ? '#FE9D34' : undefined}
                        />
                        <TouchableOpacity
                        onPress={() =>CartItemRemove(item._id, item.fName)}
                        >
                            <MaterialIcons name="delete-forever" size={35} color="red" style={{marginTop: 25}} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={Gstyles.CartItemLeft}>
                        <Text style={Gstyles.CartItemText}>{item.fName}</Text>
                        <Text>{item.price}</Text>
                        <PlusandMinus count={count} setCount={setCount} cannotTouch={cannotTouch}/>
                    </View>

                    <View style={Gstyles.CartItemRight}>
                        <Image style={{width: '100%', height: '100%'}} source={{uri: item.img}}/>
                    </View>
                    
                </View>
            </View>
  )
}
