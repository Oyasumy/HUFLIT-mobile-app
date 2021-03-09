import React from "react";
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { height, SPACING, width } from "../common/Theme";
import { material } from "react-native-typography";
import TouchableScale from "react-native-touchable-scale";
import { SharedElement } from 'react-navigation-shared-element';
const LoginScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);

  const animationValue = React.useRef(new Animated.Value(0)).current;
  const animationValue2 = React.useRef(new Animated.Value(0)).current;

  const inputRange = [0, 0.5, 1];
  //#region
  const animation = (toValue, time) =>
    Animated.timing(animationValue, {
      toValue,
      duration: 1000 + time,
      useNativeDriver: true,
    });
  const opacityBg1 = animationValue.interpolate({
    inputRange,
    outputRange: [0, 0.5, 1],
  });
  const translateYBg1 = animationValue.interpolate({
    inputRange,
    outputRange: [0, 20, 50],
  });
  //#endregion
  //#region
  const animation2 = (toValue, time) =>
    Animated.timing(animationValue2, {
      toValue,
      duration: 1000 + time,
      useNativeDriver: true,
    });
  const opacityBg2 = animationValue2.interpolate({
    inputRange,
    outputRange: [0, 0.5, 1],
  });
  const translateYBg2 = animationValue2.interpolate({
    inputRange,
    outputRange: [-50, -20, 0],
  });
  const scaleBg2 = animationValue2.interpolate({
    inputRange,
    outputRange: [0.3, 0.8, 1],
  });
  const scaleBg1 = animationValue.interpolate({
    inputRange,
    outputRange: [0.7, 0.8, 1],
  });
  //#endregion
  React.useEffect(() => {
    setIndex(1);
    animation(1, 0).start();
    setTimeout(() => {
      animation2(1, 1000).start();
    }, 500);
  }, []);
  // React.useEffect(() => {
  //   setIndex(index === 1 ? 0 : 1);
  //   animation(index === 1 ? 0 : 1).start();
  // }, []);

  const transEle = () => {
    console.log(index);
    setIndex(index === 1 ? 0 : 1);
    animation(index === 1 ? 0 : 1, 0).start();
    setTimeout(() => {
      animation2(index === 1 ? 0 : 1, 1000).start();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { opacity: opacityBg2, transform: [{ translateY: translateYBg2 }] },
          styles.bg0,
        ]}
      >
        <ImageBackground
          resizeMode="contain"
          // resizeMethod="resize"
          source={require("../../assets/images/bg0.png")}
          style={[styles.bg0]}
        />
      </Animated.View>
      <Animated.View
        style={[
          { opacity: opacityBg1, transform: [{ translateY: translateYBg1 }] },
          styles.bg1,
        ]}
      >
        <ImageBackground
          resizeMode="contain"
          // resizeMethod="resize"
          source={require("../../assets/images/bg3.png")}
          style={[styles.bg1]}
        />
      </Animated.View>
      <Animated.View
        style={[
          { opacity: opacityBg2, transform: [{ translateY: translateYBg2 }] },
          styles.bg2,
        ]}
      >
        <ImageBackground
          resizeMode="contain"
          // resizeMethod="resize"
          source={require("../../assets/images/bg2.png")}
          style={[styles.bg2]}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.cover,
          {
            opacity: opacityBg2,
            transform: [
              {
                scale: scaleBg2,
              },
            ],
          },
        ]}
      >
        <Text style={styles.title}>Welcome</Text>
      </Animated.View>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity: opacityBg2,
            transform: [
              {
                scale: scaleBg1,
              },
            ],
          },
        ]}
      >

        <TouchableScale
          activeScale={0.9}
          tension={70}
          friction={2}
          // style={{}}

          onPress={() => navigation.push("SignIn2")}
          // onPress={() => transEle()}
        >
          <View style={[styles.button]}>
            <Text style={[styles.text]}>Start</Text>
          </View>
        </TouchableScale>
      
      </Animated.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection:'column-reverse'
  },
  bg0: {
    position: "absolute",
    width: width,
    height: height,
    zIndex: -99,
    // backgroundColor:'#000',
  },
  bg1: {
    position: "absolute",
    width: width,
    height: height,
    // backgroundColor:'#000',
    zIndex: -70,
    bottom: -width / 3,
  },
  bg2: {
    position: "absolute",
    width: width,
    height: height,
    // backgroundColor:'#000',
    zIndex: -80,
    bottom: -width / 6,
  },
  button: {
    position: "absolute",
    width: 180,
    height: 70,
    borderRadius: 44,
    backgroundColor: "#705EEA",
    zIndex: -50,
    // alignContent:'center',
    top: height - 200,
    alignSelf: "center",
    // marginTop:-300
    // flexGrow:1
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
    color: "#fff",
  },
  cover: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    top: width / 1.5,
  },
  title: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 59,
  },
});
