import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Button,
  Platform,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyle } from "../Styles/home";
import * as DocumentPicker from "expo-document-picker";
import * as MediaLibrary from "expo-media-library";
// import DisplayDocs from "./DisplayDocs";

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
    
    // setSelectedDocs({
    //   // localUri: pickerResult.uri,
    //   // file: pickerResult.file.name,
    //   output: pickerResult.output,
    // });
  };
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
            source={{ uri: selectedDocs.localUri}}
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

  // voir ce qu'il se passe pour le textarea
  return (
    <SafeAreaView>
      <View>
        <TextAreaDescription
          // onChangeText={(textDescription) => setTextDescription(textDescription)}
          // value={textDescription}
          style={homeStyle.textarea}
          placeholder={"Entrez votre description ici"}
          multiline={true}
          numberOfLines={3}
        />

        <Button
          title="Choisissez vos documents"
          onPress={handlePickDocs}
          style={homeStyle.chooseButton}
        />
        {/* {selectedDocsArray !== null ? (
          <DisplayPickedDocs />
        ) : (
          <Text>Vous n'avez pas sélectionné de documents</Text>
        )} */}
        <DisplayPickedDocs/>
      </View>
    </SafeAreaView>
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
