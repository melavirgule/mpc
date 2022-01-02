import React, { useState } from "react";
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
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Projects from "./Project";
import ThankYouScreen from "../screens/ThankYouScreen";

const AddMoreOrSend = () => {
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true);

  const addProject = () => {
    // return(
    <Projects />;
    // )
  };

  const handleSendDocs = () => {
    navigation.navigate("ThankYouScreen", { screen: "ThankYouScreen" });
  };

  const Checkbox = ({ onValueChange, selected }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onValueChange}
      style={homeStyle.checkbox}
    >
      {selected && <Text style={homeStyle.checkmark}>✓</Text>}
    </TouchableOpacity>
  );
  const [isSelected, setIsSelected] = useState(false);
  const toggleCheckbox = () => setIsSelected(!isSelected);
  const enableBtn = () => setDisabled(false);

  const goToDisclaimer = (props) => {
    navigation.navigate("DisclaimerScreen", { screen: "DisclaimerScreen" });
  };

  return (
    <View style={homeStyle.addMoreContainer}>
      <Text>
        Souhaitez vous envoyer des documents pour une autre réalisation ?
      </Text>

      <View style={homeStyle.addBtnsContainer}>
        <View>
          <TouchableOpacity
            onPress={addProject}
            style={[globalStyles.btn, homeStyle.addButton]}
          >
            <Text style={globalStyles.btnText}>Ajouter une réalisation</Text>
          </TouchableOpacity>
          <Text style={homeStyle.addMoreText}>Oui, S'il vous plaît</Text>
        </View>

        <View style={homeStyle.sendingBtnContainer}>
          <TouchableOpacity
            onPress={handleSendDocs}
            style={[globalStyles.btn, homeStyle.addButton]}
            disabled={disabled}
          >
            <Text style={globalStyles.btnText}>J'envoie</Text>
          </TouchableOpacity>
          <Text style={homeStyle.addMoreText}>
            Non merci, j'ai terminé et j'envoie ces documents
          </Text>
        </View>
      </View>

      <View style={homeStyle.checkboxContainer}>
        <Checkbox onValueChange={toggleCheckbox} selected={isSelected} />
        <TouchableOpacity activeOpacity={0.8} onPress={toggleCheckbox}>
          <Text style={homeStyle.beforeLabel}>
            J'accepte les
            <TouchableOpacity activeOpacity={0.8} onPress={goToDisclaimer}>
              <Text style={homeStyle.label}>conditions générales</Text>
            </TouchableOpacity>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMoreOrSend;
