import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Projects from "../components/Project"


export default function HomeScreen({ navigation }) {
    const [firstName, setFirstName] = useState('Prénom');
    const [lastName, setLastName] = useState('Nom');
    const [numberOfProject, setNumberOfProjects] = useState(1);


    return(
        <SafeAreaView>
            {/* <ScrollView> */}
                {/* <View> */}
                    <Text> Bonjour, {firstName + '' + lastName}</Text>
                    <Text> Réalisation n°{numberOfProject}</Text>
                    <Projects/>
                {/* </View> */}
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}