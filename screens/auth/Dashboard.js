import React, { useState, useEffect } from "react";
import { Button, View, StyleSheet } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navigation.navigate("LogIn")} />
      <View style={{ margin: 10 }}></View>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      <View style={{ margin: 10 }}></View>
      <Button
        title="Scan QR Code"
        onPress={() => navigation.navigate("QRCode")}
      />
      <View style={{ margin: 10 }}></View>
      <Button title="NFC" onPress={() => {}} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
export default Dashboard;
