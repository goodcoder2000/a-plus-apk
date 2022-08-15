import React,{ useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView} from 'react-native'
import { Gstyles } from '../share/Gstyle'
import { AntDesign } from '@expo/vector-icons';
import QuarterModal from '../components/QuarterModal'
import CustomButton from "../components/CustomButton"
import { MaterialIcons } from '@expo/vector-icons'
import { AuthContext } from '../contexts/AuthContext';

export default function Setting({route}) {
    const { profileUpdate} = useContext(AuthContext); // profile update

    const { data } = route.params;
    const [QuarterModelShow, setQuarterModelShow] = useState(false)

    const [ newName, setNewName] = useState(data.name)
    const [ newPassword, setNewPassword] = useState(data.password)
    const [ userId, setUserId] = useState(data._id);
    const [ newQuarter, setNewQuarter] = useState(data.quarter)
    const [ newPhoneNo, setNewphoneNo] = useState(data.phoneno)
    const [ newHomeno, setNewHomeno] = useState(data.homeno)
    const [ newStreetName, setNewStreetName] = useState(data.street)

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
    
    const updateDataWithIdForAsyncStorage  = {name: newName, password: newPassword, _id: userId, quarter: newQuarter, phoneno: newPhoneNo, homeno: newHomeno, street: newStreetName}
    const updateDataWithoutId = {name: newName, password: newPassword, quarter: newQuarter, phoneno: newPhoneNo, homeno: newHomeno, street: newStreetName}

  return (
    <View style={Gstyles.settingCon}>
        <Text style={Gstyles.profiletitle}>Setting</Text>
        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter new name"
        placeholderTextColor="#fff"
        value={newName}
        onChangeText={(value) => setNewName(value)}
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter new phone No:"
        placeholderTextColor="#fff"
        value={newPhoneNo}
        onChangeText={(value) => setNewphoneNo(value)}
        keyboardType="number-pad"
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter new password"
        placeholderTextColor="#fff"
        value={newPassword}
        onChangeText={(value) => setNewPassword(value)}
        keyboardType="number-pad"
        />

        <TouchableOpacity
        onPress={ () => setQuarterModelShow(true) }
        >
          <View
          style={Gstyles.selectQuarter}
          >
            <AntDesign name="caretright" size={24} color="#fff" />
            <Text
            style={Gstyles.selectQuarterText}>
            {newQuarter}
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
              { quarterData.map((item, index) => <QuarterModal key={index} item={item} setQuarterModelShow={setQuarterModelShow} setNewQuarter={setNewQuarter}/>)}
            </ScrollView>
          </View>
        </Modal>

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter new Home No:"
        placeholderTextColor="#fff"
        value={newHomeno}
        onChangeText={(value) => setNewHomeno(value)}
        keyboardType="number-pad"
        />

        <TextInput
        style={Gstyles.phoneNo}
        placeholder="Enter new Street name"
        placeholderTextColor="#fff"
        value={newStreetName}
        onChangeText={(value) => setNewStreetName(value)}
        keyboardType="number-pad"
        />

        <CustomButton title="Update Profile" color="red"
        icon={<MaterialIcons name="update" size={24} color="black" />}
        press = {()=> profileUpdate(updateDataWithIdForAsyncStorage,updateDataWithoutId)}
        />

    </View>
  )
}
