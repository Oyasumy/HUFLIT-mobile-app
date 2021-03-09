import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Personal from "../components/Personal";
const Female = require("../../assets/images/user.png");
const Male = require("../../assets/images/user2.png");
const PersonalScreen = ({ navigation, data }) => {
  const [sex, setSex] = React.useState(data ? "Nam" : (data[17].content !== undefined ? data[17].content : "Nam") === "Nam" ? true : false);

  const Show = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            marginLeft: SPACING * 3,
            marginTop: width / 4,
          }}>
          <ImageBackground
            source={!sex === true ? Female : Male}
            style={{
              width: width / 3,
              height: width / 3,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: "column",
              marginTop: SPACING * 2,
              marginLeft: SPACING * 2,
            }}>
            <Text style={styles.name} numberOfLines={2} adjustsFontSizeToFit>
              {data[15].content}
            </Text>
            <View style={[{ flexDirection: "row", alignItems: "center" }, styles.id]}>
              <MaterialCommunityIcons name="id-card" size={24} color="white" style={{ marginRight: SPACING }} />
              <Text style={styles.id}> {data[12].content}</Text>
            </View>
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <FontAwesome5 name="external-link-alt" size={20} color="white" style={{ marginRight: SPACING, marginLeft: SPACING / 4 }} />
              <Text style={styles.tern}> {data[23].content}</Text>
            </View>
          </View>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <Personal data={data} />
        </SafeAreaView>
      </>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.nav}>
        <Ionicons name="ios-arrow-back" size={24} color="white" style={styles.icons} onPress={() => navigation.pop()} />
      </View>
      {Object.keys(data).length > 0 ? (
        <Show />
      ) : (
        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            fontWeight: "700",
            alignSelf: "center",
            top: width / 2,
            color: "white",
          }}>
          Nothing 🐶🐶🌳🌳
        </Text>
      )}
    </View>
  );
};

export default PersonalScreen;

const styles = StyleSheet.create({
  nav: {
    width: width,
    height: width / 1.5,
    backgroundColor: PrimaryColor,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icons: {
    marginLeft: SPACING * 2,
    position: "absolute",
    marginTop: SPACING * 5,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: TextColor1,
    width: width / 2,
  },
  id: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: SPACING / 2,
    color: TextColor1,
  },
  tern: {
    fontSize: 15,
    fontWeight: "700",
    color: TextColor1,
  },
});
