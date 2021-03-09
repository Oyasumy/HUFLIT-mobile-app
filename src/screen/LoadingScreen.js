import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { height, width } from "../common/Theme";
import LottieView from "lottie-react-native";

const LoadingScreen = () => {
  return (
    <>
      <View style={[styles.container, StyleSheet.absoluteFillObject]}>
        <View style={styles.cover}></View>
        <View style={styles.box}>
        <LottieView
            //   ref={animation}
            autoPlay={true}
            style={{
              width: 100,
              height: 100,
            //   position: "absolute",
            //   marginTop: width / 4,
            //   alignSelf:'center',
                // backgroundColor: "#eee",
            }}
            source={require("../../assets/images/loading.json")}
          />
        </View>
      </View>
    </>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    flex: 1,
    backgroundColor: "#666",
    position: "absolute",
    opacity: 0.5,
    height: height,
    width: width,
  },
  box:{
      width:width/3,
      height:width/3,
      borderRadius:25,
      backgroundColor:'#fff',
      justifyContent: "center",
      alignItems: "center",
      overflow:'hidden',
      
  }
});
