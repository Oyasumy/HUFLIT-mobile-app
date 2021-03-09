import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from "react-native";
import { AuthContext } from "../Context/Context";
import AsyncStorage from "@react-native-community/async-storage";
import { height, SPACING, width } from "../common/Theme";

import { Kaede } from "react-native-textinput-effects";
import TouchableScale from "react-native-touchable-scale";
// import CheckBox from "@react-native-community/checkbox";
import CheckBox from "react-native-check-box";
import AlertSweet from "../common/AlertSweet";

const LoginScreen2 = ({ navigation, handleLogin, remember }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const { signIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    console.log("checking");
    loadRestoreLogin();
  }, []);
  const loadRestoreLogin = async () => {
    try {
      // Check AsyncToken
      var data = await AsyncStorage.getItem("user");
      console.log("data", data);
      // Not found
      if (data === null) {
        return;
      }
      // ELse
      var dataPase = JSON.parse(data);
      var { user, pass } = dataPase;
      if (dataPase.user && dataPase.pass) {
        setUsername(user);
        setPassword(pass);
        setToggleCheckBox(true);
        remember(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" resizeMethod="resize" source={require("../../assets/images/bg5.png")} style={[styles.bg0]} />
      <ImageBackground
        resizeMode="contain"
        // resizeMethod="resize"
        source={require("../../assets/images/bg1.png")}
        style={[styles.bg1]}
      />
      {/* <ImageBackground
        resizeMode="contain"
        // resizeMethod="resize"
        source={require("../../assets/images/bg2.png")}
        style={[styles.bg2]}
      /> */}
      <SafeAreaView>
        <View style={styles.cover}>
          <Text style={styles.title}>Sign in</Text>
        </View>
        <View style={styles.header}>
          <Text style={{ fontSize: 38, fontWeight: "800", color: "#fff" }}>Hi!</Text>
        </View>
        <View style={styles.input}>
          {/* user name */}
          <Kaede label={"User Name"} inputPadding={16} value={username} onChangeText={setUsername} style={{ marginBottom: SPACING * 3 }} />
          {/* password  */}
          <Kaede label={"Password"} value={password} onChangeText={setPassword} secureTextEntry />
          {/* // rememberm me ? */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SPACING * 2,
              alignItems: "center",
            }}>
            <CheckBox
              style={{ marginRight: SPACING }}
              onClick={() => {
                remember(!toggleCheckBox);
                setToggleCheckBox((current) => !current);
              }}
              isChecked={toggleCheckBox}
              // leftText={"CheckBox"}
            />
            <Text>Nhớ thông tin đăng nhập.</Text>
          </View>
        </View>
        <View style={[styles.button, { marginTop: SPACING * 8 }]}>
          <TouchableScale
            activeScale={0.7}
            // style={{}}
            // onPress={() => signIn({ user: "17dh110988", pass: "20091999" }, "token")}
            // onPress={() => navigation.push('Home')}

            // onPress={() => CheckValidate(username, password)}
            onPress={() => handleLogin(username, password)}
          >
            <Text style={[styles.text]}>Sign in</Text>
          </TouchableScale>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#5E5FEA",
  },
  bg0: {
    position: "absolute",
    width: width,
    height: width,
    zIndex: -99,
    // backgroundColor:'#000',
  },
  bg1: {
    position: "absolute",
    width: width,
    height: height,
    // backgroundColor:'#000',
    zIndex: -70,
    // bottom:-width/9,
    top: width / 3,
  },
  input: {
    marginTop: width / 2 + 100,
    alignSelf: "center",
    width: width * 0.8,
    overflow: "hidden",
  },
  button: {
    position: "relative",
    width: 180,
    height: 70,
    borderRadius: 44,
    backgroundColor: "#705EEA",
    // backgroundColor: "#000",
    zIndex: -90,
    // alignContent:'center',
    // top: height - 300,
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
    top: width / 4,
  },
  title: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 59,
  },
  header: {
    // backgroundColor:'#666',
    position: "absolute",
    marginTop: width / 2,
    alignSelf: "center",
  },
});
