import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const CategoryItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.categoryTitle}>{item}</Text>
    </View>
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
