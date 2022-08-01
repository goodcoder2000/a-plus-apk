import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Gstyles } from '../share/Gstyle'

export default function QuarterModal({item, setQuarterForClient, setQuarterModelShow, setQuarterForServer}) {
    return(
        <TouchableOpacity
        onPress={ () => {
            setQuarterForServer(item.value) // for server data
            setQuarterForClient(item.name) // for client interface
            setQuarterModelShow(false)
        }
        }
        >
              <View
              style={[Gstyles.EachQuarter, Gstyles.box]}
              >
                <AntDesign name="home" size={24} color="black" />
                <Text
                style={Gstyles.EachQuarterText}
                >{item.name}
                </Text>
              </View>
        </TouchableOpacity>
    )
}