import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";
import Notification from "../components/Notification";

const NotificationScreen = ({ navigation, route }) => {
  // console.log(route.params);
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.nav}>
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color="white"
            style={styles.icons}
            onPress={() => navigation.pop()}
          />
          <Text style={styles.title}>Thông báo</Text>
        </View>

        {/* notification */}
        {route.params.data
          ? showNotification(route.params.data)
          : null}
       
      </SafeAreaView>
    </View>
  );
};

const showNotification = (data) => {
  // console.log("dt",data);
  var result = null;
  result = data.map((item, i) => {
    return (
      <Notification key={i} title={item.title} sender={item.sender} time={item.date} />
    );
  });
  return result
};
export default NotificationScreen;

const styles = StyleSheet.create({
  nav: {
    width: width,
    height: 56,
    alignItems: "center",
    backgroundColor: PrimaryColor,
    flexDirection: "row",
    justifyContent: "center",
  },
  icons: {
    // padding: 15,
    // marginLeft: SPACING * 2,
    position: "absolute",
    // marginTop:width/7,
    left: 0,
    zIndex: 1,
    padding: SPACING * 2,
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: TextColor1,
    // marginLeft: width / 4.6,
  },
});
