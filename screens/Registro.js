import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

function Registro(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonViolet
        text1="Registrarse"
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
      <View style={styles.group6}>
        <View style={styles.group5}>
          <View style={styles.rect}></View>
          <TextInput
            placeholder="Nombre"
            placeholderTextColor="rgba(253,110,110,1)"
            style={styles.nombre5}
          ></TextInput>
        </View>
        <View style={styles.group4}>
          <View style={styles.rect1}></View>
          <TextInput
            placeholder="Usuario"
            placeholderTextColor="rgba(253,110,110,1)"
            style={styles.nombre3}
          ></TextInput>
        </View>
        <View style={styles.group3}>
          <View style={styles.rect2}></View>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(253,110,110,1)"
            style={styles.nombre4}
          ></TextInput>
        </View>
        <View style={styles.group2}>
          <View style={styles.rect4}></View>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="rgba(253,110,110,1)"
            style={styles.nombre6}
          ></TextInput>
        </View>
      </View>
      <View style={styles.rect3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonViolet: {
    width: 234,
    height: 46,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(255,0,0,1)",
    marginTop: 649,
    alignSelf: "center"
  },
  group6: {
    width: 206,
    height: 171,
    justifyContent: "space-between",
    marginTop: -401,
    marginLeft: 90
  },
  group5: {
    width: 206,
    height: 18
  },
  rect: {
    width: 206,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "rgba(255,0,0,1)",
    borderWidth: 1,
    marginTop: 17
  },
  nombre5: {
    width: 206,
    height: 17,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: -18
  },
  group4: {
    width: 206,
    height: 18
  },
  rect1: {
    width: 206,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "rgba(255,0,0,1)",
    borderWidth: 1,
    marginTop: 17
  },
  nombre3: {
    width: 206,
    height: 17,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: -18
  },
  group3: {
    width: 206,
    height: 16
  },
  rect2: {
    width: 206,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "rgba(255,0,0,1)",
    borderWidth: 1,
    marginTop: 17
  },
  nombre4: {
    width: 206,
    height: 17,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: -18
  },
  group2: {
    width: 206,
    height: 18
  },
  rect4: {
    width: 206,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "rgba(255,0,0,1)",
    borderWidth: 1,
    marginTop: 17
  },
  nombre6: {
    width: 206,
    height: 17,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: -18
  },
  rect3: {
    width: 206,
    height: 176,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -383,
    alignSelf: "center"
  }
});

export default Registro;
