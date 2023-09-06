import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";

const DeleteListModal = ({
  isModalListVisible,
  setIsModalListVisible,
  clearList,
}) => {
  return (
    <Modal transparent={true} visible={isModalListVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Estas seguro que deseas eliminar la lista?</Text>

        <Pressable style={styles.button} onPress={() => clearList()}>
          <Text>SI</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => setIsModalListVisible(false)}
        >
          <Text>NO</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 20,
    verticalAlign: "middle",
    backgroundColor: "lightgreen",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    alignItems: "center",
    width: 50,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default DeleteListModal;
