import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import EachShop from '../components/EachShop';
import { Gstyles } from '../share/Gstyle';

export default function ShopList({route, navigation}) {

  const {category} = route.params;

  const [data, setData] = useState(null);
  const [ padding, setPadding] = useState(true)

  const ShopListApiCall = (category) =>{
    useEffect(() =>{
      const controller = new AbortController();
      const signal = controller.signal;

      fetch(`https://api-aplus.onrender.com/api/shoplists/${category}`,{
        signal: signal
      })
    .then((res) =>{
      return res.json()
    })

    .then(data => {
      setData(data)
      setPadding(false)
    })
    .catch(err => console.log(err))

    return () => controller.abort();
    },[])
  }
  ShopListApiCall(category)

  return (
    <View style={Gstyles.shopListContainer}>
        <Text style={Gstyles.shopHeader}>
            {category} ရရှိနိုင်သော ဆိုင်များ
        </Text>
            {data && <Text>{data.length}ဆိုင်</Text>}

            <ScrollView
            style={Gstyles.shoplistScrollCon}
            showsVerticalScrollIndicator={false}
            >

                { data?.map((item, index) =>{  
                  return <EachShop key={index} SName={item.SName} category={item.category} SImg={item.SImg} deliPrice="800" navigation={navigation} item={item}/>
                })}

                {/* loading */}
                { padding && <ActivityIndicator size="large" color="#FE9D34"/> }

            </ScrollView>
    </View>
  )
}