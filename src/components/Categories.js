import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
// import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { colors } from "../theme/colors";

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.homeSlice.allCategories)

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
