import React from "react";
import { createStackNavigator } from "react-navigation-stack";

//IMPORT SCENES
import SignUpScreen from "../screens/auth/SignUp";
import LoginScreen from "../screens/auth/LogIn";
import DashboardScreen from "../screens/auth/Dashboard";
import UsernameScreen from "../screens/auth/Username";
import ForgotPasswordScreen from "../screens/auth/ForgotPassword";
import QRCodeScreen from "../screens/auth/QRCode";
const AuthStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    SignUp: SignUpScreen,
    LogIn: LoginScreen,
    Username: UsernameScreen,
    ForgotPassword: ForgotPasswordScreen,
    QRCode: QRCodeScreen,
  },
  {
    initialRouteName: "Dashboard",
    // defaultNavigationOptions: () => ({ headerStyle, headerTitleStyle }),
  }
);

export default AuthStack;
