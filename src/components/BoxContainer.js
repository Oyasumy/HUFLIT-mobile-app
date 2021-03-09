import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontSize1, TextColor1 } from "../common/Theme";

const BoxContainer = ({children,mess}) => {
  return (
    <View style={styles.box}>
      <View style={styles.boxIon}>
       {children}
      </View>
      <Text style={styles.text} numberOfLines={2} adjustsFontSizeToFit>
        {mess}
      </Text>
    </View>
  );
};

export default BoxContainer;

const styles = StyleSheet.create({
    box: {
        width: 56,
        height: 70,
        alignItems: "center",
        marginTop: 17,
        marginLeft: 15,
      },
      boxIon: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 5,
      },
      text: {
        color: TextColor1,
        fontSize: FontSize1,
        textAlign: "center",
        marginTop: 4,
      },
});
