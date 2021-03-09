import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";

const Decision = ({ title, sender, time, type, year, tern }) => {
  return (
    <View style={styles.containIf}>
      <AntDesign
        name="flag"
        size={30}
        color={PrimaryColor}
        style={{ marginLeft: SPACING }}
      />

      <View style={{ maxWidth: width - SPACING * 3 }}>
        <Text style={styles.titleIf}>{title}</Text>
        <View style={styles.boxIf}>
          <Text style={styles.sender}>
            Người gửi:{" "}
            <Text style={styles.data} numberOfLines={2} adjustsFontSizeToFit>
              {sender}
            </Text>
          </Text>
          <Text style={styles.time}>
            Loại quyết định: <Text style={styles.data}>{type}</Text>
          </Text>
        </View>
        <View style={[styles.boxIf, { marginTop: SPACING / 4 }]}>
          <Text style={styles.sender}>{year} - {tern} </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default Decision;

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
    marginLeft: width / 3.2,
  },
  containIf: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: SPACING * 2,
    alignItems: "center",
  },
  titleIf: {
    fontSize: 13,
    fontWeight: "700",
    width: width / 1.3,
    // backgroundColor: "#666",
    opacity: 0.5,
    marginBottom: SPACING / 2,
  },
  boxIf: {
    flexDirection: "row",
  },
  sender: {
    fontSize: 13,
    width: width / 2.9,
    // backgroundColor: "#666",
  },
  time: {
    fontSize: 13,
    marginLeft: SPACING,
    width: width / 2.5,
    // backgroundColor: "#666",
  },
  data: {
    fontWeight: "600",
  },
});
