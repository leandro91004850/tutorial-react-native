import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";

const statusbarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight  + 22 : 64;

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header do app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#49f064',
        paddingTop: statusbarHeigth,
        },
});