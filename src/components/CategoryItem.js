import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../theme/colors";

const CategoryItem = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("products", { item: item });
      }}
    >
      <Text style={styles.categoryTitle}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryTitle: {
    // Container styles
    marginHorizontal: 20,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,

    // Border styles
    borderColor: colors.lightColor,
    borderWidth: 2,
    borderRadius: 20,

    // Text styles
    fontSize: 22,
    textAlign: "center",
    color: colors.lightColor,
  },
});

export default CategoryItem;
