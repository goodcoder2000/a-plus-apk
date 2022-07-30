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
        Alert.alert("Warining!", "Please Correct Answer",[
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
        Alert.alert("Warning!!", "ဒီဖုန်းနံပါတ်သည်အကောင့်ဖွင့်ပြီးသားဖြစ်သည်။")
      } else if(data.message === "register success"){
        Alert.alert("အကောင့်ဖွင့်အောင်မြင်သည်")
      }
    })
    }

    // LOGIN

    const Login = (data) =>{
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

    // AUTO LOGIN

    const Autologin = async () =>{
      try {
        await AsyncStorage.getItem("userData")
        .then(value =>{
          if(value !== null){
            const toOriginal = JSON.parse(value);
            const data = {phoneno: toOriginal.phoneno, password: toOriginal.password}
            Login(data)
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

  // Cart item Remove

  const CartItemRemove = (_id, fName) =>{
    setCartData(cartData.filter((item) => item._id !== _id && item.fName !== fName))
  }

  // add order data

  const add = (data) =>{
    setOrderData([...orderData,data])
}

// remove order data
const remove = (_id, fName) =>{
    setOrderData(orderData.filter((item) => item._id !== _id && item.fName !== fName ))
}

  return (
    <AuthContext.Provider
    value={{
        logined,
        setLogined,
        Register,
        Login,
        Logout,
        userProfileData,
        gettingUserData,
        AddtoCart,
        cartData,
        CartItemRemove,
        add,
        remove
    }}
    >
      {console.log(orderData)}
        {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};