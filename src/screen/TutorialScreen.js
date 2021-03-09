import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";
import Tutorial from "../components/Tutorial";
const TutorialScreen = ({ navigation }) => {
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
          <Text style={styles.title}>Hướng dẫn sử dụng</Text>
        </View>
        <Tutorial
          title="GIA HẠN - Khảo sát lấy ý kiến phản hồi từ người học về hoạt động giảng dạy của giảng viên Học kì I (Năm học 2020 - 2021)"
          time="ngày đăng 03/11/2020"
        />
        <Tutorial
          title="GIA HẠN - Khảo sát lấy ý"
          time="ngày đăng 03/11/2020"
        />
      </SafeAreaView>
    </View>
  );
};

export default TutorialScreen;

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
    padding:SPACING * 2
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: TextColor1,
    // marginLeft: width / 4.6,
  },
});
