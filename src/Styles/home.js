import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    textarea : {
        // flex: 3,
        margin: 20,
        // backgroundColor: 'turquoise',

        borderColor: 'turquoise',
        borderWidth: 2,

        // width: 200,
        minWidth: 300,
        height: 200,
    },
    chooseButton: {
        margin: 20,
        backgroundColor: '#553ACF',

    },
    chooseButtonMobile: {
        margin: 20,
        backgroundColor: 'purple',

    },
    chooseButtonText: {
        width: 160,
        height: 60,
        color: 'white',
        textAlign: 'center',
        
    }
})