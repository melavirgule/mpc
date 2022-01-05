import React, { useState, useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
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
import { useNavigation } from "@react-navigation/native";

const Projects = () => {
  const [textDescription, setTextDescription] = useState("");
  const [selectedDocs, setSelectedDocs] = useState({});
  const [selectedFileList, setSelectedFileList] = useState({});
  const [numberOfProject, setNumberOfProjects] = useState(1);

  const navigation = useNavigation();

  const handlePickDocs = async () => {
    if (Platform.OS === "web") {
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
  };

  // setSelectedDocs({
  //   // localUri: pickerResult.uri,
  //   // file: pickerResult.file.name,
  //   output: pickerResult.output,
  // });
  //   };
  // }
  console.log({ selectedDocs });

  const DisplayPickedDocs = () => {
    if (selectedDocs !== null) {
      return (
        <View style={homeStyle.displayContainer}>
          <Image
            source={{ uri: selectedDocs?.localUri }}
            // source={require({ name: selectedDocs?.[selectedDoc]})}
            style={homeStyle.thumbnail}
          />


        </View>
      );
    }
  };

  // const handlePickDocsOnMobile = async (props) => {
  //   if (Platform.OS !== 'web') {
  //     const { status } = await MediaLibrary.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //     alert("Désolé, la permission est nécessaire pour accéder à la galerie");
  //     return
  //     } else {
  //     navigation.navigate("MediaSelection", {screen: "MediaSelection"});
  //     }
  //   }
  // }
  const handlePickDocsOnMobile = (props) => {
    navigation.navigate("MediaSelection", { screen: "MediaSelection" });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={homeStyle.container}>
          <Text style={[homeStyle.title, homeStyle.projectTitle]}>
            {" "}
            Réalisation n°{numberOfProject}:
          </Text>

          <TextInput
            value={textDescription}
            onChangeText={(text) => setTextDescription(text)}
            style={homeStyle.textarea}
            placeholder={"Entrez votre description ici"}
            placeholderTextColor={"#4D36B7"}
            multiline={true}
            numberOfLines={3}
          />

          <Text style={[homeStyle.title, homeStyle.projectTitle]}>
            Choisissez des documents:
          </Text>
          <View style={homeStyle.DisplayImagesContainer}>
            {Platform.OS === "web" ? (
              <View>
                <TouchableOpacity
                  onPress={handlePickDocs}
                  style={[globalStyles.btn, homeStyle.chooseButton]}
                >
                  <Text style={globalStyles.btnText}>Choisir</Text>
                </TouchableOpacity>
                <DisplayPickedDocs />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handlePickDocsOnMobile}
                style={[globalStyles.btn, homeStyle.chooseButton]}
              >
                <Text style={globalStyles.btnText}>Choisir</Text>
              </TouchableOpacity>
            )}

          </View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Projects;
