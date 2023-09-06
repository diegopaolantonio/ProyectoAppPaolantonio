import React, { useState } from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddNewItem from "./src/components/AddNewItem";
import ListItem from "./src/components/ListItem";
import DeleteListModal from "./src/components/DeleteListModal";
import DeleteItemModal from "./src/components/DeleteItemModal";

const initialList = [
  { id: 1, name: "Desarrollo Web", done: false },
  { id: 2, name: "Javascript", done: false },
  { id: 3, name: "React JS", done: false },
];

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(initialList);
  const [isModalListVisible, setIsModalListVisible] = useState(false);
  const [isModalItemVisible, setIsModalItemVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState();

  const addItem = () => {
    list.push({
      id: Math.random(),
      name: item,
      done: false,
    });
    setList(list);
    setItem("");
  };

  const itemDoneFunc = (itemDone) => {
    let tempList = [];
    list.forEach((element, index) => {
      tempList[index] = element;
      if (element.id === itemDone.id) {
        if (tempList[index].done === false) {
          tempList[index].done = true;
        } else {
          tempList[index].done = false;
        }
      }
    });
    setList(tempList);
  };

  const clearList = () => {
    setList([]);
    setIsModalListVisible(false);
  };

  const deleteItem = () => {
    const tempList = list.filter((item) => item.id != itemToDelete.id);
    setList(tempList);
    setIsModalItemVisible(false);
  };

  return (
    <View style={styles.container}>
      <DeleteListModal
        isModalListVisible={isModalListVisible}
        setIsModalListVisible={setIsModalListVisible}
        clearList={clearList}
      />

      <DeleteItemModal
        isModalItemVisible={isModalItemVisible}
        setIsModalItemVisible={setIsModalItemVisible}
        deleteItem={deleteItem}
        setItemToDelete={setItemToDelete}
      ></DeleteItemModal>

      <Image
        style={styles.picture}
        source={{
          uri: "https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-check-list-icon-isolated-on-abstract-background-png-image_1776830.jpg",
        }}
      />
      <Text style={styles.title}>Lista de cursos</Text>
      <AddNewItem item={item} setItem={setItem} addItem={addItem} />
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <ListItem
            setIsModalItemVisible={setIsModalItemVisible}
            item={item}
            setItemToDelete={setItemToDelete}
            itemDoneFunc={itemDoneFunc}
          />
        )}
      />
      <Pressable
        style={styles.button}
        onPress={() => setIsModalListVisible(true)}
      >
        <Ionicons name="trash" size={40} color="green" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: "green",
    borderBottomWidth: 5,
  },
  picture: {
    height: 100,
    width: 100,
    marginTop: 40,
  },
  button: {
    marginTop: 15,
    marginLeft: 15,
  },
});
