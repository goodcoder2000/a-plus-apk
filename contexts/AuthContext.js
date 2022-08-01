import React,{ createContext, useState, useEffect} from 'react'
import { Alert,ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [ logined, setLogined] = useState(false);
    const [ userData, setUserData] = useState(null);
    const [ userProfileData, setUserProfiledata] = useState(null)
    const [ cartData, setCartData] = useState([]);
    const [ orderData, setOrderData ] = useState([])
    

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
            setUserData(data)
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
            // const toOriginal = JSON.parse(value);
            // const data = {phoneno: toOriginal.phoneno, password: toOriginal.password}
            // Login(data)
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
          let userId = JSON.parse(value)._id;
          setUserProfiledata(userId)
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
    setCartData([...cartData,data])
    // SuccessMessage() 
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
  const OrderClick = () =>{
    if(orderData.length === 0){
      Alert.alert("APlUS FOOD Say!!!", "ပစ္စည်းရွှေးချယ်ထားတာ မရှိပါ!!", [{text: "ရွှေးမယ်", onPress: () => null}])
    } else {
      Alert.alert("APlUS FOOD Say!!!", "အော်ဒါတင်မည်သေချာပြီလား?",[
        {text: "ပယ်ဖျတ်မည်", onPress: () => null},
        {text: "အော်ဒါတင်မည်", onPress: () => console.log('order success', orderData)}
      ])
      
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
        userProfileData,
        gettingUserData,
        AddtoCart,
        cartData,
        add,
        remove,
        orderData,
        OrderClick
    }}
    >
      {console.log(orderData)}
        {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};