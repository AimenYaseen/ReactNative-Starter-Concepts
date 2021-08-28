import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Color Screen</Text>
      <Button title="Add a Color" />
      <View
        style={{
          height: 80,
          width: 80,
          backgroundColor: randomColor(),
          marginLeft: 5,
          marginTop: 10,
        }}
      />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 20,
  },
  textStyle2: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});

export default ColorScreen;
