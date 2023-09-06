import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import DeleteItemModal from "./DeleteItemModal";

const ListItem = ({
  setIsModalItemVisible,
  item,
  setItemToDelete,
  itemDoneFunc,
}) => {
  let imageDone = false;
  if (item.item.done) {
    imageDone = "radio-button-on";
  } else {
    imageDone = "radio-button-off";
  }
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{item.item.name}</Text>

      <Pressable
        style={styles.deleteItem}
        onPress={() => {
          itemDoneFunc(item.item);
        }}
      >
        <Ionicons name={imageDone} size={25} color="green" />
      </Pressable>

      <Pressable
        style={styles.deleteItem}
        onPress={() => {
          setItemToDelete(item.item);
          setIsModalItemVisible(true);
        }}
      >
        <Ionicons name="trash" size={25} color="green" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  item: {
    width: "90%",
    fontSize: 20,
    marginEnd: 20,
  },
  deleteItem: {
    marginLeft: 10,
  }
});

export default ListItem;
