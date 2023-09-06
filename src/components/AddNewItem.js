import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AddNewItem = ({ item, setItem, addItem }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Escriba aquí..."
          style={styles.input}
          value={item}
          onChangeText={(value) => setItem(value)}
        />
      </View>
      <Pressable style={styles.button} onPress={() => addItem()}>
        <Ionicons name="add" size={40} color="green" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 18,
    width: 180,
  },
  inputContainer: {
    marginTop: 20,
    borderColor: "green",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    marginLeft: 15,
  },
});

export default AddNewItem;
