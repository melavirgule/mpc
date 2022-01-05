import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Projects from "../components/Project"
import ProjectWeb from "../components/ProjectWeb";
import AddMoreOrSend from "../components/AddMoreOrSend";

import { homeStyle } from "../Styles/home";
import { globalStyles } from "../Styles/global";
import { Ionicons } from '@expo/vector-icons';

import { signOut } from "firebase/auth";
import { authentication } from '../../firebase';

export default function HomeScreen({ navigation }) {
    const [firstName, setFirstName] = useState('Prénom');
    const [lastName, setLastName] = useState('Nom');

    // const SignOutUser = () => {
    //     signOut(authentication)
    //         .then((res) => {
    //             console.log(res);
    //             setIsSignedIn(false);
    //             alert("Vous etes déconnecté")
    //             handleLogout();
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    const handleLogout = (props) => {
        navigation.navigate("LoginScreen", { screen: "LoginScreen" });
    };

    const handleRegisterUser = (props) => {
        navigation.navigate("RegisterUserScreen", { screen: "RegisterUserScreen" });
    };


    return(
        <SafeAreaProvider>
         {/* <SafeAreaView> */}
            <ScrollView>
                <View style={globalStyles.globalIconsContainer}>                
                    <TouchableOpacity
                        onPress={handleRegisterUser}
                    >                    
                        <Ionicons name="settings-outline" size={24} color="#4D36B7"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={SignOutUser}
                    >                    
                        <Ionicons name="exit-outline" size={24} color="#4D36B7"/>
                    </TouchableOpacity>
                </View>

                <Text style={homeStyle.title}> Bonjour, {firstName + ' ' + lastName}</Text>
                <Projects/>
                <ProjectWeb/>
                <AddMoreOrSend/>
            </ScrollView>
         {/* </SafeAreaView> */}
        </SafeAreaProvider>
    )
}