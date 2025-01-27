import React, { ReactElement, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Login from "../screens/Login";
import { RootState, AppDispatch } from "../redux/store";

const Stack = createNativeStackNavigator();
const AuthStack = (): ReactElement => {
  const isFirstLaunch = useSelector(
    (state: RootState) => state.onboarding.isFirstLaunch
  );
  return (
    <Stack.Navigator initialRouteName={isFirstLaunch ? "Onboarding" : "Login"}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
