import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Projects from "../components/Project"
import SecondProjects from "../components/ProjectWeb";
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
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }


    return(
        <SafeAreaView>
            <ScrollView>
            {/* <FlatList> */}
                {/* <View> */}
                <TouchableOpacity
                    // onPress={SignOutUser}
                >                    
                    <Ionicons name="exit-outline" size={24} color="#4D36B7" style={globalStyles.logOutIcon}/>
                </TouchableOpacity>


                    <Text style={homeStyle.title}> Bonjour, {firstName + ' ' + lastName}</Text>
                    <Projects/>
                    <SecondProjects/>
                    <AddMoreOrSend/>
                {/* </View> */}
            {/* </FlatList> */}
            </ScrollView>
        </SafeAreaView>
    )
}