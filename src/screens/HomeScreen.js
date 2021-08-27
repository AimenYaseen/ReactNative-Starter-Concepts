import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go to Components Screen"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
        style={styles.touchStyle}
      >
        <Text style={styles.text2}>GO TO LIST SCREEN</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  text2: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  touchStyle: {
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
    backgroundColor: "#0E8DE8",
    paddingBottom: 7,
    paddingTop: 7,
  },
});

export default HomeScreen;

// Two ways to use a button
// Button element & TouchableOpacity