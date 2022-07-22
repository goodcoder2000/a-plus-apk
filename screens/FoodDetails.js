import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { FontAwesome } from '@expo/vector-icons';

export default function FoodDetails({route, navigation}) {
    const { fName, img, note, price} = route.params;
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
    <View style={Gstyles.FoodDetails}>
        <View style={Gstyles.detailsImage}>
            <Image style={{width: '100%', height: '100%'}} 
            source={{uri: img}}
            />
        </View>


        <Ionicons style={Gstyles.backIcon} name="arrow-back-circle" size={44} color="#FE9D34"
          onPress={ () => navigation.goBack() }
        />

        <View style={[Gstyles.addOrRemoveContainer,Gstyles.box]} >

            <View style={Gstyles.detailsUpper}>
                <View>
                    <Text style={Gstyles.DFName}>{fName}</Text>
                </View>

                <View style={Gstyles.addorRemove}>
                    <TouchableOpacity
                    onPress={ removeCount }
                    >
                        <AntDesign name="minuscircle" size={30} color="#FE9D34" />
                    </TouchableOpacity>

                    <Text style={Gstyles.count}>{count}</Text>

                    <TouchableOpacity
                    onPress={ addCount }
                    >
                        <AntDesign name="pluscircle" size={30} color="#FE9D34" />
                    </TouchableOpacity>
                </View>
            </View>

            <View
            style={Gstyles.noteContainer}
            >
                <Text>{note}</Text>
            </View>


            <View style={Gstyles.detailsLowercon}>
                <View>
                    <Text style={Gstyles.totalD}>Total Price</Text>
                    <Text style={Gstyles.detailPrice}>{price*count} ကျပ်</Text>
                </View>

                <CustomButton title="ခြင်းထဲထည့်ရန်" color="#FE9D34" icon={<FontAwesome name="cart-plus" size={24} color="black" />}/>
            </View>
        </View>
    </View>
  )
}
