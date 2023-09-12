import React from "react";
import { View } from "react-native";
import Home from "./src/screens/Home";
import Products from "./src/screens/Products";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Caveat: require("./assets/Fonts/Caveat-VariableFont_wght.ttf"),
    Satisfy: require("./assets/Fonts/Satisfy-Regular.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <View>
      {/* <Home /> */}
      <Products category={""} />
    </View>
  );
}
