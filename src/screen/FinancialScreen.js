import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const FinancialScreen = ({ navigation, data }) => {
  // console.log("da",data);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.nav}>
            <Ionicons name="ios-arrow-back" size={24} color="white" style={[styles.icons]} onPress={() => navigation.pop()} />
            <Text style={styles.title}>Tài chính sinh viên</Text>
          </View>

          {/* Content */}
          <View>
            <Text style={{ fontSize: 20, fontWeight: "600", textAlign: "center", marginTop: 30 }}>{data.year}</Text>
            <View style={{ margin: 20, padding: 10, borderRadius: 15, backgroundColor: "rgba(255,255,255,.6)", shadowColor: "#000", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.2, shadowRadius: 4 }}>
              <View style={styles.containHead}>
                <Text>Phải đóng</Text>
                <Text>{data.phaiDong || 0}</Text>
              </View>
              <View style={styles.containHead}>
                <Text>Đã đóng</Text>
                <Text>{data.daDong}</Text>
              </View>
              <View style={styles.containHead}>
                <Text>Cấn trừ</Text>
                <Text>{data.canTru || 0}</Text>
              </View>
              <View style={styles.containHead}>
                <Text>Miễn giảm</Text>
                <Text>{data.mienGiam || 0}</Text>
              </View>
              <View style={styles.containHead}>
                <Text>Tỉ lệ giảm</Text>
                <Text>{data.tiLeGiam || 0}</Text>
              </View>
              <View style={styles.containHead}>
                <Text>Còn lại</Text>
                <Text>{data.conNo || 0}</Text>
              </View>
              <View style={styles.containHead}>
                <Text>Ngày đóng</Text>
                <Text>{data.ngayDong || "---"}</Text>
              </View>
              <View style={styles.containHead}>
                <Text>Số tiền thu</Text>
                <Text>{data.soPhieuThu || 0}</Text>
              </View>
            </View>

            {/* Detail */}
            <View>
              {data?.data?.map((item) => {
                if (!item.maPhi) return null;
                return (
                  <View style={{ margin: 20, marginBottom: 10,padding:10,backgroundColor:"rgba(255,255,255,.2)" ,borderRadius:12 }}>
                    <Text style={{fontSize:15,fontWeight:"600"}}>{item.tenPhi}</Text>
                    <View>
                      <Text>Mã phí : {item.maPhi}</Text>
                      <Text>Phải đóng : {item.phaiDong || 0}</Text>
                      <Text>Cán trừ : {data.canTru || 0}</Text>
                      <Text>Miễn Giảm : {data.mienGiam || 0}</Text>
                      <Text>Còn nợ : {data.conNo || 0}</Text>
                      <Text>Ngày đóng : {data.ngayDong || "---"}</Text>
                      <Text>Số phiếu thu : {data.soPhieuThu || 0}</Text>
                      <Text>Tỉ lệ giảm : {data.tiLeGiam || 0}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default FinancialScreen;

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
  containHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 5,
  },
});
