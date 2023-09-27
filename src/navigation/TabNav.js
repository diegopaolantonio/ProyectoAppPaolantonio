import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import RootNavigation from "./RootNavigation";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={focused ? 30 : 24}
              color={focused ? colors.heavyGreen : "black"}
            />
          ),
        }}
        component={Profile}
        name="profile"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="list-alt"
              size={focused ? 30 : 24}
              color={focused ? colors.heavyGreen : "black"}
            />
          ),
        }}
        component={RootNavigation}
        name="rootNavigation"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cart-variant"
              size={focused ? 30 : 24}
              color={focused ? colors.heavyGreen : "black"}
            />
          ),
        }}
        component={Cart}
        name="cart"
      />
    </Tab.Navigator>
  );
};

export default TabNav;
