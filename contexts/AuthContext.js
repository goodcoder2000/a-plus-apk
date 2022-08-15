import React,{ createContext, useState, useEffect} from 'react'
import { Alert,ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Usefetch from '../components/Usefetch';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [ logined, setLogined] = useState(false)
    const [ userData, setUserData] = useState(null)
    const [ UserId, setUserId] = useState(null)
    const [ cartData, setCartData] = useState([])
    const [ orderData, setOrderData ] = useState([])
    const [ userQuarter, setUserQuarter] = useState(null)


    // REGISTER
    const Register = (data) =>{
      if(data.name.length < 3 || data.phoneno.length < 9 || data.password.length === 0 || data.homeno.length === 0 || data.street.length === 0){
        Alert.alert("APlUS FOOD Say!!!", "Please Correct Answer",[
          {text: "Know", onPress: () =>null}
        ])
      } else {
        Alert.alert("??", "သင်အသုံးပြုသောဖုန်းနံပက်သေချာပြီလား?",[
          {text: "ပြန်စစ်မယ်", onPress: () => null},
          {text: "သေချာပြီ", onPress: () => RegisterConform(data)}
        ])
      }      
    }
    // RegisterConform

    const RegisterConform = (data) =>{
      console.log(data)
      fetch("https://api-aplus.onrender.com/api/users/register",{
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then((res) =>{
      return res.json();
    })
    .then(data =>{
      if(data.message === "This Phone has already Exits"){
        Alert.alert("APlUS FOOD Say!!!", "ဒီဖုန်းနံပါတ်သည်အကောင့်ဖွင့်ပြီးသားဖြစ်သည်။")
      } else if(data.message === "register success"){
        Alert.alert("အကောင့်ဖွင့်အောင်မြင်သည်")
      }
    })
    }

    // LOGIN

    const Login = (data) =>{
      if(data.phoneno.length === 0){
        Alert.alert("APlUS FOOD Say!!!", "Enter Your Phone number!!")
      } else if(data.password.length === 0) {
        Alert.alert("APlUS FOOD Say!!!", "Enter Your Password!!")        
      } else {

        // do here
        try {
          fetch("https://api-aplus.onrender.com/api/users/login",{
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(data)
        })
        .then(res =>{
          return res.json()
        })
        .then(data => {
          if(data.error !== "user not found"){
            setLogined(true)
            AsyncStorage.setItem("userData", JSON.stringify(data.user))
          }
        })
        } catch (error) {
          console.log(error)
        }
      }
      
    }

    // AUTO LOGIN

    const Autologin = async () =>{
      try {
        await AsyncStorage.getItem("userData")
        .then(value =>{
          if(value !== null){
            setLogined(true)
          }
        })
      } catch (error) {
        console.log(error)
        }
    }

    useEffect(() =>{
      Autologin()
    }, [])


    // LOGOUT

    const Logout = async () =>{
      try {
        await AsyncStorage.clear();
        setLogined(false)
      } catch (error) {
        console.log(error)
      }
    }

    // gettingUserData

    const gettingUserData = async () =>{
      console.log('getting data')
      await AsyncStorage.getItem("userData")
      .then(value =>{
        if(value !== null){
          let userData = JSON.parse(value);
          setUserData(userData)
          setUserId(userData._id);
          setUserQuarter(userData.quarter)
        }
      })
  }

  // toast android
  const SuccessMessage = () => {
    ToastAndroid.showWithGravityAndOffset(
      "ခြင်းထဲထည့်ပြီးပါပြီ",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  // Add to Cart

  const AddtoCart = (data) =>{
    if(cartData.find((item) => item.fName === data.fName && item._id === data._id)){
      Alert.alert("APlUS FOOD Say!!!", "ခြင်းထဲတွင်ရှိပြီးသားဖြစ်သည်",[
        {text: "သိပြီ", onPress: () => null}
      ])
    } else {
      setCartData([...cartData,data])
      // SuccessMessage()
    }
    // console.log(data)
    
  }

  // add order data
  const add = (data) =>{
    setOrderData([...orderData,data])
  }

// remove order data
  const remove = (_id, fName) =>{
      setOrderData(orderData.filter((item) => item._id !== _id && item.fName !== fName ))
  }

  // ORDER NOW 
  const OrderClick = (data) =>{
    if(orderData.length === 0){
      Alert.alert("APlUS FOOD Say!!!", "ပစ္စည်းရွှေးချယ်ထားတာ မရှိပါ!!", [{text: "ရွှေးမယ်", onPress: () => null}])
    } else {
      Alert.alert("APlUS FOOD Say!!!", "အော်ဒါတင်မည်သေချာပြီလား?",[
        {text: "ပယ်ဖျတ်မည်", onPress: () => null},
        {text: "အော်ဒါတင်မည်", onPress: () => OrderComformed(data)}
      ])      
    }
  }

  // ORDER COMFORMED

  const OrderComformed = (data) =>{
    try {
      console.log("orderconformed", data)
      for(let i =0; i<orderData.length; i++){
        fetch("https://api-aplus.onrender.com/api/users/"+UserId+"/orderConformed",{
        method: 'PATCH',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data[i])
      })
        .then(res => res.json())
        .then(data =>{
          if(data.message === "user order success" && orderData.length-1 === i){
            console.log("order success")
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  // profile update

  const profileUpdate = (updateDataWithIdForAsyncStorage, updateDataWithoutId) =>{
    console.log("updateDatawithIdfor asyncstroage", updateDataWithIdForAsyncStorage, "updateDatawithoutId", updateDataWithoutId)
    try {
      fetch("https://api-aplus.onrender.com/api/users/"+UserId+"/profileUpdate",{
      method: 'PATCH',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(updateDataWithoutId)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.message === "profile update success"){
          // Alert.alert("APlUS FOOD Say!!!", "Profile Update Successfully!",[
          //   {text: "သိပြီ", onPress: () => null}
          // ])
          AsyncStorage.setItem("userData", JSON.stringify(updateDataWithIdForAsyncStorage))
          console.log("hee data",updateDataWithoutId)
          console.log("profile update success")
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
    value={{
        logined,
        setLogined,
        Register,
        RegisterConform,
        Login,
        Logout,
        UserId,
        gettingUserData,
        AddtoCart,
        cartData,
        add,
        remove,
        orderData,
        OrderClick,
        OrderComformed,
        profileUpdate,
        userQuarter,
        userData
    }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};