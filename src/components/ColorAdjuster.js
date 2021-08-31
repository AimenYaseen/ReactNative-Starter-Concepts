import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorAdjuster = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{color}</Text>
      <View style={{ width: 300, marginLeft: 30 }}>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
        <Text style={{ marginVertical: -5 }} />
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ColorAdjuster;
