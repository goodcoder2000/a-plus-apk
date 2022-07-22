import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeHeader from "../components/HomeHeader";
import ShopList from "../screens/ShopList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ShopList" component={ShopList}/>
        </Stack.Navigator>
    )
}

export default function TabNav(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    height: 80,
                    padding: 15,
                    borderTopEndRadius: 18,
                    borderTopStartRadius: 18,
                    position: 'absolute'
                }
            }}
            >
                <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    headerTitle: () => <HomeHeader/> ,
                    tabBarIcon: () =>{
                        return(
                            <Entypo name="home" size={35} color="#FE9D34" />
                        )
                    }
                }}
                />
                <Tab.Screen name="Cart" component={Cart}
                 options={{
                    tabBarBadge: 3,
                    tabBarIcon: () =>{
                        return(
                            <Entypo name="shopping-cart" size={35} color="#FE9D34" />
                        )
                    }
                }}
                />
                <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: () =>{
                        return(
                            <Ionicons name="person" size={35} color="#FE9D34" />
                        )
                    }
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}