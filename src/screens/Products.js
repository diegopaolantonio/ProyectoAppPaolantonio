import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Search from "../components/Search";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { products } from "../data/products";
import { colors } from "../theme/colors";

const Products = ({ category }) => {
  let categoryProducts;
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (category != "") {
      categoryProducts = products.filter((el) => el.category === category);
    } else {
      categoryProducts = products;
    }
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter((el) => el.title === text);
      setCategoryProd(titleProduct);
    }
  }, [text, category]);

  return (
    <View style={styles.container}>
      <Header title="Productos" />
      <Search text={text} setText={setText} />
      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      // Container styles
      backgroundColor: colors.heavyGreen,
    },
  });

export default Products;
