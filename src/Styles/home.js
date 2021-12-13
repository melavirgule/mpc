import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    textarea : {
        // flex: 3,
        margin: 20,
        backgroundColor: 'turquoise',

        // width: 200,
        minWidth: 300,
        height: 200,
    },
    chooseButton: {
        margin: 20,
    },
    chooseButtonMobile: {
        width: 160,
        height: 60,
        margin: 20,
        backgroundColor: 'purple',
        borderRadius: 5,
    },
    chooseButtonText: {
        width: 160,
        height: 60,
        color: 'white',
        textAlign: 'center',
        
    }
})