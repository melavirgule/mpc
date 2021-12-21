import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Projects from "../components/Project"
import SecondProjects from "../components/Projects2";


export default function HomeScreen({ navigation }) {
    const [firstName, setFirstName] = useState('Prénom');
    const [lastName, setLastName] = useState('Nom');
    const [numberOfProject, setNumberOfProjects] = useState(1);


    return(
        <SafeAreaView>
            <ScrollView>
            {/* <FlatList> */}
                {/* <View> */}
                    <Text> Bonjour, {firstName + ' ' + lastName}</Text>
                    <Text> Réalisation n°{numberOfProject}</Text>
                    <Projects/>
                    <SecondProjects/>
                {/* </View> */}
            {/* </FlatList> */}
            </ScrollView>
        </SafeAreaView>
    )
}