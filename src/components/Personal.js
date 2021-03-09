import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryColor, SPACING, width } from "../common/Theme";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Personal = ({ data }) => {
  
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        {/* CMND */}
        <View style={[styles.ifIContain, { marginTop: SPACING }]}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            CMND:{" "}
            <Text style={styles.ifData}>{data[19].content}</Text>
          </Text>
        </View>
        {/* Tình trạng học */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Tình trạng học:{" "}
            <Text style={styles.ifData}>{data[21].content}</Text>
          </Text>
        </View>
        {/* Email trường */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Email trường: <Text style={styles.ifData}>{data[25].content}</Text>
          </Text>
        </View>
        {/* Email cá nhân */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Email cá nhân: <Text style={styles.ifData}>{data[26].content}</Text>
          </Text>
        </View>
        {/* Địa chỉ liên lạc */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Địa chỉ liên lạc:{" "}
            <Text style={styles.ifData}>{data[27].content}</Text>
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "800",
            marginVertical: SPACING,
            color: PrimaryColor,
          }}
        >
          Thông tin khoá học
        </Text>
        {/* Khoá học */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Khoá học: <Text style={styles.ifData}>{data[0].content}</Text>
          </Text>
        </View>
        {/* Chức vụ */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Chức vụ: <Text style={styles.ifData}>{data[1].content}</Text>
          </Text>
        </View>
        {/* Đối tượng */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Đối tượng: <Text style={styles.ifData}>{data[2].content}</Text>
          </Text>
        </View>
        {/* THPT lớp 12 */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            THPT lớp 12: <Text style={styles.ifData}>{data[3].content}</Text>
          </Text>
        </View>
        {/* Đoàn */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Đoàn: <Text style={styles.ifData}>{data[4].content}</Text>
          </Text>
        </View>
        {/* Ngày vào đoàn */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Ngày vào đoàn: <Text style={styles.ifData}>{data[5].content}</Text>
          </Text>
        </View>
        {/* Đảng */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Đảng: <Text style={styles.ifData}>{data[13].content}</Text>
          </Text>
        </View>
        {/* Ngày vào đảng */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />

          <Text style={styles.ifITitle}>
            Ngày vào đảng: <Text style={styles.ifData}>{data[16].content}</Text>
          </Text>
        </View>
        {/* Loại hình đào tạo */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Loại hình đào tạo:{" "}
            <Text style={styles.ifData}>{data[18].content}</Text>
          </Text>
        </View>
        {/* Cố vấn học tập */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Cố vấn học tập:{" "}
            <Text style={styles.ifData}>{data[20].content}</Text>
          </Text>
        </View>
        {/* Liên hệ cố vấn học tập */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Liên hệ cố vấn học tập:{" "}
            <Text style={styles.ifData}>{data[22].content}</Text>
          </Text>
        </View>
        {/* Lớp sinh viên */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Lớp sinh viên: <Text style={styles.ifData}>{data[24].content}</Text>
          </Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "800",
            marginVertical: SPACING,
            color: PrimaryColor,
          }}
        >
          Thông tin liên lạc
        </Text>

        {/* Dân tộc */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Dân tộc: <Text style={styles.ifData}>{data[6].content}</Text>
          </Text>
        </View>
        {/* Tôn giáo */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Tôn giáo: <Text style={styles.ifData}>{data[7].content}</Text>
          </Text>
        </View>
        {/* Quốc gia */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Quốc gia: <Text style={styles.ifData}>{data[8].content}</Text>
          </Text>
        </View>
        {/* Tỉnh thành */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Tỉnh thành: <Text style={styles.ifData}>{data[9].content}</Text>
          </Text>
        </View>
        {/* Quận huyện */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Quận huyện: <Text style={styles.ifData}>{data[10].content}</Text>
          </Text>
        </View>
        {/* Di động */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Di động: <Text style={styles.ifData}>{data[11].content}</Text>
          </Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "800",
            marginVertical: SPACING,
            color: PrimaryColor,
          }}
        >
          Thông tin người liên hệ
        </Text>

        {/* Họ tên người liên hệ */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Họ tên người liên hệ:{" "}
            <Text style={styles.ifData}>{data[28].content}</Text>
          </Text>
        </View>
        {/* Số điện thoại người liên hệ */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Số điện thoại người liên hệ:{" "}
            <Text style={styles.ifData}>{data[29].content}</Text>
          </Text>
        </View>
        {/* Địa chỉ người liên hệ */}
        <View style={styles.ifIContain}>
          <MaterialCommunityIcons
            name="music-note-half-dotted"
            size={30}
            color={PrimaryColor}
            style={styles.ifIcon}
          />
          <Text style={styles.ifITitle}>
            Địa chỉ người liên hệ:{" "}
            <Text style={styles.ifData}>{data[30].content}</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Personal;

const styles = StyleSheet.create({
  ifIContain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: SPACING * 3,
    marginBottom: SPACING / 2,
    // backgroundColor: '#666'
    width: width - SPACING * 4,
  },
  ifIcon: {
    // backgroundColor: '#666'
  },
  ifITitle: {
    // backgroundColor: '#66f'
    fontSize: 16,
    marginLeft: SPACING * 3,
    width: width / 1.5,
  },
  ifData: {
    fontWeight: "800",
  },
});
