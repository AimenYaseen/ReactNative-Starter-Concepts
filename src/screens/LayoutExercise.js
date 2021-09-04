import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutExercise = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Exercise</Text>
      <View style={styles.viewStyle}>
        <View style={styles.viewStyle1} />
        <View style={styles.viewStyle2} />
        <View style={styles.viewStyle3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 30,
  },
  viewStyle: {
    height: 205,
    borderWidth: 3,
    borderColor: "black",
    alignItems: "flex-start",
  },
  viewStyle1: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  viewStyle2: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    marginHorizontal: 130,
  },
  viewStyle3: {
    height: 100,
    width: 100,
    backgroundColor: "purple",
    position: "absolute",
    alignSelf: "flex-end",
  },
});

export default LayoutExercise;
