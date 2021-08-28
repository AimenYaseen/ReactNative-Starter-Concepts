import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.textStyle}>Counter</Text>
      <Button
        title="Increase"
        //Don't Do This counter++;
        onPress={() => setCounter(counter + 1)}
      />
      <Text></Text>
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text style={styles.textStyle2}>Counter Score : {counter}</Text>
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
    marginTop: 20,
  },
});

export default CounterScreen;
