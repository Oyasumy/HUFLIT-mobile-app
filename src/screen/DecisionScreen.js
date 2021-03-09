import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";
import Tutorial from "../components/Tutorial";
import Decision from "../components/Decision";
const DecisionScreen = ({ navigation, data }) => {
  // console.log("data, decision", data);
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.nav}>
          <Ionicons name="ios-arrow-back" size={24} color="white" style={[styles.icons]} onPress={() => navigation.pop()} />
          <Text style={styles.title}>Quyết định sinh viên</Text>
        </View>
        {data?.map((item, index) => {
          return <Decision key={index} title={item.noiDung} sender={item.soQuyetDinh} type={item.loaiQuyetDinh} year={item.namHoc} tern={item.hocKi} time={item.ngayKy} />;
        })}
      </SafeAreaView>
    </View>
  );
};

export default DecisionScreen;

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
    position: "absolute",
    left: 0,
    zIndex: 1,
    padding: SPACING * 2,
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: TextColor1,
  },
});
