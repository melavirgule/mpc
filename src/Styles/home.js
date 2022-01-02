import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    container: {
        backgroundColor: '#ACC4F2',
        margin: 20,
        borderRadius:5,


        minWidth: 300,
        maxWidth: 1400,
        minHeight: 500,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayContainer: {
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: "#9994B2",
        alignItems: "center",
        justifyContent: "center",
    
    },
    title: {
        margin: 10,
        textAlign: 'center',
        fontSize: 18,
        // fontWeight: "bold",        
        color: '#4D36B7',
    },
    projectTitle: {
        fontSize: 16,
        marginLeft: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    textarea : {
        // flex: 3,
        margin: 20,
        padding: 10,
        backgroundColor: '#EEF0F5',
        
        borderRadius:5,

        // width: 200,
        minWidth: 280,
        maxWidth: 1200,
        minHeight: 200,
    },
    DisplayImagesContainer:{
        minWidth: 280,
        maxWidth: 1200,
        minHeight: 200,
        backgroundColor: '#EEF0F5',
        margin: 20,
        borderRadius:5,
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
    chooseButton: {
        margin: 60,
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
        
    },
    addMoreContainer:{
        margin: 20,
        // padding: 10,
         
    },
    addBtnsContainer:{
        flexDirection: 'row',
        minWidth: 280,

    },
    sendingBtnContainer:{
        marginLeft: 20,
    },
    addButton: {
        marginTop: 10,

        backgroundColor: '#42D694',
    },
    addMoreText: {
        maxWidth: 150,
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 10,
    },
    // addButton: {

    // },
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
    beforeLabel:{
        marginLeft: 12,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4D36B7',
    },
    label: {
        height: 30,
        marginLeft: 6,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: '#4D36B7',
        textDecorationLine: 'underline',
    },
})