import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <View>
      <Header title="Categorías" />
      <Categories />
    </View>
  );
};

export default Home;
