import { Button, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState} from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { updateProfile, getAuth, sendEmailVerification } from "@firebase/auth";
import { authentication } from "../../firebase";
import { registerStyles } from "../Styles/register";
import { globalStyles } from "../Styles/global";

const UpdateUserProfileScreen = () => {

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('')

    // const user = authentication.currentUser;

    const UpdateUserProfile = () => {
    updateProfile(authentication.currentUser, {
        // displayName: {name}, photoURL: "https://example.com/jane-q-user/profile.jpg"
        displayName: {name}, photoURL: {photo}
      }).then(() => {
        // Profile updated!
        console.log('Profil mis à jour!' + 'displayName' )
        // ...
      }).catch((error) => {
          console.log(error)
        // An error occurred
        // ...
      });
    }

    return(
        <SafeAreaProvider style={registerStyles.container}>

            <Text
            style={registerStyles.title}>
            Completez le profil de votre utilisateur</Text>

                <TextInput
                    placeholder='name' value={name}
                    onChangeText={text => setName(text)}
                    style={globalStyles.textInput} />
                <TextInput
                    placeholder='photo' value={photo}
                    onChangeText={text => setPhoto(text)}
                    style={globalStyles.textInput}
                />
                {/* <Button
                    title={'Enregistrer le profil'}
                    onPress={UpdateUserProfile}
                /> */}

                <TouchableOpacity
                    onPress={UpdateUserProfile}
                    style={[globalStyles.btn, registerStyles.registerBtn]}
                >
                    <Text
                        style={globalStyles.btnText}
                    >Enregistrer le profil</Text>
                </TouchableOpacity>

        </SafeAreaProvider>
    )
}

export default UpdateUserProfileScreen;