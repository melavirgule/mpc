import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Button,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { authentication } from "../../firebase";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { registerStyles } from "../Styles/register";



// export default function RegisterScreen() {
const RegisterUserScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [pic, setPic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSignedIn, setIsSignedIn] = useState(false);

    const RegisterUser = (props) => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((res) => {
                console.log(res);
                setIsSignedIn(true);
                navigation.navigate("UpdateUserProfileScreen", { screen: "UpdateUserProfileScreen" })
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return (
        <SafeAreaProvider>
            <View style={registerStyles.container}>
                <Text
                    style={registerStyles.title}
                >Enregistrer un nouvel utilisateur</Text>
                <TextInput
                    placeholder='Email' value={email}
                    onChangeText={text => setEmail(text)} 
                    style={registerStyles.textInput}
                    />
                <TextInput
                    placeholder='Password' value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true} 
                    style={registerStyles.textInput}
                    />
                <Button
                    title={'Register'}
                    onPress={RegisterUser}
                    style={registerStyles.textInput}
                />


                <StatusBar style="auto" />
            </View>
        </SafeAreaProvider>
    );
}

export default RegisterUserScreen;



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });