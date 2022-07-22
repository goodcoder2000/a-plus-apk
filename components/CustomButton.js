import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Gstyles } from '../share/Gstyle'


export default function CustomButton({title, color, navigation, press, icon}) {
  return (
    <TouchableOpacity
    onPress={ press }
    >
        <View style={[Gstyles.CustomButton,Gstyles.box, {backgroundColor: color}]}>
            <Text style={Gstyles.CustomButtonTitle}>{title}</Text>
            {icon}
        </View>
    </TouchableOpacity>
  )
}
