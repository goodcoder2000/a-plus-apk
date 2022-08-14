import React,{ useContext} from 'react'
import { View, Text, ScrollView} from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import Usefetch from '../components/Usefetch'
import EachOrdered from '../components/EachOrdered'
import { Gstyles } from '../share/Gstyle'

export default function OrderSuccessitem() {

  const {UserId} = useContext(AuthContext)

  const { data, padding} = Usefetch("https://api-aplus.onrender.com/api/users/"+ UserId)


  return (
    <View
    style={Gstyles.OrderSuccessitem}
    >
        <Text>Ordered Products</Text>
        {data && console.log("user ordered data", data.orderConformed)}
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          {data && data.orderConformed.map((item, index) => <EachOrdered key={index} item={item} />).reverse() }

        </ScrollView>
        {console.log("user id is", UserId, "data", data)}
  
    </View>
  )
}
