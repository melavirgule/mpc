import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../Styles/global";

export default function ThankYouScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity
        // onPress={SignOutUser}
        >
          <Ionicons
            name="exit-outline"
            size={24}
            color="#4D36B7"
            style={globalStyles.logOutIcon}
          />
        </TouchableOpacity>
        <Text>Thank You 🥳</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
