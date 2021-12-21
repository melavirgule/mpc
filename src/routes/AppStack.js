import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterUserScreen from '../screens/RegisterUserScreen';
import UpdateUserProfileScreen from '../screens/UpdateUserProfileScreen'
// import DisclaimerScreen from "../Screens/DisclaimerScreen";
// import ThankyouScreen from "../Screens/ThankyouScreen";


const Stack = createStackNavigator();


const AppStack = () => {

    return(

        <Stack.Navigator>

            <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            />

            <Stack.Screen
            name="RegisterUserScreen"
            component={RegisterUserScreen}
            />

            {/* <Stack.Screen
            name="UpdateUserProfileScreen"
            component={UpdateUserProfileScreen}
            /> */}

            {/* <Stack.Screen
            name="ThankyouScreen"
            component={ThankyouScreen}
            options={{headerShown: false}}
            /> */}

            {/* <Stack.Screen
            name="DisclaimerScreen"
            component={DisclaimerScreen}
            options={{headerShown: false}}
            /> */}

        </Stack.Navigator>
    
    )
}

export default AppStack;