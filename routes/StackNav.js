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
import InShop from "../components/InShop";
import FoodDetails from "../screens/FoodDetails";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 80,
                padding: 15,
                borderTopEndRadius: 18,
                borderTopStartRadius: 18,
                position: 'absolute'
            },
        }}
        >
            <Tab.Screen name="Home" component={Home}
            options={{
                tabBarLabel: () =>false,
                tabBarLabelStyle: {
                    color: "#102A68"
                },
                tabBarIcon: ({focused}) =>{
                    return(
                        <Entypo name="home" size={35} color={focused? "#FE9D34": "lightgray"} />
                    )
                }
            }}
            /> 
            <Tab.Screen name="Cart" component={Cart}
            options={{
                tabBarBadge: 3,
                tabBarLabel: () =>false,
                tabBarLabelStyle: {
                    color: "#102A68"
                },
                tabBarIcon: ({focused}) =>{
                    return(
                        <Entypo name="shopping-cart" size={35} color={focused? "#FE9D34": "lightgray"}  />
                    )
                }
            }}
            />
            <Tab.Screen name="Profile" component={Profile}
            options={{
                tabBarLabel: () =>false,
                tabBarLabelStyle: {
                    color: "#102A68"
                },
                tabBarIcon: ({focused}) =>{
                    return(
                        <Ionicons name="person" size={35} color={focused? "#FE9D34": "lightgray"}  />
                    )
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default function StackNav(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}
                options={{
                        headerTitle: () => <HomeHeader/>
                    }}
                />

                <Stack.Screen name="Signup" component={Signup}
                options={{
                        headerLeft: null,
                        headerTitle: () => <HomeHeader/> 
                    }}
                />
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    headerLeft: null,
                    headerTitle: () => <HomeHeader/> ,
                }}
                />
                <Stack.Screen name="ShopList" component={ShopList}
                options={{
                    headerTitle: () => <HomeHeader/> ,
                }}
                />
                <Stack.Screen name="InShop" component={InShop}
                options={{
                    headerShown: false
                }}
                />

                <Stack.Screen name="FoodDetails" component={FoodDetails}
                options={{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}