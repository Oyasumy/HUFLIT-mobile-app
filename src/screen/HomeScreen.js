import React from "react";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { height, PrimaryColor, SPACING, TextColor1, TextColor2, width } from "../common/Theme";
import { MaterialCommunityIcons, MaterialIcons, SimpleLineIcons, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import BoxContainer from "../components/BoxContainer";
import img from "../../assets/images/homebg.png";
import News from "../components/News";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../Context/Context";
const HomeScreen = (props) => {
  const { signOut } = React.useContext(AuthContext);

  var { navigation, notification } = props;
  var { callApiPersonal } = props;
  return (
    <View style={styles.container}>
      {/* // Logout */}
      <View
        style={{
          position: "absolute",
          width: 100,
          height: 50,
          zIndex: 1,
          right: 10,
          top: 50,
          opacity: 0.6,
          overflow: "hidden",
        }}>
        <TouchableOpacity
          style={[
            {
              width: 100,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            },
          ]}
          onPress={() => {
            signOut();
          }}>
          <AntDesign name="logout" size={24} color="black" />
          <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: SPACING }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ImageBackground source={img} resizeMode="cover" style={{ width: width, height: height, position: "absolute" }} />

      <SafeAreaView>
        <Text numberOfLines={2} adjustsFontSizeToFit style={styles.titleName}>
          Hi, {notification.name || "Oyasumy"}
        </Text>
        <View style={styles.boxContent}>
          {/* Horizontal */}
          <View style={{ flexDirection: "row" }}>
            {/* box1 */}
            <TouchableOpacity onPress={() => navigation.push("ScheduleStudy")}>
              <BoxContainer mess="Lịch học" children={<FontAwesome5 name="clipboard" size={24} color={PrimaryColor} />} />
            </TouchableOpacity>
            {/* box2 */}
            <BoxContainer mess="Lịch thi" children={<Feather name="list" size={24} color={PrimaryColor} />} />

            {/* box3 */}
            <TouchableOpacity onPress={() => navigation.push("DecisionScreen")}>
              <BoxContainer mess="Quyết định sinh viên" children={<MaterialIcons name="settings-input-composite" size={24} color={PrimaryColor} />} />
            </TouchableOpacity>
            {/* box4 */}
            <TouchableOpacity onPress={() => navigation.push("FinancialScreen")}>
            <BoxContainer mess="Tài chính sinh viên" children={<MaterialCommunityIcons name="account-card-details-outline" size={24} color={PrimaryColor} />} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            {/* box1 */}
            <TouchableOpacity onPress={() => navigation.push("TutorialScreen")}>
              <BoxContainer mess="Hướng dẫn sử dụng" children={<MaterialCommunityIcons name="book-outline" size={24} color={PrimaryColor} />} />
            </TouchableOpacity>
            {/* box2 */}
            <TouchableOpacity
              onPress={() =>
                navigation.push("NotificationScreen", {
                  data: notification.data,
                })
              }>
              <BoxContainer mess="Thông báo" children={<MaterialIcons name="notifications-none" size={24} color={PrimaryColor} />} />
            </TouchableOpacity>

            {/* box3 */}
            <TouchableOpacity
              onPress={() => callApiPersonal()}
              // onPress={() => navigation.push("PersonalScreen")}
            >
              <BoxContainer mess="Thông tin cá nhân" children={<SimpleLineIcons name="people" size={24} color={PrimaryColor} />} />
            </TouchableOpacity>
            {/* box4 */}
            <BoxContainer mess="Chương trình đào tạo" children={<MaterialCommunityIcons name="checkbook" size={24} color={PrimaryColor} />} />
          </View>
        </View>

        <View>
          <Text style={styles.news}>Tin tức</Text>
          {/* News list */}
          <ScrollView style={{ maxHeight: width / 1.5 }} showsVerticalScrollIndicator={false}>
            {/* {showNew(notification.data)} */}
            <News content="Lưu ý thông báo thời gian" date="ngày đăng 22/09/2020" />
            <News content="Lưu ý thông báo thời gian" date="ngày đăng 22/09/2020" />
            <News content="Lưu ý thông báo thời gian" date="ngày đăng 22/09/2020" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleName: {
    fontSize: 23,
    fontWeight: "800",
    color: TextColor2,
    textAlign: "center",
    maxWidth: width / 1.5,
    alignSelf: "center",
  },
  boxContent: {
    width: 308,
    height: 186,
    backgroundColor: PrimaryColor,
    marginTop: 31,
    borderRadius: 15,
  },
  news: {
    fontSize: 20,
    fontWeight: "800",
    color: TextColor1,
    marginTop: SPACING * 10,
    marginBottom: SPACING,
  },
  boxNews: {
    width: 315,
    height: 56,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  newsContent: {
    // flexDirection:'column-reverse',
    alignItems: "flex-end",
    marginRight: SPACING,
    // left:0,
  },
  newText1: {
    fontSize: 15,
    fontWeight: "700",
  },
  newText2: {
    opacity: 0.5,
    marginVertical: 3,
  },
});
