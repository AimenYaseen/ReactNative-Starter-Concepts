import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_INCREMENT = 20;

const RGBSquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, value) => {
    // color === 'red', 'green', 'blue'
    // changeValue === +20 , -20
    switch (color) {
      case "red":
        red + value > 255 || red + value < 0 ? null : setRed(red + value);
        return;
      case "green":
        green + value > 255 || green + value < 0
          ? null
          : setGreen(green + value);
        return;
      case "blue":
        blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <Text style={styles.textStyle}>Square Screen</Text>
      <ColorAdjuster
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorAdjuster
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorAdjuster
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <Text style={styles.textStyle2}>Color Box : </Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginLeft: 130,
        }}
      />
    </View>
  );
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
    marginVertical: 10,
  },
});

export default RGBSquareScreen;
