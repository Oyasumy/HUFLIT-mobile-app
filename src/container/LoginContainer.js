import React, { useState } from "react";
import { bindActionCreators, compose } from "redux";
import { checkLogin } from "../api";
import AlertSweet from "../common/AlertSweet";
import LoginScreen2 from "../screen/LoginScreen2";

// Action
import * as actionLoading from "../actions/Loading";
import * as actionHome from "../actions/home";
import { connect } from "react-redux";
import { AuthContext } from "../Context/Context";

//

const LoginContainer = ({ actionLoad, actionHome, navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [remember, setRemember] = useState(false);
  // console.log(actionLoad);
  const handleLogin = async (user, pass) => {

    if (!user || !pass) {
      return;
    }
    var { handleSetLoading, handleSetShowAlert } = actionLoad;
    var { handleSetHomeData } = actionHome;
    handleSetLoading(true);
    // console.log("rem",remember);
    // console.log(user, pass);
    if (user === "" || pass === "") {
      return;
    }
    const data = { user: user, pass: pass, toggleCheckBox: remember };
    var dal = { title: "", message: "" };
    await checkLogin(data)
      .then((response) => {
        console.log("res", response);
        if (response === null || response === undefined) {
          console.log("false");

          dal.title = "Hmm something error!!";
          dal.message = "Account or Password is incorrect!!";
        } else {
          console.log("true");

          const dt = {
            cookie: response.cookie,
            message: response.data.message,
            notification: response.data.notification,
          };
          // Set home data
          handleSetHomeData(dt);
          dal.title = "Yeah!!";
          dal.message = "Login successfully!!";
          signIn(data, response.cookie);
        }
      })
      .then(() => {
        handleSetLoading(false);
      })
      .then(() => {
        handleSetShowAlert(true, dal.title, dal.message);
      })
      .then(() => {
        setTimeout(() => {
          handleSetShowAlert(false, "", "");
          console.log("show false");
        }, 2000);
      })
      .catch((er) => {
        throw new Error(er);
        handleSetLoading(false);
        // handleSetShowAlert(true, "dal.title, dal.message");
      });
  };
  return (
    <>
      <LoginScreen2 handleLogin={handleLogin} remember={(re) => setRemember(re)} navigation={navigation} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actionLoad: bindActionCreators({ ...actionLoading }, dispatch),
  actionHome: bindActionCreators({ ...actionHome }, dispatch),
});
const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(LoginContainer);
