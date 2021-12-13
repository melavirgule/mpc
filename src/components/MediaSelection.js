import { Ionicons } from "@expo/vector-icons";
import { AssetsSelector } from "expo-images-picker";
import React from "react";
import { StyleSheet, View } from "react-native";

const MediaSelection = () => {
    const onSuccess = (data) => {
        Alert.alert('Done', data.length + 'Images selected')
    };

    const widgetErrors = useMemo(
        () => ({
            errorTextColor: 'black',
            errorMessages: {
                hasErrorWithPermissions: "Veuillez authoriser l'application à accéder à votre galerie 🤗",
                hasErrorWithLoading: 'Il y a eu un problème pendant le chargement des images 😬',
                hasErrorWithResizing: 'Il y a eu un problème pendant le chargement des images 😬',
                hasNoAssets: "Il n'y a pas d'images 😬",
            },
        }),
        []
    );

    const widgetSettings = useMemo(
        () => ({
            getImageMetaData: true, // true might perform slower results but gives meta data and absolute path for ios users
            initialLoad: 100,
            assetsType: [MediaType.photo, MediaType.video],
            minSelection: 1,
            maxSelection: 6,
            portraitCols: 4,
            landscapeCols: 4,
        }),
        []
    );

    const widgetResize = useMemo(
        () => ({
            width: 50,
            compress: 0.7,
            base64: false,
            saveTo: 'jpeg',
        }),
        []
    );

    const _textStyle = {
        color: 'white',
    };

    const _buttonStyle = {
        backgroundColor: 'purple',
        borderRadius: 5,
    };

    const widgetNavigator = useMemo(
        () => ({
            Texts: {
                finish: "C'est bon!",
                back: 'Retour',
                selected: 'selectionné(e)s',
            },
            midTextColor: 'black',
            minSelection: 1,
            buttonTextStyle: _textStyle,
            buttonStyle: _buttonStyle,
            onBack: () => { },
            onSuccess: (e) => onSuccess(e),
        }),
        []
    );

    const widgetStyles = useMemo(
        () => ({
            margin: 2,
            bgColor: 'white',
            spinnerColor: 'blue',
            widgetWidth: 99,
            videoIcon: {
                Component: Ionicons,
                iconName: 'ios-videocam',
                color: 'purple',
                size: 20,
            },
            selectedIcon: {
                Component: Ionicons,
                iconName: 'ios-checkmark-circle-outline',
                color: 'white',
                bg: '#0eb14970',
                size: 26,
            },
        }),
        []
    );


    return (
        <>
            <AssetsSelector
                Settings={widgetSettings}
                Errors={widgetErrors}
                Styles={widgetStyles}
                Navigator={widgetNavigator}
                Resize={widgetResize}
            />
        </>

    )
}



export default MediaSelection;