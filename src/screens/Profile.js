import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import { colors } from "../theme/colors";
import { users } from "../data/users";

const Profile = () => {
  let user = users[0];

  return (
    <SafeAreaView>
      <Header title="Perfil" />
      <View style={styles.container}>
        <Image
          style={styles.imagen}
          source={{
            uri: "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png",
          }}
        />
        <Text style={styles.text}>Nombre: {user.nombre}</Text>
        <Text style={styles.text}>Pais: {user.pais}</Text>
        <Text style={styles.text}>Edad: {user.edad}</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.log("Editar perfil")}
        >
          <Text style={styles.buttonText}>Editar perfil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    marginTop: 20,
    fontFamily: "Satisfy",
    fontSize: 20,
    fontWeight: "600",
    color: colors.heavyGreen,
  },
  button: {
    // Button styles
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: colors.mediumGreen,
  },
  buttonText: {
    // Button text styles
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Satisfy",
    color: "black",
  },
});

export default Profile;
