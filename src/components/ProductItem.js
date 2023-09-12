import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../theme/colors";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {item.title} </Text>

      <Image
        style={styles.image}
        height={80}
        width={80}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container styles
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: colors.heavyGreen,

    // Border styles
    borderColor: colors.lightColor,
    borderRadius: 10,
    borderWidth: 2,
  },
  title: {
    // Text styles
    fontSize: 20,
    marginLeft: 20,
    color: colors.lightColor
  },
  image: {
    // Image styles
    marginRight: 10,
  },
});

export default ProductItem;
