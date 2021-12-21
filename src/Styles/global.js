import { StyleSheet  } from "react-native";
// import { windowHeight } from "./dimension";
// import { windowWidth } from "./dimension";
// Main color blue : #40308e
// Main color green : #42d694



export const globalStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textInput: {
        width: 200,
        height: 50,
        textAlign: 'left',
        fontFamily: 'Montserrat',
        marginTop: 15,
        marginBottom: 25,
        borderRadius: 10,
        borderBottomWidth: 2,
        borderColor: '#4D36B7',

        // backgroundColor: '#ACC4F2',
        paddingLeft: 15,
        paddingRight: 20,
    },
    btn: {
        width: 150,
        height: 50,
        maxHeight: 60,
        // margin: 100,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        fontFamily: 'Montserrat',
        
    },

})