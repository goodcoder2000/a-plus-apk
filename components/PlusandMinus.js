import React,{useState} from 'react'
import { View, Text, TouchableOpacity, Alert} from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { AntDesign } from '@expo/vector-icons';

export default function PlusandMinus({count, setCount, cannotTouch}) {
    
    const addCount = () =>{
        setCount(count+1)
    }
    
    const removeCount = () =>{
        if(count === 1){
            setCount(1)
            return
        }
        setCount(count-1)
    }

    // cannot touch alert

    const cannotTouchBtn = (text) =>{
        Alert.alert("Warning!!", text,[{text: "သိပြီ", onPress: () => null}])
    }
  return (
    <View>
        {
            cannotTouch?
             <View style={[Gstyles.addorRemove, Gstyles.marginFor]}>
             <TouchableOpacity
             onPress={ () => cannotTouchBtn("အမှန်ခြစ်ဖြုတ်ပြီးမှလျှော့ပါ") }
             >
                    <AntDesign name="minuscircle" size={25} color="#FE9D34" />
             </TouchableOpacity>

                    <Text style={Gstyles.count}>{count}</Text>

                
             <TouchableOpacity
             onPress={ () => cannotTouchBtn("အမှန်ခြစ်ဖြုတ်ပြီးမှတိုးပါ") }
             >
                    <AntDesign name="pluscircle" size={25} color="#FE9D34" />
             </TouchableOpacity>
            </View>:


            <View style={[Gstyles.addorRemove, Gstyles.marginFor]}>
            <TouchableOpacity
            onPress={ removeCount }
            >
                <AntDesign name="minuscircle" size={25} color="#FE9D34" />
            </TouchableOpacity>

            <Text style={Gstyles.count}>{count}</Text>

            <TouchableOpacity
            onPress={ addCount }
            >
                <AntDesign name="pluscircle" size={25} color="#FE9D34" />
            </TouchableOpacity>
            </View>
        }
    </View>
  )
}
