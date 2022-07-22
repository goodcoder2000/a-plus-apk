import React from "react";
import TabNav from "./routes/TabNav";
import { useFonts } from 'expo-font';
import StackNav from "./routes/StackNav";

export default function App(){
  let [fontsLoaded] = useFonts({
    'poppins-r': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-b': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return(
    <StackNav/>
  )
}