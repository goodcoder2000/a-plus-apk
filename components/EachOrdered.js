import React from 'react'
import { View, Text, Image} from 'react-native'
import { Gstyles } from '../share/Gstyle'

export default function EachOrdered({item}) {
  return (
    <View style={[Gstyles.EachOrdered, Gstyles.box]}>
        <View style={Gstyles.EachOrderedImage}>
            <Image style={{width: "100%", height: "100%"}} source={{uri: item.img}}/>
        </View>

        <View>
            {
                item.delivered? 
                <Text style={[Gstyles.textStyle, {color: "green"}]}>ပို့ဆောင်ပြီး</Text>:
                <Text style={[Gstyles.textStyle, {color: "red"}]}>ပို့ဆောင်နေသည်။</Text>
            }
        </View>

        <View>
            <Text>{item.fName}</Text>
            <Text>{item.day}</Text>
            <Text>{item.time[0]}{item.time[1]}နာရီ {item.time[2]}{item.time[3]} မိနစ်</Text>
        </View>
    </View>
  )
}
