import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialButtonDark from "../components/MaterialButtonDark";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contrasenaColumn}>
        <Text style={styles.contrasena}>Contraseña:</Text>
        <Text style={styles.usuario}>Usuario:</Text>
        <MaterialRightIconTextbox
          style={styles.materialRightIconTextbox}
        ></MaterialRightIconTextbox>
        <MaterialUnderlineTextbox1
          style={styles.materialUnderlineTextbox1}
        ></MaterialUnderlineTextbox1>
        <MaterialButtonDark
          style={styles.materialButtonDark}
        ></MaterialButtonDark>
      </View>
      <View style={styles.contrasenaColumnFiller}></View>
      <Text style={styles.placeMyBet}>PlaceMyBet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(234,197,24,1)",
    borderColor: "#000000",
    borderWidth: 0
  },
  contrasena: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 71
  },
  usuario: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: -85
  },
  materialRightIconTextbox: {
    width: 245,
    height: 43,
    marginTop: 71
  },
  materialUnderlineTextbox1: {
    width: 245,
    height: 43,
    marginTop: -114
  },
  materialButtonDark: {
    width: 100,
    height: 36,
    marginTop: 129,
    marginLeft: 73
  },
  contrasenaColumn: {
    width: 245,
    marginTop: 342,
    marginLeft: 65
  },
  contrasenaColumnFiller: {
    flex: 1
  },
  placeMyBet: {
    color: "#121212",
    fontSize: 40,
    fontFamily: "calibri-bold",
    lineHeight: 50,
    letterSpacing: 2,
    marginBottom: 533,
    alignSelf: "center"
  }
});

export default LoginScreen;
