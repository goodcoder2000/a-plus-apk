import React from 'react';
import { View, Text, FlatList} from "react-native";
import { Gstyles } from "../share/Gstyle";
import FoodIcon from './FoodIcon';

function FoodCategory({navigation}) {
  return (
    <View style={Gstyles.FoodCategoryContainer}>
        <Text style={Gstyles.foodtext}>အစားအစာအမျိုးအစားများ</Text>


        <View>
          <View style={Gstyles.categoryBody}>
              <FoodIcon title="Bakey" image={ require('../assets/images/bakey.jpg')} navigation={navigation} category="bakey"/>
              <FoodIcon title="Drinks" image={ require('../assets/images/drink.jpg')} navigation={navigation} category="drink"/>
              <FoodIcon title="Noddle" image={ require('../assets/images/noddle.jpg')} navigation={navigation} category="noddle"/>
          </View>

          <View style={Gstyles.categoryBody}>

              <FoodIcon title="Chicken" image={ require('../assets/images/chicken.jpg')} navigation={navigation} category="chicken"/>
              <FoodIcon title="Papaya" image={ require('../assets/images/papaya.jpg')} navigation={navigation} category="atoke"/>
              <FoodIcon title="AKin" image={ require('../assets/images/akin.jpg')} navigation={navigation} category="akin"/>
          </View>
        </View>
    </View>
  )
}

export default FoodCategory