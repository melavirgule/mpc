import { browserPopupRedirectResolver } from "firebase/auth";
import { StyleSheet } from "react-native";


export const registerStyles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInput: {
        height: 50,
        width: 170,
        margin: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
    }

})