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
    globalIconsContainer: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        borderRadius: 5,
    },
    btnText: {
        color: 'white',
        fontFamily: 'MontserratNormal',
        textAlign: 'center',
    },

})