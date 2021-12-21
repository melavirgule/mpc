import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "./dimension";



export const loginStyles = StyleSheet.create ({
    mainContainer: {
        height: windowHeight,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ACC4F2',
        // backgroundColor: '#42d694',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainerHeader: {
        flex: 1,
        marginTop: 30,
        marginBottom: 20,
    },
    loginLogo: {
        flex: 1,
        width: 200,
        height: 200,
    },
    loginContainerFooter: {
        width: windowWidth,
        flex: 2,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        width: 250,
        marginTop: 50,
        marginBottom: 20,

    },
    passInput:{
        width: 250,
    //     marginRight: -20,
    // marginBottom: 100,

    },
    eyesIcons: {
        marginLeft: -25,
    },
    loginButton: {
        width: 150,
        height: 50,
        maxHeight: 60,
        marginTop: 50,
        // margin: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D36B7',
        // backgroundColor: 'purple',
        // backgroundColor: 'rgb(64, 48, 142, 0.5)',
        borderRadius: 10,
    },
    loginButtonText: {
        color: 'white',
        fontFamily: 'Montserrat',
    },
    checkboxContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ecf0f1',
        padding: 8,
    
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#4D36B7',
      },
    checkmark: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18,
        color: '#4D36B7'
    },
    label: {
        margin: 12,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4D36B7'
    },
    
})