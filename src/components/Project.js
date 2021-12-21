import React, { useState, useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../Styles/global";
import { homeStyle } from "../Styles/home";
import * as DocumentPicker from "expo-document-picker";
import * as MediaLibrary from "expo-media-library";
// import DisplayDocs from "./DisplayDocs";
import MediaSelection from "./MediaSelection";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";
import uuid from "uuid";
import * as ImagePicker from "expo-image-picker";
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";




const Projects = () => {
  const [textDescription, setTextDescription] = useState("");
  const [selectedDocs, setSelectedDocs] = useState({});
  const [selectedFileList, setSelectedFileList] = useState({});


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
    // if (Platform.OS !== 'web') {
    //   const { status } = await MediaLibrary.requestPermissionsAsync();
    //   if (status !== 'granted') {
    //     alert("Désolé, la permission est nécessaire pour accéder à la galerie");
    //     return
    //   }
    // }
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


  // const selectedDocsArray = Object.entries(selectedDocs);
  // selectedDocsArray.map((item, index) => {
  //   console.log(item?.[1], index);
  //   console.log(item?.[1]?.[0].name, index);
  //   console.log(item?.[1]?.[1].name, index);
  //   console.log(item?.[1]?.[2].name, index);

  // });

  // const selectedDocsArray = Object.keys(selectedDocs).map(selectedDoc => {
  //     return{id: selectedDoc, name: selectedDocs[selectedDoc]}
  // });

  // const [ i, setI] = useState(item?.[""])
  // const [ j, setJ] = useState(item?.[""]?.[""])

  // console.log(selectedDocsArray);

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
          
          <TouchableOpacity
            // onPress={}
            style={[globalStyles.btn, homeStyle.chooseButton]}>
            <Text style={globalStyles.btnText}>Envoyez vos documents</Text>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={}
            style={[globalStyles.btn, homeStyle.chooseButton]}>
            <Text style={globalStyles.btnText}>Choisir plus de documents</Text>
            </TouchableOpacity>

        </View>
      );
    }
  };


  // async function DisplayPickedDocs() {

  //   // await handlePickDocs();
  //   if (selectedDocs !== null) {
  //     return (
  //       <View style={styles.container}>
  //         <Image
  //           source={{ uri: selectedDocs?.localUri }}
  //           // source={require({ name: selectedDocsArray[setI][setJ].name})}
  //           // source={require({ name: selectedDocs?.[selectedDoc]})}
  //           style={styles.thumbnail}
  //         />
          
  //         <TouchableOpacity
  //           // onPress={}
  //           style={[globalStyles.btn, homeStyle.chooseButton]}>
  //           <Text style={globalStyles.btnText}>Envoyez vos documents</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //           // onPress={}
  //           style={[globalStyles.btn, homeStyle.chooseButton]}>
  //           <Text style={globalStyles.btnText}>Choisir plus de documents</Text>
  //           </TouchableOpacity>

  //       </View>
  //     );
  //   }
  // };





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


  // const handlePickDocsMobile =  () => {
  const handlePickDocsMobile = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        alert("Désolé, la permission est nécessaire pour accéder à la galerie");
        return
      } else {
        return (
          <View>
            <MediaSelection />
          </View>
        )
      }
    }
  }
  // const handlePickDocsMobile = async () => {
  //   if (Platform.OS !== 'web') {
  //     const { status } = await MediaLibrary.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       alert("Désolé, la permission est nécessaire pour accéder à la galerie");
  //       return
  //     }

  //     return(
  //       <>
  {/* <MediaSelection /> */ }
  //         <AssetsSelector
  //           Settings={widgetSettings}
  //           Errors={widgetErrors}
  //           Styles={widgetStyles}
  //           Navigator={widgetNavigator}
  //         />
  //       </>
  //     )

  //   }
  // }


  // Construction de mon textArea
  // const TextAreaDescription = (props) => {
  //   return <TextInput {...props} editable maxLength={1600} />;
  // };


  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <View>
        {/* <TextAreaDescription
          // onChangeText={(textDescription) => setTextDescription(textDescription)}
          value={textDescription}
          onChangeText={text => setTextDescription(text)}
          style={homeStyle.textarea}
          placeholder={"Entrez votre description ici"}
          multiline={true}
          numberOfLines={3}
        /> */}

        <TextInput
          value={textDescription}
          onChangeText={text => setTextDescription(text)}
          style={homeStyle.textarea}
          placeholder={"Entrez votre description ici"}
          multiline={true}
          numberOfLines={3}
        />

        {/* ********************* Buttons ********************* */}

        {/* Si on est sur l'ordi on active document-picker,
        Si on est sur mobile on active images-picker */}
        {/* {Platform.OS === 'web' ? <TouchableOpacity
          onPress={handlePickDocs}
          style={[globalStyles.btn, homeStyle.chooseButton]}>
            <Text style={globalStyles.btnText}>Choisissez vos documents</Text>
          </TouchableOpacity>
        : <TouchableOpacity
            onPress={handlePickDocsMobile}
            // style={[globalStyles.btn, homeStyle.chooseButtonMobile]}>
            style={homeStyle.chooseButtonMobile}>
             <Text style={globalStyles.btnText}>Choisissez vos documents</Text>
          </TouchableOpacity>
        } */}


        {Platform.OS === 'web' ? <TouchableOpacity
          onPress={handlePickDocs}
          style={[globalStyles.btn, homeStyle.chooseButton]}>
          <Text style={globalStyles.btnText}>Choisissez vos documents</Text>
        </TouchableOpacity> 
        : 
        <TouchableOpacity
          onPress={handlePickDocsMobile}
          style={[globalStyles.btn, homeStyle.chooseButton]}>
          <Text style={globalStyles.btnText}>Choisissez vos documents</Text>
        </TouchableOpacity>}

        <DisplayPickedDocs />


        {/* { if (Platform.OS !== 'web') {
          return(
          <MediaSelection />
          )
        }

        } */}

        <MediaSelection /> 

        {/* <Button
          title="Choisissez vos documents"
          onPress={handlePickDocsMobile}
          style={homeStyle.chooseButtonMobile}
        /> */}


        {/* {selectedDocsArray !== null ? ( */}
        {/* {selectedDocs !== null ? 
            <DisplayPickedDocs />
         : (
          <Text>Vous n'avez pas sélectionné de documents</Text>
        )} */}

      </View>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "#9994B2",
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
