import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.nav}>
      <Ionicons
        name="ios-arrow-back"
        size={24}
        color="white"
        style={styles.icons}
        onPress={() => navigation.pop()}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  nav: {
    width: width,
    height: 56,
    alignItems: "center",
    backgroundColor: PrimaryColor,
    flexDirection: "row",
  },
  icons: {
    // padding: 15,
    marginLeft: SPACING * 2,
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: TextColor1,
    marginLeft: width / 3,
  },
});
