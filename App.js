import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Caveat: require("./assets/fonts/Caveat-VariableFont_wght.ttf"),
    Satisfy: require("./assets/fonts/Satisfy-Regular.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
