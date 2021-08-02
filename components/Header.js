import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors.js";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
});

export default Header;
