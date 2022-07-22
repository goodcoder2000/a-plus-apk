import React,{useState} from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { AntDesign } from '@expo/vector-icons';

export default function PlusandMinus() {
    const [ count, setCount] = useState(1);
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
  return (
    
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
  )
}
