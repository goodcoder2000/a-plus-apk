import React,{ useState, useEffect } from "react";
import { View, Text, BackHandler, Alert,ToastAndroid } from "react-native";
import { Gstyles } from "../share/Gstyle";
import FoodCategory from "../components/FoodCategory";
import ImageSlider from "../components/ImageSlider";

export default function Home({navigation}){
    
    let backCount = 0;
    const backAction = () =>{

        setTimeout(() => {
            backCount = 0;
          }, 2000)

            if(backCount === 0){
                backCount+=1;
                navigation.goBack()
                ToastAndroid.show('Double app to exit', ToastAndroid.SHORT);
            } else if (backCount === 1)  {
                Alert.alert('Hay', 'Do you want to Exit?',[
                    {
                        text: 'Cancel',
                        onPress: () => null,
                    },
                    {
                        text: 'Exit',
                        onPress: () => BackHandler.exitApp()
                    }
                
                ])
            }         
            return true;
        }
        useEffect(() =>{
            BackHandler.addEventListener('hardwareBackPress',backAction)
            return () => BackHandler.removeEventListener('hardwareBackPress',backAction)
        },[])    

    return(
        <View style={Gstyles.HomeContainer}>
            <ImageSlider/>
            <FoodCategory navigation={navigation}/>
        </View>
    )
}