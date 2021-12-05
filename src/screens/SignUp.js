import React, { useState } from 'react'
// import firebase from 'firebase/app';
// import "firebase/auth";
import TextBox from "../components/TextBox"

export default function SignUpScreen({ navigation }) {
    const [values, setValues] = useState({
        email: "",
        pwd: "",
        pwd2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, pwd, pwd2 } = values

        if (pwd == pwd2) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Les mots de passe sont different!")
        }
    }

    return <View>
        <Text
            style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}
        >Sign Up</Text>
        <TextBox
            placeholder="Adresse email"
            onChangeText={text => handleChange(text, "email")} 
        />
        <TextBox
            placeholder="Mot de passe" 
            secureTextEntry={true} 
            onChangeText={text => handleChange(text, "pwd")} 
        />
        <TextBox 
            placeholder="Confirmez le mot de passe" 
            secureTextEntry={true} 
            onChangeText={text => handleChange(text, "pwd2")}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "48%" }} />
            <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }} />
        </View>

    </View>




}