import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { Gstyles } from '../share/Gstyle';
import EachMenu from './EachMenu';
import { Ionicons } from '@expo/vector-icons';

export default function InShop({route, navigation}) {
  const {shopData} = route.params;

  return (
    <View style={Gstyles.inshopContainer}>
        <View>
          <Image style={{width: '100%', height: 135}} source={{uri: shopData.SImg}}/>
        </View>

            <ScrollView
            showsVerticalScrollIndicator={false}
            style={Gstyles.Menucontainer}>
            <Text style={Gstyles.menuheader}>Menu</Text>
              {shopData.menu.map((item, index) =><EachMenu key={index} fName={item.fName} img={item.img} note={item.note} price={item.price} navigation={navigation} shopData={shopData}/>)}
            </ScrollView>            
            
            
        {console.log(shopData)}

          <View style={Gstyles.backIcon}>
              <Ionicons name="arrow-back-circle" size={44} color="#FE9D34"
              onPress={ () => navigation.goBack() }
              />
              <Text style={Gstyles.Inshoptitle}>{shopData.SName}</Text>
          </View>
    </View>
  )
}
