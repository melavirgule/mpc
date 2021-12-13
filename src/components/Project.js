import React, { useState, useEffect, useMemo } from "react";
import {
  TextInput,
  View,
  Button,
  Platform,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { homeStyle } from "../Styles/home";
import * as DocumentPicker from "expo-document-picker";
import * as MediaLibrary from "expo-media-library";
// import DisplayDocs from "./DisplayDocs";
// import MediaSelection from "./MediaSelection";
import { AssetsSelector } from 'expo-images-picker';

import { MediaType } from "expo-media-library";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
// import { AntDesign } from '@expo/vector-icons';




const Projects = () => {
  const [textDescription, setTextDescription] = useState("");
  const [selectedDocs, setSelectedDocs] = useState({});
  const [selectedFileList, setSelectedFileList] = useState({});

  // Construction de mon textArea
  const TextAreaDescription = (props) => {
    return <TextInput {...props} editable maxLength={1600} />;
  };

  // useEffect(() => {
  //     (async () => {
  //         if(Platform.OS !== 'web') {
  //             const { status } = await MediaLibrary.requestPermissionsAsync();
  //             if ( status !== 'granted' ){
  //                 alert("Désolé, la permission est nécessaire pour accéder à la galerie");
  //             }
  //         }
  //     })();
  // }, []);

  const handlePickDocs = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        alert("Désolé, la permission est nécessaire pour accéder à la galerie");
        return
      }
    }
    if (Platform.OS === 'web') {
      let pickerResult = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
        copyToCacheDirectory: true,
      });
      if (pickerResult.type === "cancel") {
        return;
      }
      console.log(pickerResult);
      setSelectedDocs({ localUri: pickerResult.uri });
    }

    // if (Platform.OS !== 'web') {

    // }
  }

  //     //     // setSelectedDocs({
  //     //     //   // localUri: pickerResult.uri,
  //     //     //   // file: pickerResult.file.name,
  //     //     //   output: pickerResult.output,
  //     //     // });
  //   };
  // }
  console.log({ selectedDocs });


  //   // const selectedDocsArray = Object.entries(selectedDocs);
  //   // selectedDocsArray.map((item, index) => {
  //   //   console.log(item?.[1], index);
  //   //   console.log(item?.[1]?.[0].name, index);
  //   //   console.log(item?.[1]?.[1].name, index);
  //   //   console.log(item?.[1]?.[2].name, index);

  //   // });

  // // const selectedDocsArray = Object.keys(selectedDocs).map(selectedDoc => {
  // //     return{id: selectedDoc, name: selectedDocs[selectedDoc]}
  // // });

  // // const [ i, setI] = useState(item?.[""])
  // // const [ j, setJ] = useState(item?.[""]?.[""])

  //   // console.log(selectedDocsArray);

  const DisplayPickedDocs = () => {
    if (selectedDocs !== null) {
      return (
        <View style={styles.container}>
          <Image
            source={{ uri: selectedDocs?.localUri }}
            // source={require({ name: selectedDocsArray[setI][setJ].name})}
            // source={require({ name: selectedDocs?.[selectedDoc]})}
            style={styles.thumbnail}
          />
        </View>
      );
    }
  };

  // const DisplayPickedDocs = () => {
  //     if (selectedDocs !== null) {
  //     return (
  //         selectedDocsArray.forEach(([key, value]) => {
  //             console.log(key);
  //             console.log(value);
  //             <View style={styles.container}>
  //             <Image
  //                 source={{ uri: selectedDocsArray.localUri }}
  //                 style={styles.thumbnail}
  //             />
  //             </View>
  //         }
  //     )
  //     ,
  // };


  // const handlePickDocsMobile = async () => {
  //   if (Platform.OS !== 'web') {
  //     const { status } = await MediaLibrary.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       alert("Désolé, la permission est nécessaire pour accéder à la galerie");
  //       return
  //     } else {
  //       return (
  //         <View>
  //           <AssetsSelector
  //             Settings={widgetSettings}
  //             Errors={widgetErrors}
  //             Styles={widgetStyles}
  //             Navigator={widgetNavigator}
  //           />
  //         </View>
  //       )
  //     }
  //   }
  // }
  const handlePickDocsMobile = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        alert("Désolé, la permission est nécessaire pour accéder à la galerie");
        return
      }

      return(
        <>
        {/* <MediaSelection /> */}
          <AssetsSelector
            Settings={widgetSettings}
            Errors={widgetErrors}
            Styles={widgetStyles}
            Navigator={widgetNavigator}
          />
        </>
      )
      
    }
  }
    
  


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

  // voir ce qu'il se passe pour le textarea
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <View>

        <TextAreaDescription
          // onChangeText={(textDescription) => setTextDescription(textDescription)}
          // value={textDescription}
          style={homeStyle.textarea}
          placeholder={"Entrez votre description ici"}
          multiline={true}
          numberOfLines={3}
        />

        {/* *********************Version Ordinateur********************* */}

        {/* Si on est sur l'ordi on active document-picker,
        Si on est sur mobile on active images-picker */}
        {Platform.OS === 'web' ? <Button
          title="Choisissez vos documents"
          onPress={handlePickDocs}
          style={homeStyle.chooseButton}
        /> : <TouchableOpacity
            onPress={handlePickDocsMobile}
            style={homeStyle.chooseButtonMobile}>
            <Text
              style={homeStyle.chooseButtonText} >Choisissez vos documents</Text>
          </TouchableOpacity>
        }

        {/* {Platform.OS === 'web' ? <Button
          title="Choisissez vos documents"
          onPress={handlePickDocs}
          style={homeStyle.chooseButton}
        /> : <AssetsSelector
          Settings={widgetSettings}
          Errors={widgetErrors}
          Styles={widgetStyles}
          Navigator={widgetNavigator}
        />} */}



        {/* <MediaSelection /> } */}

        {/* <Button
          title="Choisissez vos documents"
          onPress={handlePickDocsMobile}
          style={homeStyle.chooseButtonMobile}
        /> */}


        {/* {selectedDocsArray !== null ? ( */}
        {selectedDocs !== null ? (
          <DisplayPickedDocs />
        ) : (
          <Text>Vous n'avez pas sélectionné de documents</Text>
        )}
        {/* <DisplayPickedDocs/> */}


        {/* *********************Version Mobile********************* */}
        {/* <Button
            title="Choisissez vos documents"
            onPress={handlePickDocs}
            style={homeStyle.chooseButtonMobile}
          /> */}

        {/* <AssetsSelector
          Settings={widgetSettings}
          Errors={widgetErrors}
          Styles={widgetStyles}
          Navigator={widgetNavigator}
        /> */}

      </View>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default Projects;
