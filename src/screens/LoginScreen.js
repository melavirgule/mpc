import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, SafeAreaProvider, StyleSheet, Text, TextInput, View } from 'react-native'
import { loginStyles } from '../Styles/login';
import { globalStyles } from '../Styles/global';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication } from '../../firebase';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = ({ navigation }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSecureEntry, setIsSecureEntry] = useState(true);


    const signInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((res) => {
                console.log(res);
                setIsSignedIn(true);
                handleLogin();
            })
            .catch((err) => {
                console.log(err);
                alert("Vérifiez votre email et votre mot de passe")
            })
    }

    const handleLogin = (props) => {
        navigation.navigate("HomeScreen", { screen: "HomeScreen" });
        //Redirection temporaire vers RegisterUserScreen
        // navigation.navigate("RegisterUserScreen", { screen: "RegisterUserScreen" });
    };

    const handleAdminScreen = (props) => {
        navigation.navigate("RegisterUserScreen", { screen: "RegisterUserScreen" });
    }

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

    function handleChange(text, eventName) {
        // On récup les valeurs précédentes de Value ( cad email + pwd vides grace à ...prev)
        // Ensuite on peut changer leur valeur grace à l'event et au 'text'
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    //https://www.youtube.com/watch?v=LrzcqnUcTX8&ab_channel=CodingIsOurLife

    return (
        <KeyboardAvoidingView style={loginStyles.mainContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <SafeAreaView style={loginStyles.container}>
                <View style={loginStyles.logoContainer}>
                    <Image
                        source={require("../assets/smallLogo.png")}
                        resizeMode="center"
                        style={loginStyles.loginLogo}
                    />
                </View>
                
                <View style={loginStyles.loginContainerFooter}>
                    <View style={loginStyles.textInputContainer}>
                    <Ionicons name="person-circle-outline" size={28} color="#4D36B7" style={[loginStyles.loginIcons, loginStyles.idIcon]}/>

                        <TextInput
                            style={[globalStyles.textInput, loginStyles.textInput]}
                            placeholder='Email' value={email}
                            onChangeText={text => setEmail(text)}
                            placeholderTextColor="white"
                        // textAlign={"center"}
                        />


                    </View>

                    <View style={loginStyles.textInputContainer}>

                    <TouchableOpacity
                            style={[loginStyles.loginIcons, loginStyles.eyesIcons]}
                            onPress={() => {
                                setIsSecureEntry((prev) => !prev)
                            }}
                        >{isSecureEntry ? <Ionicons name="eye-outline" size={28} color={'#4D36B7'} />
                            : <Ionicons name='eye-off-outline' size={28} color={'#4D36B7'} />}
                        </TouchableOpacity>
                        <TextInput
                            style={[globalStyles.textInput, loginStyles.passInput]}
                            placeholder='Mot de passe' value={password}
                            onChangeText={text => setPassword(text)}
                            placeholderTextColor="white"
                            // textAlign={"center"}
                            secureTextEntry={isSecureEntry}
                            autoCorrect={false}
                        />


            
                    </View>


                    <TouchableOpacity
                        onPress={signInUser}
                        style={[globalStyles.btn, loginStyles.loginButton]}>
                        <Text
                            style={[loginStyles.loginButtonText, globalStyles.btnText]}
                        >Se connecter</Text>
                    </TouchableOpacity>


                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

