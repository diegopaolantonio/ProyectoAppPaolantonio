import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import TabNav from "./src/navigation/TabNav";
import store from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Caveat: require("./assets/fonts/Caveat-VariableFont_wght.ttf"),
    Satisfy: require("./assets/fonts/Satisfy-Regular.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </Provider>
  );
}
