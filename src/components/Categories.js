import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";
import { colors } from "../theme/colors";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CategoryItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container styles
    backgroundColor: colors.heavyGreen,
    paddingTop: 20,
  },
});

export default Categories;
