import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Pages/home";
import Sobre from "../Pages/sobre";
import Detail from "../Pages/detail";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
        animationTypeForReplace: "pop",
        headerStyle: { backgroundColor: "#48e8f9", height: 90 },
        headerTitleStyle: {
          fontFamily: "JosefinSans_700Bold",
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 40,
      }}
    >
      <Stack.Screen
        options={{ title: "A telinha Inicial" }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ title: "Olha nois aí" }}
        name="Sobre"
        component={Sobre}
      />
      <Stack.Screen
        options={{ title: "Informações extras" }}
        name="Detalhes"
        component={Detail}
      />
    </Stack.Navigator>
  );
}
