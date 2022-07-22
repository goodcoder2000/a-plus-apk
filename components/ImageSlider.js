import React,{ useState, useEffect} from 'react'
import { View, Text, Image} from 'react-native'
import { Gstyles } from '../share/Gstyle'

export default function ImageSlider() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://api-aplus.onrender.com/api/imageslider',{
      signal: signal
    })
    .then((res) => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))

    return () => controller.abort()
  },[])
  return (
    <View style={Gstyles.ImageSliderCon}>
        
        {data && console.log(data)}
    </View>
  )
}
