import React from "react";
import { View, Text } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

const AlertSweet = ({ show,title,message }) => {
  const [showAlert, setShowAlert] = React.useState(show === true ? true : false);
  return (
    <>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={title|| "ok!"}
        message={message ||"this is a bug :))"}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        // showCancelButton={true}
        // showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        // onCancelPressed={() => {
        //   this.hideAlert();
        // }}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
      />
    </>
  );
};

export default AlertSweet;
