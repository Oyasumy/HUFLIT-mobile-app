import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";

const Tutorial = ({ title, time }) => {
  return (
    <View style={styles.containIf}>
      {/* <Entypo name="notification" size={30} color={PrimaryColor} /> */}
      <AntDesign name="smileo" size={30} color={PrimaryColor} style={{marginLeft:SPACING}}/>
      <View>
        <Text style={styles.titleIf} numberOfLines={3} adjustsFontSizeToFit>
          {title}
        </Text>
        <Text style={styles.sender}>
          Thời gian:{" "}
          <Text style={styles.data} numberOfLines={2} adjustsFontSizeToFit>
            {time}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Tutorial;

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

  sender: {
    fontSize: 13,
    width: width / 1.5,
    // backgroundColor: "#666",
  },

  data: {
    fontWeight: "600",
  },
});
