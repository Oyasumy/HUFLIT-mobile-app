import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";
import Schedule from "../components/Calenda";
const ScheduleStudy = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.nav}>
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color="white"
            style={styles.icons}
            onPress={() => navigation.pop()}
          />
          <Text style={styles.title}>Lịch học</Text>
        </View>
        {/* <Headers navigation={navigation} title="Lịch học" /> */}

        {/* <Calenda/> */}
        <Schedule/>
      </SafeAreaView>
    </View>
  );
};

export default ScheduleStudy;

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
