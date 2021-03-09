import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PrimaryColor, SPACING } from "../common/Theme";
const News = ({ content, date }) => {
  return (
    <>
      <View style={styles.boxNews}>
        <MaterialCommunityIcons
          name="bell-ring-outline"
          size={24}
          color={PrimaryColor}
          style={{ padding: 15 }}
        />
        <View style={styles.newsContent}>
          <Text style={styles.newText1}>{content}</Text>
          <Text style={styles.newText2}>{date}</Text>
        </View>
      </View>
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  boxNews: {
    width: 315,
    height: 56,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:8
  },
  newsContent: {
    // flexDirection:'column-reverse',
    alignItems: "flex-end",
    marginRight: SPACING,
    // left:0,
  },
  newText1: {
    fontSize: 15,
    fontWeight: "700",
  },
  newText2: {
    opacity: 0.5,
    marginVertical: 3,
  },
});
