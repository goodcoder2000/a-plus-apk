import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { AntDesign } from '@expo/vector-icons';

export default function EachMenu({fName, img, note, price, navigation}) {
  return (
    <TouchableOpacity 
     onPress={ () => navigation.navigate('FoodDetails',{fName: fName, img: img, note: note, price: price})}
    >
        <View style={[Gstyles.EachMenu, Gstyles.box]}>
            <View>
                <Image style={{width: 130, height: 130}} source={{uri: img}}/>
            </View>
            <View style={Gstyles.MenuDetails}>
                <Text style={Gstyles.Menufname}>{fName}</Text>
                <Text style={Gstyles.MenuPrice}>Price {price} MMK</Text>
            </View>
            <AntDesign style={[Gstyles.addIcon, Gstyles.box]} name="pluscircle" size={35} color="#FE9D34" />
        </View>
    </TouchableOpacity>
  )
}
