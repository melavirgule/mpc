import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DisclaimerScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <View> */}
        <Text>Cookies & RGPD</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum soluta officia magni. Vero quam animi pariatur odio autem voluptate tempore officiis quo, dolorum quis aperiam cumque, accusantium deserunt non.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quo cupiditate voluptatem blanditiis, quasi reprehenderit quibusdam odio ut veritatis voluptatibus ratione fugit. Fuga error corrupti impedit neque dicta est numquam?
        </Text>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
