import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Redux
import { Provider } from "react-redux";
import configStore from "./src/redux/configStore";
import MainView from "./src";
const store = configStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainView />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
