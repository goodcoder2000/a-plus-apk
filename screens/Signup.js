import React, {useContext, useState} from 'react'
import {View, Text, TextInput, ScrollView, ImageBackground, TouchableOpacity, Modal} from 'react-native'
import CustomButton from '../components/CustomButton'
import { Gstyles } from '../share/Gstyle'
import { AuthContext } from '../contexts/AuthContext'
import { AntDesign } from '@expo/vector-icons';
import QuarterModal from '../components/QuarterModal'

export default function Signup({navigation}) {

  const { Register, RegisterConform } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [ phoneno, setPhoneno] = useState('')
  const [ password, setPassword] = useState('')
  const [ quarter, setQuarter] = useState('Select Quarter')
  const [ homeno, setHomeno] = useState('')
  const [street, setStreet] = useState('')

  const [QuarterModelShow, setQuarterModelShow] = useState(false)


  const quarterData = [
    {name: "ကချင်စု"},
    {name: "ကျွန်းပင်သာ"},
    {name: "အေးစေတီ"},
    {name: "ရွှေညောင်ပင်"},
    {name: "ရမ်ပူ"},
    {name: "ရှမ်းစုတောင်"},
    {name: "ရှမ်းစုမြောက်"},
    {name: "ရန်ကြီးအောင်"},
    {name: "လင်းရောင်ခြည်"},
    {name: "ဒူကထောင်"},
    {name: "ဧရာ"},
    {name: "သီတာ"},
    {name: "စီသာပူ"},
    {name: "တပ်ကုန်း"},
    {name: "မြေမြင့်"},
    {name: "ယုဇန"},
    {name: "ခေမာသီရိ"},
    {name: "အောင်နန်း"},
    {name: "မြို့သစ်"},
    {name: "မြို့သစ်ကြီး"},
    {name: "မင်းရပ်"}
  ];

  const data = {name: name, phoneno: phoneno, password: password, quarter: quarter, orderConformed: [], homeno: homeno, street: street};

  return (
    <ImageBackground
    resizeMode='cover'
    source={ require('../assets/images/bakey.jpg')}
    style={{flex: 1}}
    >
      
    <ScrollView>
    <View
    style={Gstyles.loginCon}
    >
        <Text style={{textAlign: 'center', fontFamily: 'poppins-b', fontSize: 23,marginBottom: 20, color: "#102A68"}}>Signup</Text>

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter Name"
        placeholderTextColor="#fff"
        value={name}
        onChangeText = {(value) => setName(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter phone number"
        placeholderTextColor="#fff"
        keyboardType="number-pad"
        value={phoneno}
        onChangeText = {(value) => setPhoneno(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter password...(Longer than 3 character)"
        placeholderTextColor="#fff"
        autoComplete="password"
        value={password}
        onChangeText = {(value) => setPassword(value)}
        />

        {/* Quarter Select */}
        <TouchableOpacity
        onPress={ () => setQuarterModelShow(true) }
        >
          <View
          style={Gstyles.selectQuarter}
          >
            <AntDesign name="caretright" size={24} color="#fff" />
            <Text
            style={Gstyles.selectQuarterText}>
            {quarter}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Ouarter Select Modal */}
        <Modal
        visible={QuarterModelShow}
        >
          <View
          style={Gstyles.quarterModal}
          >
            <Text
            style={Gstyles.modelTitle}
            >တည်နေရာမှန်ကန်စွာထည့်ပါ!</Text>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
              { quarterData.map((item, index) => <QuarterModal key={index} item={item} setQuarterModelShow={setQuarterModelShow} setQuarter={setQuarter} />)}
            </ScrollView>
          </View>

        </Modal>

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter HomeNo..."
        placeholderTextColor="#fff"
        value={homeno}
        onChangeText = {(value) => setHomeno(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter Street name or no..."
        placeholderTextColor="#fff"
        value={street}
        onChangeText = {(value) => setStreet(value)}
        />

        <CustomButton title="Sign Up" color="#FE9D34" navigation={navigation}
        press = {() => Register(data)}
        />

        <CustomButton title="Have already account?" color="#FF5621" navigation={navigation}
        press = {() => navigation.navigate('Login')}
        marginTop={10}
        />
    </View>
    </ScrollView>
    </ImageBackground>
  )
}
