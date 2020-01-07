import React, { Component } from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import CupertinoSearchBarWithMic from "../components/CupertinoSearchBarWithMic";
import MaterialHeader11 from "../components/MaterialHeader11";

function MisApuestas(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={false}
        barStyle="dark-content"
        hidden={true}
        backgroundColor="rgba(255,255,255,1)"
      ></StatusBar>
      <View style={styles.cupertinoSearchBarWithMicStack}>
        <CupertinoSearchBarWithMic
          style={styles.cupertinoSearchBarWithMic}
        ></CupertinoSearchBarWithMic>
        <MaterialHeader11 style={styles.materialHeader11}></MaterialHeader11>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        ></ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,67,21,1)"
  },
  cupertinoSearchBarWithMic: {
    top: 53,
    left: 7,
    width: 360,
    height: 44,
    position: "absolute"
  },
  materialHeader11: {
    top: 0,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute"
  },
  cupertinoSearchBarWithMicStack: {
    width: 375,
    height: 97,
    marginLeft: -7
  },
  scrollArea: {
    width: 302,
    height: 541,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 52,
    alignSelf: "center"
  },
  scrollArea_contentContainerStyle: {
    width: 302,
    height: 541
  }
});

export default MisApuestas;
