import React from 'react'
import { View, Text, TouchableHighlight} from 'react-native'
import { Gstyles } from '../share/Gstyle'


export default function CustomButton({title, color, navigation, press, icon, marginTop}) {
  return (
    <TouchableHighlight
    underlayColor="#fff"
    onPress={ press }
    >
        <View style={[Gstyles.CustomButton,Gstyles.box, {backgroundColor: color, marginTop: marginTop?marginTop: 0}]}>
            <Text style={Gstyles.CustomButtonTitle}>{title}</Text>
            {icon}
        </View>
    </TouchableHighlight>
  )
}
