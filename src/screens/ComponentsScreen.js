// Creating first React Component
// IMPORTS
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// JavaScript Arrow Function which returns JSX
const ComponentsScreen = () => {
  const name = "Aimen Yaseen";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native!</Text>
      <Text style={styles.subTextStyle}>My name is {name}</Text>
    </View>
  );
  // Text element dosenot accept object values
};

// StyleSheet (Like CSS)
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subTextStyle: {
    fontSize: 20,
  },
});

// Export
export default ComponentsScreen;
