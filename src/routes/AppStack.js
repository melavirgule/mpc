import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import MediaSelection from "../screens/MediaSelectionScreen";
import RegisterUserScreen from '../screens/RegisterUserScreen';
import UpdateUserProfileScreen from '../screens/UpdateUserProfileScreen'
import DisclaimerScreen from "../screens/DisclaimerScreen";
import ThankYouScreen from "../screens/ThankYouScreen";

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
            name="MediaSelection"
            component={MediaSelection}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="RegisterUserScreen"
            component={RegisterUserScreen}
            />

            <Stack.Screen
            name="UpdateUserProfileScreen"
            component={UpdateUserProfileScreen}
            />

            <Stack.Screen
            name="ThankYouScreen"
            component={ThankYouScreen}
            />

            <Stack.Screen
            name="DisclaimerScreen"
            component={DisclaimerScreen}
            />
        </Stack.Navigator>
    )
}

export default AppStack;