import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const bg = require("../../assets/images/36482-pigeons.json");
const PlashScreen = () => {
  const LottieRef = React.useRef(null);
  useEffect(() => {
    LottieRef.current.play();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* {stop ?  : ""} */}
      <View style={[styles.container, StyleSheet.absoluteFillObject]}>
        <LottieView
          ref={LottieRef}
          source={bg}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </View>
      <Text style={styles.text}>Sign in!</Text>
    </View>
  );
};

export default PlashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "relative",
    top: "80%",
    fontSize: 36,
    fontWeight: "800",
    justifyContent: "center",
    alignSelf: "center",
    opacity:.4,
    color:'#5E5FEA'
    // fontFamily:"" 
  },
});
