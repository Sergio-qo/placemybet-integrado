import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

function MaterialHeader11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 2.00 0.00" style={styles.ellipse}>
        <Ellipse
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          cx={1}
          cy={0}
          rx={1}
          ry={0}
        ></Ellipse>
      </Svg>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to MisApuestas")}
          style={styles.button}
        >
          <MaterialCommunityIconsIcon
            name="format-list-bulleted"
            style={styles.leftIcon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            PlaceMyBet
          </Text>
        </View>
        <View style={styles.textWrapper1Stack}>
          <View style={styles.textWrapper1}>
            <Text numberOfLines={1} style={styles.title2}>
              User
            </Text>
          </View>
          <FeatherIcon name="user" style={styles.icon}></FeatherIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(33,153,85,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  ellipse: {
    width: 2,
    height: 0,
    marginLeft: 127,
    marginTop: 94
  },
  button: {
    padding: 11
  },
  leftIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  textWrapper: {
    width: 131,
    marginLeft: 21,
    marginTop: 14
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-regular",
    lineHeight: 18
  },
  textWrapper1: {
    left: 0,
    width: 43,
    position: "absolute",
    opacity: 0.42,
    top: 0
  },
  title2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 18
  },
  icon: {
    left: 31,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    top: 2
  },
  textWrapper1Stack: {
    width: 46,
    height: 18,
    marginLeft: 115,
    marginTop: 14
  },
  buttonRow: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: -124,
    marginTop: 5
  }
});

export default MaterialHeader11;
