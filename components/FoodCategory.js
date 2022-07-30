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
              <FoodIcon title="ကိတ်/Bakey" image={ require('../assets/images/bakey.jpg')} navigation={navigation} category="bakey"/>
              <FoodIcon title="အဖျော်ယမကာများ" image={ require('../assets/images/drink.jpg')} navigation={navigation} category="drink"/>
              <FoodIcon title="ခေါက်ဆွဲအမျိုးမျိုး" image={ require('../assets/images/noddle.jpg')} navigation={navigation} category="noddle"/>
          </View>

          <View style={Gstyles.categoryBody}>

              <FoodIcon title="ကြက်သား" image={ require('../assets/images/chicken.jpg')} navigation={navigation} category="chicken"/>
              <FoodIcon title="အထောင်း/အသုပ်များ" image={ require('../assets/images/papaya.jpg')} navigation={navigation} category="atoke"/>
              <FoodIcon title="အကင်များ" image={ require('../assets/images/akin.jpg')} navigation={navigation} category="akin"/>
          </View>
        </View>
    </View>
  )
}

export default FoodCategory