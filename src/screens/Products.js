import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Pressable } from "react-native";
import Search from "../components/Search";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { useNavigation } from "@react-navigation/native";
import { products } from "../data/products";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";

const Products = ({ route, navigation }) => {
  let categoryProducts;
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState("");
  const { item } = route.params;

  useEffect(() => {
    if (item != "" && item != "all") {
      categoryProducts = products.filter((el) => el.category === item);
    } else {
      categoryProducts = products;
    }
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter((el) => el.title === text);
      setCategoryProd(titleProduct);
    }
  }, [text, item]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={item} navigation={navigation} />
      <Search text={text} setText={setText} />
      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} />
        )}
      />
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container styles
    paddingBottom: 30,
    backgroundColor: colors.heavyGreen,
  },
  backButton: {
    // Back button styles
    position: "absolute",
    top: 45,
    left: 10,
  },
});

export default Products;
