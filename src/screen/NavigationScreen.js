import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import LoginContainer from "../container/LoginContainer";
import HomeScreen from "./HomeScreen";
import { AuthContext } from "../Context/Context";
// import { AsyncStorage } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Easing } from "react-native";
import ScheduleStudy from "./ScheduleStudy";
import PersonalScreen from "./PersonalScreen";
import NotificationScreen from "./NotificationScreen";
import TutorialScreen from "./TutorialScreen";
import DecisionScreen from "./DecisionScreen";
import HomeContainer from "../container/HomeContainer";
import PersonalContainer from "../container/PersonalContainer";
import DecisionContainer from "../container/DecisionContainer";
import FinancialContainer from "../container/FinancialContainer";



// const Stack = createStackNavigator();
const Stack = createSharedElementStackNavigator();

export default function NavigationScreen() {
  // var AsyncStorage = useAsyncStorage();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "IS_LOADING":
          return {
            ...prevState,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "IS_LOADING" });
    }, 10);
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data,token) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        // var { username, password } = data; myToken
        console.log("sign", data);
        if (data.user !== "" && data.pass !== "") {
          if (data.toggleCheckBox) {
            await AsyncStorage.setItem("user", JSON.stringify(data));
          } else {
            await AsyncStorage.removeItem("user");
          }
          dispatch({ type: "SIGN_IN", token: token });
        }
      },
      signOut: async () => {
        // await AsyncStorage.removeItem("myToken");
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  const options = () => ({
    headerBackTitleVisible: false,
    gestureEnabled: false,
    transitionSpec: {
      open: {
        animation: "timing",
        config: { duration: 400, easing: Easing.inOut(Easing.ease) },
      },
      close: {
        animation: "timing",
        config: {
          duration: 400,
          easing: Easing.inOut(Easing.ease),
        },
      },
    },
    cardStyleInterpolator: ({ current: { progress } }) => {
      return {
        cardStyle: {
          opacity: progress,
        },
      };
    },
  });
  return (
   
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={options}
              />
            ) : state.userToken == null ? (
              // No token found, user isn't signed in
              <>
                <Stack.Screen
                  name="SignIn"
                  component={LoginScreen}
                  options={options}
                />
                <Stack.Screen
                  name="SignIn2"
                  component={LoginContainer}
                  options={options}
                />
              </>
            ) : (
              <>
                // User is signed in
                <Stack.Screen
                  name="Home"
                  component={HomeContainer}
                  options={options}
                />
                <Stack.Screen
                  name="DecisionScreen"
                  component={DecisionContainer}
                  options={options}
                />
                <Stack.Screen
                  name="FinancialScreen"
                  component={FinancialContainer}
                  options={options}
                />
                <Stack.Screen
                  name="TutorialScreen"
                  component={TutorialScreen}
                  options={options}
                />
                <Stack.Screen
                  name="NotificationScreen"
                  component={NotificationScreen}
                  options={options}
                />
                <Stack.Screen
                  name="PersonalScreen"
                  component={PersonalContainer}
                  options={options}
                />
                <Stack.Screen
                  name="ScheduleStudy"
                  component={ScheduleStudy}
                  options={options}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
   
  );
}
