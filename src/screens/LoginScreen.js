import React, { useState } from 'react'
import { Button, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { loginStyles } from '../Styles/login';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication } from '../../firebase';
// import { withNavigation } from 'react-navigation';



const LoginScreen = ({navigation}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [isSelected, setSelected] = useState(false);
    const toggleCheckbox = () => setSelected(!isSelected);

    const signInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          console.log(res);
          setIsSignedIn(true);
            handleLogin();
        // rajouter props en props de signInUser
        })
        .catch((err) => {
          console.log(err);
          alert("Vérifiez votre email et votre mot de passe")
        })
      }
    
      const SignOutUser = () => {
        signOut(authentication)
        .then((res) => {
          console.log(res);
          setIsSignedIn(false);
        })
        .catch((err) =>{
          console.log(err)
        })
      }
    


    function handleChange(text, eventName) {
        // On récup les valeurs précédentes de Value ( cad email + pwd vides grace à ...prev)
        // Ensuite on peut changre leur valeur grace à l'event et au 'text'
        setValues(prev => {
            return {
                ...prev,
                [eventName] : text
            }
        })
    }

    const handleLogin = (props) => {

        // const isUserLoggedIn = props.isUserLoggedIn;
        // if (isUserLoggedIn) {
        navigation.navigate("HomeScreen", { screen: "HomeScreen" });
        // } else {
        //     return <Text>Veuillez vous connecter svp</Text>
        // }
    };

    // Setup Registrer, à faire passer sur Admin Screen

    //https://www.youtube.com/watch?v=LrzcqnUcTX8&ab_channel=CodingIsOurLife




    return (
        <KeyboardAvoidingView style={loginStyles.mainContainer} behavior="padding">
            <SafeAreaView style={loginStyles.container}>
                <View style={loginStyles.loginContainerHeader}>
                    <Image
                        // source={require("../assets/smallLogo.png")}
                        source={require("../assets/smallLogo.png")}
                        resizeMode="center"
                        style={loginStyles.loginLogo}
                    />
                </View>

                <View style={loginStyles.loginContainerFooter}>
                    <View style={loginStyles.textInputContainer}>
                        <TextInput
                            style={loginStyles.textInput}
                            placeholder='Email' value={email} 
                            onChangeText={text=>setEmail(text)}
                      
                            // onChangeText={text => handleChange(text, "email")}
                            // placeholder="Identifiant"
                            placeholderTextColor="white"
                        // textAlign={"center"}
                        />
                        {/* <UserOutlined style={{ fontSize: '16px', color: '#08c', marginLeft: '-25px' }} /> */}
                    </View>

                    <View style={loginStyles.textInputContainer}>
                        <TextInput
                            style={loginStyles.textInput}
                            placeholder='Password' zvalue={password} 
                            onChangeText={text=>setPassword(text)}
                      
                            // onChangeText={text => handleChange(text, "pwd")}
                            // placeholder="Mot de passe"
                            placeholderTextColor="white"
                            // textAlign={"center"}
                            secureTextEntry={isSecureEntry}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setIsSecureEntry((prev) => !prev)
                            }}
                        >{isSecureEntry ? <Text>Show</Text> : <Text>Hide</Text>}
                        </TouchableOpacity>
                    </View>


                    <Button 
                    title={'Se Connecter'}
                    onPress={signInUser}
                    style={loginStyles.loginButton}
                    />

                    {/* <TouchableOpacity
                        onPress={handleLogin}
                        style={[loginStyles.loginButton, loginStyles.loginButtonOutline]}>
                        <Text style={loginStyles.loginButtonText}>Se Connecter</Text>
                    </TouchableOpacity> */}
                    
                    {/* <TouchableOpacity
                        onPress={handleSignUp}
                        style={[loginStyles.loginButton, loginStyles.loginButtonOutline]}>
                        <Text style={loginStyles.loginButtonText}>S'enregistrer</Text>
                    </TouchableOpacity> */}


                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

