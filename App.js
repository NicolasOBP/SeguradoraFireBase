import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import MyStack from "./navgator/myStack";

import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";
import { PegaDoc } from "./Pages/PegaDoc";
import InfosProvider from "./context/context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    JosefinSans_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <InfosProvider>
        <StatusBar />
        <MyStack />
      </InfosProvider>
    </NavigationContainer>
    //<PegaDoc/>
  );
}
