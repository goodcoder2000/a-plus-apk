import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

export default function EachMenu({fName, img, note, price, navigation, shopData}) {
  return (
    <TouchableOpacity 
     onPress={ () => {
      let timeChecking = moment().format('Hmm')

      console.log(timeChecking)
      if(!timeChecking >= 1715){
        Alert.alert("APlUS FOOD Say!!!","၅နာရီ ၁၅မိနစ်ထိသာဆိုင်ဖွင့်သည်။ နောက်နေ့မှမှာပါ။",[
          {text: "သိပြီ", onPress: () => null}
        ])
      } else {
        navigation.navigate('FoodDetails',{fName: fName, img: img, note: note, price: price, shopData: shopData})
      }
     }}
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
